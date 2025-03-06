import React from "react";
import "./ContactBar.css";
import { AiOutlinePhone } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";

const ContactBar = () => {
  return (
    <div className="contactbar">
      <div className="Ph-no">
        <AiOutlinePhone
          style={{ color: "white", height: "22px", width: "22px", marginRight: "9px" }}
        />
        +1 206-214-2298
      </div>

      <div className="mail-id">
        <IoMailOutline
          style={{ color: "white", height: "22px", width: "22px", marginRight: "9px" }}
        />
        support@sppl.com
      </div>
    </div>
  );
};

export default ContactBar;