import { Link } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser, FaPlus } from 'react-icons/fa'

function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>
                <h1>GoalSetter</h1>
            </Link>
        </div>
        <ul>
            <li>
                <Link to='/login'>
                    <FaSignInAlt /> Login
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    <FaUser /> Register
                </Link>
            </li>
            {/* <li>
                <Link to='/goals/new'>
                    <FaPlus /> New Goal
                </Link>
            </li> */}
        </ul>
    </header>
  );
}

export default Header