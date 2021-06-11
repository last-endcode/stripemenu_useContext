import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
import '../Style/Navbar.css';
import { RiBuilding2Fill } from 'react-icons/ri';

function Navbar() {
  const { sublinks, openSidebar, openSubMenu, closeSubMenu } =
    useGlobalContext();

  const displaySubMenu = (e) => {
    const page = e.target.textContent;
    const temp = e.target.getBoundingClientRect();
    const center = (temp.left + temp.right) / 2;
    const bottom = temp.bottom - 0;
    // masukan kedalam function as parameter
    openSubMenu(page, { center, bottom });
  };

  // handleSubMenu
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubMenu();
    }
  };
  return (
    <>
      <nav className='nav' onMouseOver={handleSubmenu}>
        <div className='nav-center'>
          {/* nav-header */}
          <div className='nav-header'>
            <h3 className='logo'>
              AC ||
              <RiBuilding2Fill />
            </h3>
            <button className='btn nav-btn' onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          {/* links for subMenu*/}
          <ul className='nav-links'>
            {sublinks.map((link, index) => {
              return (
                <li key={index}>
                  {/* add mouseOver for subMenu */}
                  <button className='link-btn' onMouseOver={displaySubMenu}>
                    {link.page}
                  </button>
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
