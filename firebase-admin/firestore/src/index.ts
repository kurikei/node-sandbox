import * as dotenv from 'dotenv';
dotenv.config();

import * as admin from 'firebase-admin';
const serviceAccount = require(process.env.CREDENTIAL_FILE_PATH);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const settings = { timestampsInSnapshots: true };
db.settings(settings);

db.collection('messages').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
