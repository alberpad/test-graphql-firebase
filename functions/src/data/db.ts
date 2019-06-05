import admin from 'firebase-admin';

import FIREBASE_CONFIG from '../../../firebaseconfig';

const db = admin.initializeApp(FIREBASE_CONFIG);

const firestore = db.firestore();

export default firestore;
