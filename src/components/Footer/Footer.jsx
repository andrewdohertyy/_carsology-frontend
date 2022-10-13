import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="footer__text">
        SIGN UP TO OUR MAILING LIST HERE
        </h3>
      <input
        className="footer__input"
        type="text"
        placeholder="Enter your email address..."
      />
      <button className="footer__button">Sign Up</button>
    </div>
  );
};

export default Footer;
