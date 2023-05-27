import { createContext, useCallback, useState } from "react";

export const AuthenticationContext = createContext({
  isSignedIn: false,
  setIsSignedIn: () => {},
  logout: () => {},
});

export const AuthenticationWrapper = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    setIsSignedIn(false);
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        isSignedIn,
        setIsSignedIn: (value) => setIsSignedIn(value),
        logout: handleLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
