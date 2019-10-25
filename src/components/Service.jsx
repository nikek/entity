import React from "react";
import { useRouter } from "../func/Router.js";
import { getEntity } from "../func/Entity.js";

export function Service() {
  const [current, navigate] = useRouter();
  const page =
    current && current.path.length > 1 ? current.path.split("/")[1] : "/";

  const id = current && current.params && current.params.id;
  const service = getEntity(id);
  return (
    <section className={`page zoom ${page}`}>
      <header>
        <button onClick={() => navigate("/")} className="back-button">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <g transform="scale(0.03125 0.03125)">
              <path d="M1024 512c0-282.752-229.248-512-512-512-282.784 0-512 229.248-512 512 0 282.784 229.216 512 512 512 282.752 0 512-229.216 512-512zM256 512l256-256v192h256v128h-256v192l-256-256z"></path>
            </g>
          </svg>
        </button>
        <h1>{service.name}</h1>
      </header>
    </section>
  );
}
