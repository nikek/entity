import React, { createContext, useEffect, useState, useContext } from "react";
import page from "page";
import { unary } from "./functional";
export const RouterContext = createContext();

export const RouterProvider = ({ children }) => {
  const [router, setRouter] = useState(() => ({
    path: window.location.pathname
  }));

  useEffect(() => {
    page("/service/:id", unary(setRouter));
    page("/feature/:id", unary(setRouter));
    page("/data/:id", unary(setRouter));
    page(unary(setRouter));
    page();
  }, []);

  return (
    <RouterContext.Provider value={[router, page.show]}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);
