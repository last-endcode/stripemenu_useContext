import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

function Navbar() {
  const { sublinks, openSidebar } = useGlobalContext();
  return (
    <>
      <nav class='nav'>
        <div className='nav-center'>
          {/* nav-header */}
          <div className='nav-header'>
            <h3 className='logo'>stripe</h3>
            <button className='btn nav-btn' onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          {/* links */}
          <ul className='nav-links'>
            {sublinks.map((link, index) => {
              return (
                <li key={index}>
                  <button className='link-btn'>{link.page}</button>
                </li>
              );
            })}
          </ul>
          <button className='btn sign-btn'>sign in</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
