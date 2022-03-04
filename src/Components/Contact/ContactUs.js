import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Contact.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-medias">
        <ul>
          <li className="fali">
            <a className="facebook" href="#"><i class="fa-brands fa-facebook-f"></i></a>
          </li>
          <li className="yoli">
            <a className="youtube" href="#"><i class="fa-brands fa-youtube"></i></a>
          </li>
          <li className="inli">
            <a className="instagram" href="#"><i class="fa-brands fa-instagram"></i></a>
          </li>
        </ul>
        
      </div>
    </div>
  );
};

export default ContactUs;
