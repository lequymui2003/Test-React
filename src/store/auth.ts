import { getAuth } from "firebase/auth";
import { fb } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";

export const signUp = async (email: any, password: any,) => {
    const auth = getAuth(fb);
    await createUserWithEmailAndPassword(auth, email, password);
}