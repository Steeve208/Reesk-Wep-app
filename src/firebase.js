import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1lgNp_z_Ee4XESFXQIQJTmkX2UArPxcc",
  authDomain: "reesk-web-app.firebaseapp.com",
  projectId: "reesk-web-app",
  storageBucket: "reesk-web-app.firebasestorage.app",
  messagingSenderId: "333596278687",
  appId: "1:333596278687:web:fe4a05d3b6e23ff8bfc7aa",
  measurementId: "G-GQ7Z7WKJDW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };