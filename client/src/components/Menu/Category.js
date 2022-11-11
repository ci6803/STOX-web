import React, { useState } from "react";
import "./Menu.css";
import Submenu from "./Submenu";

function Category(props, { submenu }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="category">
      <h2>{props.name}</h2>
      {!isOpen ? (
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967C5.76256 9.17678 6.23744 9.17678 6.53033 9.46967L12 14.9393L17.4697 9.46967C17.7626 9.17678 18.2374 9.17678 18.5303 9.46967Z"
              fill="#030D45"
            />
          </svg>
        </button>
      ) : (
        <>
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.46967 14.5303C5.17678 14.2374 5.17678 13.7626 5.46967 13.4697L11.4697 7.46967C11.7626 7.17678 12.2374 7.17678 12.5303 7.46967L18.5303 13.4697C18.8232 13.7626 18.8232 14.2374 18.5303 14.5303C18.2374 14.8232 17.7626 14.8232 17.4697 14.5303L12 9.06066L6.53033 14.5303C6.23744 14.8232 5.76256 14.8232 5.46967 14.5303Z"
                fill="#030D45"
              />
            </svg>
          </button>
          <div className="submenu">
            {submenu.map((title) => {
              return <p key={title}>{title}</p>;
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Category;
