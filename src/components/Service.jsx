import React from "react";
import { useRouter } from "../Router.js";

export function Service() {
  const [, navigate] = useRouter();
  return (
    <section className="page zoom">
      <header>
        <button onClick={() => navigate("home")} class="back-button">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <g transform="scale(0.03125 0.03125)">
              <path d="M1024 512c0-282.752-229.248-512-512-512-282.784 0-512 229.248-512 512 0 282.784 229.216 512 512 512 282.752 0 512-229.216 512-512zM256 512l256-256v192h256v128h-256v192l-256-256z"></path>
            </g>
          </svg>
        </button>
      </header>
    </section>
  );
}
