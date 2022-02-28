import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Contact.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-text">
        <h3 className="contact-contact">Contact</h3>
        <h3 className="contact-us">Us</h3>
      </div>

      <div className="contact-medias">
        <div className="contact-wrapper">
          <SocialIcon style={{ height: 80, width: 80 }}  url="https://www.instagram.com/frizbiteknik/?hl=tr" />
          <span>Instagram</span>
        </div>
        <div className="contact-wrapper">
          <SocialIcon style={{ height: 80, width: 80 }}  url="https://www.facebook.com/frizbiteknik/" />
          <span>Facebook</span>
        </div>
        <div className="contact-wrapper">
          <SocialIcon style={{ height: 80, width: 80 }} url="https://www.youtube.com/channel/UCRUW0qkgVEtPtzvBC5oVaWw" />
          <span>Youtube</span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
