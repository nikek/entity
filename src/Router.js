import React, { createContext, useEffect, useState, useContext } from "react";
import page from "page";

export const RouterContext = createContext();

export const RouterProvider = ({ children }) => {
  const [router, setRouter] = useState({ path: window.location.pathname });

  useEffect(() => {
    page("/service/:id", setRouter);
    page("/feature/:id", setRouter);
    page("/data/:id", setRouter);
    page(setRouter);
    page();
  }, []);

  return (
    <RouterContext.Provider value={[router, page.show]}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);
