import { useState } from 'react';
import DesktopNav from './DesktopNav';
import { MdClose } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import MobileNav from './MobileNav';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className='sticky top-0 w-full flex flex-wrap items-center justify-between px-6 py-3 sm:py-2 sm:px-0 md:p-4 z-[100] bg-[#212323]/70'>
        <NavLink
          to='/'
          className='flex items-center justify-evenly w-[40%] md:w-[20%]'
        >
          <img
            src='/popcorn.png'
            alt='logo'
            className='w-10 h-10 md:w-16 md:h-16'
          />
          <h1 className='text-2xl md:text-5xl'>Pickster</h1>
        </NavLink>
        <div className='hidden sm:flex justify-end items-center w-[250px] md:w-[300px] lg:w-[500px]'>
          <DesktopNav />
        </div>
        <div className='sm:hidden'>
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <MdClose className='text-3xl text-[#a23939]' />
            ) : (
              <RxHamburgerMenu className='text-3xl text-[#a23939]' />
            )}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className='md:hidden flex flex-col items-center basis-full'>
          <MobileNav toggleMenu={toggleMenu} />
        </div>
      )}
    </>
  );
};
export default Navigation;
