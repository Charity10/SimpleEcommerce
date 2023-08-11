import { Fragment } from "react"
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

export const SignIn = () => {

    const logGoogleUser = async() => {
        const response = await signInWithGooglePopup();
        console.log(response)
    };

    return (
        <Fragment>
          <h1> Just sign In</h1>
        <button onClick={logGoogleUser}>
            sign in with Google
        </button>  
        </Fragment>
        
    )
}