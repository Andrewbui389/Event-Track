import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      {user ? 
      <>
      <div className='nav-item'>
        <Link to='/'>Event Track</Link>
      </div>
      <div className='nav-item'>
        <h6> Welcome, {user.name} </h6>
        <Link to='#' onClick={handleLogOut}>Log Out</Link>
      </div>
      </>
      
      :
      <>
      <Link to='#'>Log Out</Link>
      <Link to='#'>Log Out</Link>
      </>
      }

      
    </nav>
  );
}


