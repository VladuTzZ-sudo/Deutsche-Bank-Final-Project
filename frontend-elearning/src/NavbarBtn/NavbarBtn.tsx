import React from "react";
import "./NavbarBtn.css";

export default function NavbarBtn(props: any) {
  return (
    <a href={props.href} className="navbar-btn">
      {props.text}
    </a>
  );
}
