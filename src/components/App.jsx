import React, { Fragment, useMemo } from "react";
import { Header } from "./Header";
import { Home } from "./Home";
import { ServicePage } from "./ServicePage";
import { FeaturePage } from "./FeaturePage";
import { DataPage } from "./DataPage";
import { useRouter } from "../func/Router.js";
import { CSSTransition } from "react-transition-group";
import "./App.css";

const pages = [
  {
    name: "/",
    Component: Home,
    type: "fade"
  },
  {
    name: "service",
    Component: ServicePage,
    type: "zoom"
  },
  {
    name: "feature",
    Component: FeaturePage,
    type: "zoom"
  },
  {
    name: "data",
    Component: DataPage,
    type: "zoom"
  }
];

// click
// set new route
// mount new page
// start transition
// end transition
// unmount old page

export function App() {
  const [current] = useRouter();

  const page = useMemo(
    () =>
      current && current.path.length > 1 ? current.path.split("/")[1] : "/",
    [current]
  );

  return (
    <Fragment>
      <Header />
      {pages.map(({ name, Component, type }, i) => (
        <CSSTransition
          key={i}
          in={page === name}
          timeout={300}
          unmountOnExit
          className={type}
        >
          <Component />
        </CSSTransition>
      ))}
    </Fragment>
  );
}

// import React from "react";
// import ReactDOM from "react-dom";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   NavLink
// } from "react-router-dom";
// import { CSSTransition } from "react-transition-group";
// import { Container, Navbar, Nav } from "react-bootstrap";
// import Home from "./pages/home";
// import About from "./pages/about";
// import Contact from "./pages/contact";
// import "./styles.css";

// const routes = [
//   { path: "/", name: "Home", Component: Home },
//   { path: "/about", name: "About", Component: About },
//   { path: "/contact", name: "Contact", Component: Contact }
// ];

// function Example() {
//   return (
//     <Router>
//       <>
//         <Navbar bg="light">
//           <Nav className="mx-auto">
//             {routes.map(route => (
//               <Nav.Link
//                 key={route.path}
//                 as={NavLink}
//                 to={route.path}
//                 activeClassName="active"
//                 exact
//               >
//                 {route.name}
//               </Nav.Link>
//             ))}
//           </Nav>
//         </Navbar>
//         <Container className="container">
//           {routes.map(({ path, Component }) => (
//             <Route key={path} exact path={path}>
//               {({ match }) => (
//                 <CSSTransition
//                   in={match != null}
//                   timeout={300}
//                   classNames="page"
//                   unmountOnExit
//                 >
//                   <div className="page">
//                     <Component />
//                   </div>
//                 </CSSTransition>
//               )}
//             </Route>
//           ))}
//         </Container>
//       </>
//     </Router>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Example />, rootElement);
