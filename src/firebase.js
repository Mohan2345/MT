import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,  signOut} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
 
const firebaseConfig = {
  apiKey: "AIzaSyAdO8zfmz_ZXG3_SSUCjGl9k0CtygkWUYs",
  authDomain: "netflix-clone-1c2c5.firebaseapp.com",
  projectId: "netflix-clone-1c2c5",
  storageBucket: "netflix-clone-1c2c5.firebasestorage.app",
  messagingSenderId: "619724737944",
  appId: "1:619724737944:web:df638b29017e1b2ce5efed"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);   

const signup = async(name, email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid: user.uid,
            name,
            authProvider:"local",
            email,
        })
    }catch(error){
        console.log(error);
        toast.error(error.code.split("/")[1].split("-").join(" "));
    }
}


const login = async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split("/")[1].split("-").join(" "));
    }
}

const logout = async() => {
    await signOut(auth);
}

export {auth,db,login,signup,logout};