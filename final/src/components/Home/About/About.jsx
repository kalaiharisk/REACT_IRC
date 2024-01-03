import "./About.scss"
import { Link } from "react-router-dom";
import Cheff from "../../../assets/images/about/cheff.png"

import salad from "../../../assets/images/about/salad.png"
import cheese from "../../../assets/images/about/cheese.png"

import allTime from "../../../assets/images/about/icons/724.svg"
import Header from "../../Header/Header";

const About = () => {
  return (
    <><Header/>
    <div className="about">
        <div className="container">
            <div className="image">
                <img src={Cheff} alt="cheff" />
                <img className="cheese" src={cheese} alt="cheese" />
                <img className="salad" src={salad} alt="salad" />
            </div>
            <div className="information">
                <h1>We Are More Than Multiple Service</h1>

                <p>Our dedication to providing a taste of home, even when you’re away from it, has been at the core of our journey. Today, we continue to uphold this tradition by offering a wide array of delightful South Indian dishes that cater to the diverse palates of our cherished patrons. Whether you’re seeking a wholesome and nutritious meal or craving the indulgence of our exquisite sweets, Haribhavanam remains committed to bringing you an authentic and flavorful South Indian dining experience that’s truly one-of-a-kind.</p>
                    <ul>
                        <li>
                            <span>Online Order</span>
                        </li>
                        <li>
                            <span>seat Reservation</span>
                        </li>
                        <li>
                            <span>Delicious Food</span>
                        </li>
                        <li>
                            <span>Hygenic</span>
                        </li>
                        <li>
                            <span>A/C rooms</span>
                        </li>
                        <li>
                            <span>Friendly servers</span>
                        </li>
                    </ul>

                    <Link to="/"><button>Return to Home</button></Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default About