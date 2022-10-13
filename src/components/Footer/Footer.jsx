import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div>
      <footer class="footer">

        <div class="footer__left">
          <p class="footer__links">
            <a class="link-1" href="#">
              Home
            </a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p>_courseology &copy; 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
