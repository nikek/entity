import React, { createContext, useState, useContext } from "react";

export const RouterContext = createContext();

export const RouterProvider = ({ children }) => (
  <RouterContext.Provider value={useState("home")}>
    {children}
  </RouterContext.Provider>
);

export const useRouter = () => useContext(RouterContext);
