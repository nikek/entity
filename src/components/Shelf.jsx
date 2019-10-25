import React, { useCallback, useState, useEffect, useRef } from "react";

function formatPos(thing) {
  return (
    (Array.isArray(thing) &&
      thing.length === 2 &&
      typeof thing[0] === "number" &&
      typeof thing[1] === "number" &&
      thing) || [0, 0]
  );
}

function useScrollRestore(id) {
  const [waiting, setWaiting] = useState(false);
  const ref = useRef(null);

  const handleScroll = useCallback(e => {
    if (waiting) {
      return;
    }
    setWaiting(true);
    requestAnimationFrame(() => {
      sessionStorage.setItem(
        `scroll-pos-${id}`,
        JSON.stringify([e.target.scrollLeft, e.target.scrollTop])
      );
      setWaiting(false);
    });
  }, []);

  useEffect(() => {
    ref.current.addEventListener("scroll", handleScroll);

    const fromSession = sessionStorage.getItem(`scroll-pos-${id}`) || "{}";

    let pos = [0, 0];
    try {
      pos = formatPos(JSON.parse(fromSession));
    } catch {}
    ref.current.scrollTo(...pos);
  }, []);

  return [ref];
}

export function Shelf({ title, id, clickHandler, items }) {
  const [ref] = useScrollRestore(id);
  return (
    <section>
      <h2>{title}</h2>
      <ul className={`list list--${id}`} ref={ref}>
        {items.map((item, i) => (
          <li className="item" key={i} onClick={clickHandler(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
