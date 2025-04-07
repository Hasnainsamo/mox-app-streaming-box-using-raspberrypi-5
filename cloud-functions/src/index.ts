import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const validateRfid = functions.https.onRequest((req, res) => {
  const rfid = req.query.rfid;
  const userRef = admin.firestore().collection('users').doc(rfid);

  userRef.get().then((doc) => {
    if (doc.exists) {
      res.status(200).send({ valid: true, data: doc.data() });
    } else {
      res.status(404).send({ valid: false });
    }
  }).catch((error) => {
    res.status(500).send({ error: 'Error fetching RFID data' });
  });
});
