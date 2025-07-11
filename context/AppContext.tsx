"use client"; // required for Next.js app router client-side context

import { createContext, useContext, useState, ReactNode } from "react";

// Define your context's value type
type AppContextType = {
  username: string;
  setUsername: (name: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

// Create context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create Provider
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState("Guest");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <AppContext.Provider value={{ username, setUsername, isDarkMode, toggleDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};

// Create custom hook to use context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};
