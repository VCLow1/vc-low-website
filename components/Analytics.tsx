/// <reference types="vite/client" />
import React, { useEffect } from 'react';

// Extend window interface for gtag and fbq
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    _fbq: any;
  }
}

export const CONSENT_STORAGE_KEY = 'vclow_cookie_consent';

export const trackConversion = (eventName: string, params?: Record<string, any>) => {
  const consent = localStorage.getItem(CONSENT_STORAGE_KEY);
  if (consent !== 'granted') return;

  // Google Analytics Event
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // Meta Pixel Event
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, params);
  }
};

export const initAnalytics = () => {
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const metaPixelId = import.meta.env.VITE_META_PIXEL_ID;

  // 1. Google Analytics 4
  if (gaId && !document.getElementById('ga-script')) {
    const gaScript = document.createElement('script');
    gaScript.id = 'ga-script';
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    window.gtag('js', new Date());
    window.gtag('config', gaId, { send_page_view: true });
  }

  // 2. Meta Pixel
  if (metaPixelId && !document.getElementById('meta-pixel-script')) {
    (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.id = 'meta-pixel-script';
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', metaPixelId);
    window.fbq('track', 'PageView');
  }
};

const Analytics: React.FC = () => {
  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (consent === 'granted') {
      initAnalytics();
    }
  }, []);

  return null;
};

export default Analytics;
