import React from "react";
import { useRouter } from "../Router.js";
import { writeCSS } from "../cssWriter.js";
import { getEntity } from "../Entity";

const services = [
  { id: "service_1", name: "Service 1", owner: "Team X" },
  { id: "service_2", name: "Service 2", owner: "Team X" },
  { id: "service_3", name: "Service 3", owner: "Team X" },
  { id: "service_4", name: "Service 4", owner: "A Team" },
  { id: "service_5", name: "Service 5", owner: "A Team" }
];

const createNavFn = navigate => to => id => evt => {
  const styles = evt.target.getBoundingClientRect();
  const bg = getComputedStyle(evt.target).getPropertyValue("background");
  // nav
  console.log(styles);

  // cardPage.style.transform = `translate3d(${invertX}px,${invertY}px, 0px) scale(${scaleX}, ${scaleY})`;

  writeCSS("--page-bg", bg);
  writeCSS("--page-width", styles.width + "px");
  writeCSS("--page-height", styles.height + "px");
  writeCSS("--page-top", styles.y + "px");
  writeCSS("--page-left", styles.x + "px");

  navigate(to + "/" + id);
  window.scrollTo({
    top: 0,
    left: 0
  });
};

export function Home() {
  const [, navigate] = useRouter();
  const toFn = createNavFn(navigate);
  const serviceClickHandler = toFn("/service");
  const featureClickHandler = toFn("/feature");
  const dataClickHandler = toFn("/data");

  const entities = getEntity();
  return (
    <div className="page fade home">
      <h1>Shelves</h1>
      <section>
        <h2>Service</h2>
        <ul className="list list--service">
          {entities.services.map((serv, i) => (
            <li className="item" key={i} onClick={serviceClickHandler(serv.id)}>
              {serv.name}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Feature</h2>
        <ul className="list list--feature">
          {entities.features.map((feat, i) => (
            <li className="item" key={i} onClick={featureClickHandler(feat.id)}>
              {feat.name}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Data</h2>
        <ul className="list list--data">
          {entities.data.map((da, i) => (
            <li className="item" key={i} onClick={dataClickHandler(da.id)}>
              {da.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
