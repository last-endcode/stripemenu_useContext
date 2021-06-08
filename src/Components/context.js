import React, { useState, useContext } from 'react';
import sublinks from './Data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(false);

  const openSidebar = () => {
    setIsSidebar(true);
  };

  const closeSidebar = () => {
    setIsSidebar(false);
  };

  const openSubMenu = () => {
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
