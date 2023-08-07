import { Fragment } from "react"
import { Outlet, Link} from "react-router-dom"
import './navigation.styles.css'
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"

export const Navigation = () => {
    return (
        <Fragment>
            <div className="nav">
               <Link className="logo-container" to='/'>
                    <CrwnLogo className="logo" />
               </Link>
                
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    <Link className="contact-link" to='/contact'>
                        CONTACT
                    </Link>
                   <Link className="signin-link" to='/sign-in'>
                        SIGNIN
                   </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}