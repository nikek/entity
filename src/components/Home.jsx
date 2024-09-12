import React from "react";
import { getEntity } from "../func/Entity.js";
import { Shelf } from "./Shelf";

export function Home() {
  const entities = getEntity();
  return (
    <div className="page home">
      <h1>Shelves</h1>
      <Shelf title="Service" id="service" items={entities.services} />
      <Shelf title="Feature" id="feature" items={entities.features} />
      <Shelf title="Data" id="data" items={entities.data} />
    </div>
  );
}
