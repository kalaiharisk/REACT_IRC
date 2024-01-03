import React from "react";
import "./Footer.css";
import Arrow from "../../assets/icons/arrow.svg";
import facebook from "../../assets/icons/footer/facebook.svg";
import instagram from "../../assets/icons/footer/instagram.svg";
import twitter from "../../assets/icons/footer/twitter.svg";
import youtube from "../../assets/icons/footer/youtube.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="content">
          <div className="newsletter">
            <h2>Subscribe Our Newsletter</h2>

            <div className="subscribe">
              <input type="text" placeholder="Enter your email" />
              <button>
                <img src={Arrow} alt="Arrow" />
              </button>
            </div>

            <div className="social">
              <button>
                <img src={facebook} alt="facebook" />
              </button>
              <button>
                <img src={instagram} alt="instagram" />
              </button>
              <button>
                <img src={twitter} alt="twitter" />
              </button>
              <button>
                <img src={youtube} alt="youtube" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
