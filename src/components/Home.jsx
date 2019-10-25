import React from "react";
import { useRouter } from "../func/Router.js";
import { writeCSS } from "../func/cssWriter.js";
import { getEntity } from "../func/Entity.js";
import { Shelf } from "./Shelf";

const createNavFn = navigate => to => id => evt => {
  const styles = evt.target.getBoundingClientRect();
  const bg = getComputedStyle(evt.target).getPropertyValue("background");

  const scaleX = styles.width / window.innerWidth;
  const scaleY = styles.height / 200;

  writeCSS(
    "--page-transform",
    `translate3d(${styles.x}px,${styles.y -
      42}px, 0px) scale(${scaleX}, ${scaleY})`
  );

  writeCSS("--page-bg", bg);

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
      <Shelf
        title="Service"
        id="service"
        items={entities.services}
        clickHandler={serviceClickHandler}
      />
      <Shelf
        title="Feature"
        id="feature"
        items={entities.features}
        clickHandler={featureClickHandler}
      />
      <Shelf
        title="Data"
        id="data"
        items={entities.data}
        clickHandler={dataClickHandler}
      />
    </div>
  );
}
