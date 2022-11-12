import React, { useState } from "react";
import "./Menu.css";

function Category(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {!isOpen ? (
        <div className="category">
          <h2 className="pb-[1.1875rem]">{props.name}</h2>
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              width="12px"
              height="6px"
              xmlns="http://www.w3.org/2000/svg"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0 512.02 319.26"
            >
              <path d="M5.9 48.96 48.97 5.89c7.86-7.86 20.73-7.84 28.56 0l178.48 178.48L434.5 5.89c7.86-7.86 20.74-7.82 28.56 0l43.07 43.07c7.83 7.84 7.83 20.72 0 28.56l-192.41 192.4-.36.37-43.07 43.07c-7.83 7.82-20.7 7.86-28.56 0l-43.07-43.07-.36-.37L5.9 77.52c-7.87-7.86-7.87-20.7 0-28.56z" />
            </svg>
          </button>
        </div>
      ) : (
        <div className="menu--opened">
          <div className="menu--opened-top">
            <h2 className="pb-[1.3568rem]">{props.name}</h2>
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                width="12px"
                height="6px"
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 512 319.24"
              >
                <path d="m5.9 270.28 43.07 43.07c7.86 7.86 20.73 7.84 28.56 0l178.48-178.48L434.5 313.35c7.86 7.86 20.74 7.82 28.56 0l43.07-43.07c7.83-7.84 7.83-20.72 0-28.56L313.72 49.32l-.36-.37-43.07-43.07c-7.83-7.82-20.7-7.86-28.56 0l-43.07 43.07-.36.37L5.9 241.72c-7.87 7.86-7.87 20.7 0 28.56z" />
              </svg>
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
        </div>
      )}
    </div>
  );
}

// export { Category, Submenu };
export default Category;
