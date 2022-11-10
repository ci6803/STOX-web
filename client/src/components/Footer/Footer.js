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
          {/* <img
            className="w-[1.06rem] h-[1.31rem]"
            src="./arrow-down.svg"
            alt="shoppingBag"
          /> */}
        </h2>
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
