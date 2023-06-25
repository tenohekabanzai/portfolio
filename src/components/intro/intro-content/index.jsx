import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Arrow from "../../shared/arrow";

import girl from "../../../images/girl.png";
import hand from "../../../images/hand.png";
import { scrollToSection } from "../../utils/helpers";

import "./styles.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} alt="img" />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Sourya Roy Karmakar</span>
                    </h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500
                    </p>
                    <button onClick={() => scrollToSection("contact")} >
                        <span className="text">Contact Me</span> 
                        <Arrow/> 
                    </button>
                </div>
                <div className="right-col">
                    <img
                        src={girl}
                        alt="img"
                    />

                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Best Design Award</div>
                    </div>

                    <div className="highlights verticle">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>5k+</span>
                            Happy Customers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;