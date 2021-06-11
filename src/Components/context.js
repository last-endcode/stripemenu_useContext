import React, { useState, useContext } from 'react';
import sublinks from './Data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [location, setLocation] = useState({});
  // create value be obj sesuai dgn json
  const [page, setPage] = useState({
    page: '',
    links: [],
  });

  const openSidebar = () => {
    setIsSidebar(true);
  };

  const closeSidebar = () => {
    setIsSidebar(false);
  };

  // subMenu
  const openSubMenu = (textpage, coordinates) => {
    // for page menu
    const page = sublinks.find((links) => links.page === textpage);
    setPage(page);
    setLocation(coordinates);
    setIsSubMenu(true);
  };

  const closeSubMenu = () => {
    setIsSubMenu(false);
  };

  return (
    <AppContext.Provider
      value={{
        sublinks,
        isSidebar,
        isSubMenu,
        openSidebar,
        openSubMenu,
        closeSidebar,
        closeSubMenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
