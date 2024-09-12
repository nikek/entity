import React, { createContext, useEffect, useState, useContext } from "react";
import { flushSync } from "react-dom";
import page from "page";
import { unary } from "./functional";
export const RouterContext = createContext();

export const RouterProvider = ({ children }) => {
  const [router, setRouter] = useState(() => ({
    path: window.location.pathname,
  }));

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      page.base("/entity");
    }
    page("/service/:id", unary(setRouter));
    page("/feature/:id", unary(setRouter));
    page("/data/:id", unary(setRouter));
    page(unary(setRouter));
    page();
  }, []);

  const navigate = (path) => {
    document.startViewTransition(() => {
      flushSync(() => {
        page.show(path);
      });
    });
  };

  return (
    <RouterContext.Provider value={[router, navigate]}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);
