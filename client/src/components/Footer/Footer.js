import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <section className="options pb-[0.9375rem]">
        <h2>REVIEW</h2>
        <h2>CONTACT</h2>
        <h2>ACCOUNT</h2>
      </section>
      <section className="language pb-[0.9375rem]">
        <h2>
          <b>LANGUAGE :</b> EN
        </h2>
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
      </section>
      <section className="time pb-[0.9375rem]">
        <p>
          <b>Call</b> 020-2050738
        </p>
        <p>Mon - Thu, 9:00 - 19:00</p>
        <p>Fri, 9:00 - 18:00</p>
      </section>
      <section className="contact">
        <p>
          <b>mail</b> onshallo@aceandtate.nl
        </p>
        <p>
          <b>whatsapp</b> +31 6 33236677
        </p>
      </section>
    </div>
  );
}

export default Footer;
