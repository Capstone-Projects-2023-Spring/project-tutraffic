import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, deleteUser, getAuth, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: Cypress.env('apiKey'),
  authDomain: Cypress.env('authDomain'),
  projectId: Cypress.env('projectId'),
  storageBucket: Cypress.env('storageBucket'),
  messagingSenderId: Cypress.env('messagingSenderId'),
  appId: Cypress.env('appId'),
  databaseURL: Cypress.env('databaseURL'),
};
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const testEmail = Cypress.env('testEmail')
const testPassword = Cypress.env('testPassword')


/**
 * Create the test user account.
 */
function createAccount() {
  createUserWithEmailAndPassword(auth, testEmail, testPassword)
    .catch((error) => {
      console.log(error.message);
    });
}

/**
 * Delete the signed-in test user account.
 */
function deleteAccount() {
  const user = auth.currentUser
  const credential = EmailAuthProvider.credential(testEmail, testPassword)
  reauthenticateWithCredential(user, credential).then(() => {
    // User re-authenticated.
    deleteUser(user)
  })
    .catch((error) => {
      console.log(error.message);
    });
}

export { app, createAccount, deleteAccount, testEmail, testPassword };