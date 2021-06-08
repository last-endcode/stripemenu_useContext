import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
import '../Style/Sidebar.css';

function Sidebar() {
  const { isSidebar, closeSidebar, sublinks } = useGlobalContext();
  return (
    <>
      <div
        className={`${isSidebar ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}
      >
        <aside className='sidebar'>
          <button className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
          <div className='sidebar-links'>
            {sublinks.map((link_main, index) => {
              const { page, links } = link_main;
              return (
                <article key={index}>
                  <h4>{page}</h4>
                  <div className='sidebar-sublinks'>
                    {links.map((sublink, index) => {
                      const { label, icon, url } = sublink;
                      return (
                        <a href={url} key={index}>
                          {icon}
                          {label}
                        </a>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </aside>
      </div>
    </>
  );
}

export default Sidebar;
