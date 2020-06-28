import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
import { FaAlignJustify } from "react-icons/fa";


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="NavBar">
      <Link
        className="NavBar-logo"
        to="Home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
      </Link>
      <NavBarButton onButtonSwitched={() => setIsOpen(!isOpen)} />
      <NavBarBox isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
    </div>
  );
}

function NavBarButton({ onButtonSwitched }) {
  return (
    <button className="NavBar-button" onClick={() => onButtonSwitched()}>
      <FaAlignJustify className="NavBar-hamburguer" />
    </button>
  );
}

function NavBarBox(props) {
  return (
    <div className="NavBar-logo-menu">
      <div className={`NavBar-box ${props.isOpen ? "is-open" : ""}`}>
        <Link
          className="NavBar-box-link"
          to="Home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <div onClick={props.closeMenu}>Αρχική</div>
        </Link>
        <Link
          className="NavBar-box-link"
          to="Team"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <div onClick={props.closeMenu}>Υπηρεσίες</div>
        </Link>
        <Link
          className="NavBar-box-link"
          to="Team"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <div onClick={props.closeMenu}>Η ομάδα</div>
        </Link>
      </div>
    </div>
  );
}