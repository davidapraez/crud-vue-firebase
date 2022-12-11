import { initializeApp } from "firebase/app";
import { getFirestore,doc, onSnapshot, getDocs,collection  } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqzmBRvXs1-Qj9nh-t1sUHiigNmox5_IY",
  authDomain: "crud-vue-ac67e.firebaseapp.com",
  projectId: "crud-vue-ac67e",
  storageBucket: "crud-vue-ac67e.appspot.com",
  messagingSenderId: "529269489531",
  appId: "1:529269489531:web:88f9ffbb02eb17665707de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


//Obtener datos en tiempo real
const getEntrenadores = async () => {
    let entrenaAux:any = []
    const response = await getDocs(collection(db, "entrenadores"));
    response.forEach((doc) => {
       entrenaAux.push(doc.data())
    });

};


export{db,getEntrenadores}