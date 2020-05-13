import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCryNs3fRHLbGl1iJE9ypwPFEHgmUNH32A',
  authDomain: 'e-com-clothing.firebaseapp.com',
  databaseURL: 'https://e-com-clothing.firebaseio.com',
  projectId: 'e-com-clothing',
  storageBucket: 'e-com-clothing.appspot.com',
  messagingSenderId: '803593937463',
  appId: '1:803593937463:web:e14b126163eea6721d95b2',
  measurementId: 'G-CK2CYGCEP6',
};

export const createUserProfileDocument = async (userAuth, adddtionalData) => {
  if (!userAuth) return;
  // console.log(firestore.doc('users/12a1asbah'));

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...adddtionalData,
      });
    } catch (error) {
      console.log('Error, creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoolgle = () => auth.signInWithPopup(provider);

export default firebase;
