import React, { createContext, useState } from "react";

const SessionContext = createContext({
  loggued: false,
  updateLoggued: () => {},
  userInfo: {},
  updateUserInfo: () => {},
});

/**
 * Provider to share the state of the session throughout the application.
 * @param {JSX} children
 */
export const SessionProvider = ({ children }) => {
  const [loggued, setLoggued] = useState(localStorage.getItem("loggued") || false);
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("userData")) || {});

  const updateLoggued = value => {
    localStorage.setItem("loggued", value);
    if (!value) localStorage.setItem("userData", JSON.stringify({}));
    setLoggued(value);
  };

  const updateUserInfo = userData => {
    localStorage.setItem("userData", JSON.stringify(userData));
    setUserInfo(userData);
  };

  return (
    <SessionContext.Provider
      value={{
        loggued,
        updateLoggued,
        userInfo,
        updateUserInfo,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const SessionConsumer = SessionContext.Consumer;
