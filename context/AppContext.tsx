"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define your context's value type
type AppContextType = {
  isLeftSidebarVisible: boolean;
  toggleLeftSidebar: () => void;
  isRightSidebarVisible: boolean;
  toggleRightSidebar: () => void;
  isBottomBarVisible: boolean;
  toggleBottomBar: () => void;
};

// Create context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create Provider
export const AppProvider = ({ children }: { children: ReactNode }) => {
 const [isLeftSidebarVisible, setLeftSidebarVisible] = useState(true);
  const [isRightSidebarVisible, setRightSidebarVisible] = useState(true);
  const [isBottomBarVisible, setBottomBarVisible] = useState(true);

  const toggleLeftSidebar = () => setLeftSidebarVisible((prev) => !prev);
  const toggleRightSidebar = () => setRightSidebarVisible((prev) => !prev);
  const toggleBottomBar = () => setBottomBarVisible((prev) => !prev);

  return (
    <AppContext.Provider
      value={{
        isLeftSidebarVisible,
        isRightSidebarVisible,
        isBottomBarVisible,
        toggleLeftSidebar,
        toggleRightSidebar,
        toggleBottomBar,
      }}>
      {children}
    </AppContext.Provider>
  );
};

// Create custom hook to use context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within AppProvider");
  return context;
};
