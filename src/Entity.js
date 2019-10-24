const all = {
  services: [
    { id: "service_1", name: "Service 1", owner: "Team X" },
    { id: "service_2", name: "Service 2", owner: "Team X" },
    { id: "service_3", name: "Service 3", owner: "Team X" },
    { id: "service_4", name: "Service 4", owner: "A Team" },
    { id: "service_5", name: "Service 5", owner: "A Team" }
  ],
  features: [
    { id: "feature_1", name: "Feature 1", owner: "Team X" },
    { id: "feature_2", name: "Feature 2", owner: "Team X" },
    { id: "feature_3", name: "Feature 3", owner: "Team X" },
    { id: "feature_4", name: "Feature 4", owner: "A Team" },
    { id: "feature_5", name: "Feature 5", owner: "A Team" }
  ],
  data: [
    { id: "data_1", name: "Data 1", owner: "Team X" },
    { id: "data_2", name: "Data 2", owner: "Team X" },
    { id: "data_3", name: "Data 3", owner: "Team X" },
    { id: "data_4", name: "Data 4", owner: "A Team" },
    { id: "data_5", name: "Data 5", owner: "A Team" }
  ]
};
const allMap = [...all.services, ...all.features, ...all.data].reduce(
  (m, entity) => ((m[entity.id] = entity), m),
  {}
);
console.log(all, allMap);
export const getEntity = id => {
  if (!id) {
    return all;
  }
  return allMap[id];
};
