import { getAuth } from "firebase/auth";
import { fb } from "../firebase";
import {signInWithEmailAndPassword } from "firebase/auth/cordova";

export const Login = async (email: any, password: any,) => {
    const auth = getAuth(fb);
    await signInWithEmailAndPassword(auth, email, password);
}