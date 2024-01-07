import React, { useContext, useEffect, useState } from "react";


interface ContextProps {
  readonly theme: boolean;
  readonly toggleTheme: () => void;
}

export const Theme = React.createContext<ContextProps>({
  theme: true,
  toggleTheme: () => null
});

type ThemeProps = {
  children: React.ReactElement
}

export const ThemeProvider: React.FC<ThemeProps>= ({ children }) => {

  const [theme, setTheme] = useState<boolean>(false)

  const toggleTheme = () => {
    setTheme(_ => !_)
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-dark-mode", String(theme));
  }, [theme])

  return (
    <Theme.Provider value={{theme, toggleTheme}}>
      {children}
    </Theme.Provider>
  )
}

export const useTheme = () =>  useContext(Theme);
