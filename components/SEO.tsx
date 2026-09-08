import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  path: string; // e.g. "/blog" or "/services/e-commerce"
  image?: string;
  noindex?: boolean;
  jsonLd?: Record<string, any>;
}

const SITE_URL = 'https://www.vclow.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

// React 19 hoiste automatiquement <title>, <meta> et <link> vers le <head>,
// peu importe ou ils sont rendus dans l'arbre -- pas besoin de react-helmet.
const SEO: React.FC<SEOProps> = ({ title, description, path, image, noindex = false, jsonLd }) => {
  const url = `${SITE_URL}${path}`;
  const metaImage = image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : DEFAULT_IMAGE;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {noindex && <meta name="robots" content="noindex, follow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="VC LOW" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:locale" content="fr_TN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </>
  );
};

export default SEO;
