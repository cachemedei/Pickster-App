import { NavLink, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { FaInfoCircle } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { IoPersonCircleSharp } from 'react-icons/io5';

const DesktopNav = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {user?.email ? (
        <div className='flex items-center justify-evenly w-full'>
          <NavLink to='/'>
            <FaHome className='text-[30px] md:text-[30px]' />
          </NavLink>
          <NavLink to='/account'>
            <IoPersonCircleSharp className='text-[30px] md:text-[35px] text-[#a23939]' />
          </NavLink>
          <p>
            <FaInfoCircle className='text-[30px] md:text-[30px]' />
          </p>
          <button
            className='border-2 border-[#a23939] rounded px-3 py-1 text-md md:text-2xl'
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className='flex items-center justify-evenly w-full'>
          <NavLink to='/'>
            <FaHome className='text-[30px]' />
          </NavLink>
          <NavLink
            className='border-2 border-[#a23939] rounded px-3 py-1 text-md md:text-xl'
            to='/login'
          >
            Sign In
          </NavLink>
          <NavLink
            className='bg-[#a23939] rounded px-3 py-1 text-md md:text-xl'
            to='/signup'
          >
            Sign Up
          </NavLink>
          <p>
            <FaInfoCircle className='text-[30px]' />
          </p>
        </div>
      )}
    </>
  );
};
export default DesktopNav;
