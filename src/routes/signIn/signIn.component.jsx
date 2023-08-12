import { Fragment } from "react";



import { auth, signInWithGooglePopup,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { SignUpForm } from "../../components/sign-up-form/sign-up-form.component";


export const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} =  await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
    };

    return (
        <Fragment>
          <h1> Just sign In</h1>
        <button onClick={logGoogleUser}>
            sign in with Google
        </button> 
        {/* <SignUpForm />  */}
        </Fragment>
        
    )
}