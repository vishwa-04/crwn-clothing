import { Link, Outlet } from "react-router-dom";
import './navigation.styles.scss'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

function Navigation(props) {
    return (
      <>
        <div className="navigation">
            <Link className="logo-container" to="/">
          <CrwnLogo className="logo"/>
            </Link>
         <div className="nav-link-container">
            <Link className="nav-link" to='/shop'>
                Shop
            </Link>
            <Link className="nav-link" to='/signIn'>
                Sign In
            </Link>
         </div>

        </div>
        <Outlet />
      </>
    );
  }

  export default Navigation