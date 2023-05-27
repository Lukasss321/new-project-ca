import { createContext, useCallback, useState } from "react";

export const AuthenticationContext = createContext({
  isSignedIn: false,
  setIsSignedIn: () => {},
  logout: () => {},
});

export const AuthenticationWrapper = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(undefined);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    setIsSignedIn(false);
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        isSignedIn,
        setIsSignedIn,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
