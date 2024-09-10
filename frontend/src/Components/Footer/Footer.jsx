import React from "react";
import "./Footer.css";
import { RiShoppingBasketFill, RiMapPin2Line } from "react-icons/ri";
import { SlSocialInstagram } from "react-icons/sl";
import {  TiSocialLinkedin } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdPhoneForwarded, MdOutlineMarkEmailRead } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import CreditCard from "../../../src/Assets/Images/payment.png";
import { useState } from "react";

const Footer = () => {
  const [message, setMessage] = useState();
  const sendMessage = () => {
    window.location = `https://wa.me/1234567890?text=${message}`;
  };
  return (
    <>
      <footer>
        <section className="footer">
          <div className="box-container">
            <div className="box">
              <h3>
                QuickCart <i>{<RiShoppingBasketFill />}</i>
              </h3>
              <p>
                Fresh And Organic Delivery.<br/><span> We Make Your Life Easy By Delivering
                Grocery, Fruits, Dairy Products & other everyday grocery items at your doorstep.</span>
              </p>
              <div className="share">
                <Link>
                  <i
                    onClick={() => {
                      window.location = `https://wa.me/1234567890?text=Say Hello..!!`;
                    }}
                  >
                    {<IoLogoWhatsapp />}
                  </i>
                </Link>
                <a href="https://instagram.com/damn_sam_404">
                  <i>{<SlSocialInstagram />}</i>
                </a>
             
                <a href="https://github.com/samruddhi4040">
                  <i>{ <AiFillGithub />}</i></a>
               
                <a href="https://www.linkedin.com/in/samruddhi-bhosale-73567926a/">
                  <i>{<TiSocialLinkedin />}</i></a>
         
              </div>
            </div>
      
            {/* Contact Section */}

            <div className="box">
              <h3>Contact Us </h3>
              <Link className="links">
                <i>
                  <MdPhoneForwarded />
                </i>
                +91 1234567890
              </Link>

              <a href="mailto:samruddhi4040@gmail.com" className="links">
                <i>
                  <MdOutlineMarkEmailRead />
                </i>
                samruddhi4040@gmail.com
              </a>

              <Link className="links">
                <i>
                  <RiMapPin2Line />
                </i>
                Mumbai , India -400001
              </Link>
            </div>

            {/* Quick Link */}

            <div className="box">
              <h3>Quick Link </h3>
              <Link to="/" className="links">
                <i>
                  <AiOutlineArrowRight />
                </i>
                Home
              </Link>

              <Link to={"/"} className="links">
                <i>
                  <AiOutlineArrowRight />
                </i>
                Features
              </Link>

              <Link to="/products" className="links">
                <i>
                  <AiOutlineArrowRight />
                </i>
                Products
              </Link>

              <Link to="/reviews/all" className="links">
                <i>
                  <AiOutlineArrowRight />
                </i>
                Reviews
              </Link>
            </div>
            {/* Quick Chat */}
            <div className="box">
              <h3>Let's Chat </h3>
              <p>Type Message..!!</p>
              <input
                type="text"
                className="whats-message"
                placeholder="Enter Your Message..!!"
                onChange={(e) => setMessage(e.target.value)}
              />

              <button className="sendMsgBtn" onClick={sendMessage}>
                Send
              </button>
              <img src={CreditCard} alt="Payment Img" className="payment-img" />
            </div>
          </div>
          <div className="credit">
            Created By <span>Samruddhi Bhosale </span> | All Rights Reserved
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
