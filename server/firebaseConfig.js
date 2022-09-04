
const admin = require("firebase-admin");

const serviceAccount = require("./servicekey.json");

const firebaseapp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = firebaseapp;