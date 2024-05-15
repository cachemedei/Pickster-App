import { NavLink, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

const MobileNav = ({ toggleMenu }) => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      toggleMenu();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {user?.email ? (
        <div className='flex flex-col items-center gap-2 border-b-2 border-b-[#a23939] w-[80%] p-2'>
          <NavLink onClick={toggleMenu} to='/'>
            Home
          </NavLink>
          <NavLink onClick={toggleMenu} to='/account'>
            Account
          </NavLink>
          <button onClick={handleLogout}>Log Out</button>
          <NavLink onClick={toggleMenu} to='/about'>
            About
          </NavLink>
        </div>
      ) : (
        <div className='flex flex-col items-center gap-2 border-b-2 border-b-[#a23939] w-[80%] p-4'>
          <NavLink onClick={toggleMenu} to='/'>
            Home
          </NavLink>
          <NavLink onClick={toggleMenu} to='/login'>
            Sign In
          </NavLink>
          <NavLink onClick={toggleMenu} to='/signup'>
            Sign Up
          </NavLink>
          <NavLink onClick={toggleMenu} to='/about'>
            About
          </NavLink>
        </div>
      )}
    </>
  );
};
export default MobileNav;
