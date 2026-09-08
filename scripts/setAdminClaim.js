/**
 * Script Node.js pour attribuer le Custom Claim Firebase Auth `role: "admin"`
 * à un compte utilisateur spécifique sans casser les accès existants.
 *
 * Prérequis :
 * 1. Télécharger la clé de compte de service Firebase (JSON) depuis la console Firebase
 *    (Paramètres du projet > Comptes de service > Générer une nouvelle clé privée).
 * 2. Placer le fichier sous `serviceAccountKey.json` à la racine du projet (non commit sur Git).
 * 3. Exécuter : `node scripts/setAdminClaim.js <email_admin>`
 */

import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serviceAccountPath = path.join(__dirname, '..', 'serviceAccountKey.json');

const targetEmail = process.argv[2] || "mohamedamine.abdellaoui@esprit.tn";

if (!fs.existsSync(serviceAccountPath)) {
  console.error("ERREUR: Le fichier serviceAccountKey.json est manquant.");
  console.error("Veuillez télécharger la clé de compte de service depuis la console Firebase et la placer à la racine.");
  process.exit(1);
}

const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function grantAdminRole(email) {
  try {
    const user = await admin.auth().getUserByEmail(email);
    await admin.auth().setCustomUserClaims(user.uid, { role: "admin" });
    console.log(`SUCCÈS: Le custom claim { role: "admin" } a été attribué avec succès à ${email} (UID: ${user.uid}).`);
    console.log("Vous pouvez maintenant déployer les règles firestore.rules mises à jour.");
  } catch (error) {
    console.error("ERREUR lors de l'attribution du claim admin:", error);
  }
}

grantAdminRole(targetEmail);
