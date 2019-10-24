import React from "react";
import { useRouter } from "../Router.js";
import { writeCSS } from "../cssWriter.js";

const services = [
  { name: "Service 1", owner: "Team X" },
  { name: "Service 2", owner: "Team X" },
  { name: "Service 3", owner: "Team X" },
  { name: "Service 4", owner: "A Team" },
  { name: "Service 5", owner: "A Team" }
];

function createNavFn(navigate) {
  return function createToFn(to) {
    return function clickHandler(e) {
      const styles = e.target.getBoundingClientRect();
      const bg = getComputedStyle(e.target).getPropertyValue("background");
      // nav
      console.log(styles);

      // cardPage.style.transform = `translate3d(${invertX}px,${invertY}px, 0px) scale(${scaleX}, ${scaleY})`;

      writeCSS("--page-bg", bg);
      writeCSS("--page-width", styles.width + "px");
      writeCSS("--page-height", styles.height + "px");
      writeCSS("--page-top", styles.y + "px");
      writeCSS("--page-left", styles.x + "px");

      navigate(to);
      window.scrollTo({
        top: 0,
        left: 0
      });
    };
  };
}

export function Home() {
  const [, navigate] = useRouter();
  const toFn = createNavFn(navigate);
  const serviceClickHandler = toFn("service");
  const featureClickHandler = toFn("feature");
  const dataClickHandler = toFn("data");
  return (
    <div className="page fade home">
      <h1>Shelves</h1>
      <section>
        <h2>Service</h2>
        <ul className="list list--service">
          {services.map((s, i) => (
            <li className="item" key={i} onClick={serviceClickHandler}>
              {s.name}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Feature</h2>
        <ul className="list list--feature">
          {services.map((s, i) => (
            <li className="item" key={i} onClick={featureClickHandler}>
              {s.name}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Data</h2>
        <ul className="list list--data">
          {services.map((s, i) => (
            <li className="item" key={i} onClick={dataClickHandler}>
              {s.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
