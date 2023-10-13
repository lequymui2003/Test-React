import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJe8hMjFuAMQORX-PTb3J96mmHCOkp6l4",
    projectId: "fir-bb659",
    authDomain: "fir-bb659.firebaseapp.com",
};

export const fb = initializeApp(firebaseConfig);
export const firestore = getFirestore(fb); 

