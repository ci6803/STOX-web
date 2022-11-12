import React, { useState } from "react";
import "./Menu.css";

function Category(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {!isOpen ? (
        <div className="menu--closed">
          <h2 className="pb-[1.1875rem]">{props.name}</h2>
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src="/images/arrowDown.svg" alt="arrow-down" />
          </button>
        </div>
      ) : (
        <>
          <div className="menu--opened">
            <h2 className="pb-[1.3568rem]">{props.name}</h2>
            <button onClick={() => setIsOpen(!isOpen)}>
              <img src="/images/arrowUp.svg" alt="arrow-up" />
            </button>
          </div>
          <section className="menu--opened-submenu">
            {props.submenu.map(({ title, number }) => (
              <h3 key={title}>
                {title}{" "}
                <p className="pr-[0.75rem] text-[8px] text-[#A2A2A2]">
                  {number} products
                </p>
              </h3>
            ))}
          </section>
        </>
      )}
    </div>
  );
}

// export { Category, Submenu };
export default Category;
