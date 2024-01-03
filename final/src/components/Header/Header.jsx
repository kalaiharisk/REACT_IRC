import React, { useState, useEffect } from "react";

import "./Header.scss";
import { Link } from "react-router-dom";

import DefaultLogo from "../../assets/images/logos/logoDefault.png";
import Cart from "../../assets/icons/cart.svg";
import Menu from "../../assets/icons/menu.svg";
import classNames from "classnames";
import { Modal } from "../Modals/Modal";

const Header = () => {
  const [active, setActive] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const isActive = (e) => {
    window.scrollY >= 50 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  });

  return (
    <header
      className={classNames({
        "active-header": active,
      })}
    >
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}

      <div className="container">
        <div className="logo">
          <Link to="/"><img src={DefaultLogo} alt="default-logo" /></Link>
        </div>
        <div className="menu">
          <nav>
            <ul>
              <Link to="/About"><li><button>About Us</button></li></Link>
              <Link to="/Menu"><li><button>Menu</button></li></Link>
              <Link to="/TestimonialsPage"><li><button>Testimonials</button></li></Link>
              <Link to="/Popular"><li><button>Popular Dishes</button></li></Link>
              <Link to="/Contact"><li><button>Contact</button></li></Link>
              <Link to="/Login"><li><button>Login</button></li></Link>

            </ul>
          </nav>
          <div className="buttons"> 
            <button className="button-secondary">
              <img src={Cart} alt="" />
            </button>
            <button className="button-menu">
              <img src={Menu} alt="" />
            </button>
            <button className="button-primary" onClick={() => setShowModal(true)}>
              Reserve Table
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
