import React, { Fragment, useMemo } from "react";
import { Header } from "./Header";
import { Home } from "./Home";
import { ServicePage } from "./ServicePage";
import { FeaturePage } from "./FeaturePage";
import { DataPage } from "./DataPage";
import { useRouter } from "../func/Router.js";
import "./App.css";

const pages = [
  {
    name: "/",
    Component: Home,
  },
  {
    name: "service",
    Component: ServicePage,
  },
  {
    name: "feature",
    Component: FeaturePage,
  },
  {
    name: "data",
    Component: DataPage,
  },
];

export function App() {
  const [current] = useRouter();

  const page = useMemo(
    () =>
      current && current.path.length > 1 ? current.path.split("/")[1] : "/",
    [current]
  );

  const Page = pages.find(({ name }) => page === name).Component;

  return (
    <Fragment>
      <Header />
      <Page />
    </Fragment>
  );
}
