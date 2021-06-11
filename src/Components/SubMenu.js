import React, { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from './context';
import '../Style/SubMenu.css';

function SubMenu() {
  const {
    isSubMenu,
    location,
    // grab obj page, links ini mrujuk pada obj state values
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);

  // for columns state
  const [columns, setColumns] = useState('cols-2 ');

  // useEffect
  useEffect(() => {
    // by default is cols-2
    setColumns('cols-2');
    const submenu = container.current;
    // console.log(submenu);
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns('cols-3');
    }
    if (links.length > 3) {
      setColumns('cols-4');
    }
  }, [location, links]);

  return (
    <aside
      className={`${isSubMenu ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <h4>{page}</h4>
      {/* change be state values */}
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
}

export default SubMenu;
