import React from "react";
import "./ContactBar.css";
import { AiOutlinePhone } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";

const ContactBar = () => {
  return (
    <div className="contactbar">
      <div className="Ph-no">
        <AiOutlinePhone
          style={{ color: "white", marginRight: "9px", fontSize:"clamp(0.6rem, 1.3vw, 1.4rem)" }}
        />
        +1 206-214-2298
      </div>

      <div className="mail-id">
         <IoMailOutline
          style={{ color: "white", marginRight: "9px", fontSize:"clamp(0.6rem, 1.3vw, 1.4rem)" }}
        />
        support@sppl.com
      </div>
    </div>
  );
};

export default ContactBar;