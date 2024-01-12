import React from "react";
import { useCallback } from "react";
import Mainheader from "./Mainheader";
import "./Frame.css";
import apliance from "../assets/images/apliance-bg.png";

const Frame = () => {
  const onRectangle1Click = useCallback(() => {
    // Please sync "MacBook Pro 14" - 11" to the project
  }, []);

  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onServicesTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='betterSecurityFor']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='usefulLinksText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangle3Click = useCallback(() => {
    // Please sync "MacBook Pro 14" - 3" to the project
  }, []);

  const onLoginTextClick = useCallback(() => {
    // Please sync "MacBook Pro 14" - 3" to the project
  }, []);

  return (
    <section className="apliance">
      <div className="macbook-pro-14-9-parent">
        <div className="macbook-pro-14-9">
          <div className="macbook-pro-14-9-child" />
          <img
            className="macbook-pro-14-9-item"
            alt=""
            src={apliance}
            data-scroll-to="rectangleImage"
          />
          <div className="main-page">
            <div className="get-full-control">
              Get full control of your appliances by enjoying convenience with
              us.
            </div>
            <div className="we-are-a">
              We are a platform, which has services so that it can help you with
              operating and securing your home from anywhere, anytime
            </div>
            <div className="main-page-child" onClick={onRectangle1Click} />
            <div className="get-started">Get Started</div>
            <div className="main-page-item" />
            <div className="watch-demo">Watch Demo</div>
            <img className="group-icon" alt="" src="/group.svg" />
            <div className="hello-everyone">Hello Everyone 👋</div>
          </div>
          <div className="frame-parent">
            <div className="home-parent">
              <div className="home" onClick={onHomeTextClick}>
                Home
              </div>
              <div className="home" onClick={onAboutTextClick}>
                About
              </div>
              <div className="home" onClick={onServicesTextClick}>
                Services
              </div>
              <div className="home" onClick={onContactUsTextClick}>
                Contact Us
              </div>
            </div>
            <b className="emcomserv">EMCOMSERV</b>
            <div className="frame-child" onClick={onRectangle3Click} />
            <b className="login" onClick={onLoginTextClick}>
              Login
            </b>
          </div>
        </div>
        <div className="group-parent">
          <div className="rectangle-parent" data-scroll-to="groupContainer">
            <div className="group-child" />
            <div className="group-item" />
            <div className="group-inner" />
            <b className="about-us">About Us</b>
            <div className="ellipse-div" />
            <div className="rectangle-div" />
            <div className="group-child1" />
            <div className="group-child2" />
            <div className="group-child3" />
            <div className="user-friendly">User Friendly</div>
            <div className="used-anywhere">Used Anywhere</div>
            <div className="best-services">Best Services</div>
            <div className="transparency">Transparency</div>
            <div className="we-always-try">
              We always try to make our platform easy to use every time for the
              users.
            </div>
            <div className="our-platform-is">{`Our platform is internet based hat you can use anywhere & every where.`}</div>
            <div className="we-provide-the-container">
              <p className="we-provide-the">We provide the best services.</p>
              <p className="we-provide-the">
                Customer services always standby.
              </p>
            </div>
            <div className="we-maintain-transparency">{`We maintain transparency with our clients & be clear with them.`}</div>
            <img
              className="game-iconsshaking-hands"
              alt=""
              src="/gameiconsshakinghands.svg"
            />
            <img
              className="fluentglobe-location-20-regul-icon"
              alt=""
              src="/fluentglobelocation20regular.svg"
            />
            <img className="group-child4" alt="" src="/group-1.svg" />
            <img
              className="transparency-1-icon"
              alt=""
              src="/transparency-1@2x.png"
            />
            <div className="group-child5" />
          </div>
          <div className="frame-item" />
          <div className="frame-inner" />
          <div className="frame-child1" />
          <div className="frame-child2" />
        </div>
        <div className="rectangle-group">
          <div className="frame-child3" />
          <div className="useful-links" data-scroll-to="usefulLinksText">
            Useful Links
          </div>
          <div className="help-support">{`Help & Support`}</div>
          <div className="contact">Contact</div>
          <b className="emcomserv1">EMCOMSERV</b>
          <div className="frame-child4" />
          <div className="available-on-the">Available on the</div>
          <div className="google-play">Google Play</div>
          <img className="vector-icon" alt="" src="/vector.svg" />
          <div className="frame-child5" />
          <div className="download-on-the">Download on the</div>
          <div className="app-store">App Store</div>
          <img className="apple-store-1" alt="" src="/apple-store-1@2x.png" />
          <div className="features-about-service-container">
            <p className="we-provide-the">Features</p>
            <p className="we-provide-the">About</p>
            <p className="we-provide-the">Service</p>
            <p className="we-provide-the">Team</p>
          </div>
          <div className="faq-blog-contact-container">
            <p className="we-provide-the">FAQ</p>
            <p className="we-provide-the">Blog</p>
            <p className="we-provide-the">Contact Us</p>
            <p className="we-provide-the">Support</p>
          </div>
          <div className="phno-91-944-container">
            <p className="we-provide-the">Ph.No.:</p>
            <p className="we-provide-the">+91 944 8641 262</p>
            <p className="we-provide-the">Need Support?</p>
            <p className="we-provide-the">info@emcomserv.com</p>
            <p className="we-provide-the">Location:</p>
            <p className="we-provide-the">
              Beside Bhagani,Hoodi, Bangalore 560048
            </p>
          </div>
        </div>
        <div className="group-wrapper">
          <div className="better-security-for-better-pro-parent">
            <div
              className="better-security-for"
              data-scroll-to="betterSecurityFor"
            >
              Better Security for Better Protection, An Experience of the
              Strength
            </div>
            <div className="monitors-home-appliances-container">
              <ul className="monitors-home-appliances-can-c">
                <li className="monitors-home-appliances">
                  Monitors Home appliances
                </li>
                <li className="monitors-home-appliances">
                  Can control as many appliances as possible at a time
                </li>
                <li className="monitors-home-appliances">{`Smart safety, with smart homes `}</li>
                <li className="monitors-home-appliances">
                  Be alerted for unexpected movements
                </li>
                <li className="monitors-home-appliances">
                  Home automation with only one click
                </li>
                <li className="monitors-home-appliances">
                  Control your devices anytime, anywhere
                </li>
                <li className="monitors-home-appliances">
                  Peace of mined with 24/7 monitoring
                </li>
              </ul>
              <p className="we-provide-the">&nbsp;</p>
            </div>
            <div className="group-child6" />
            <div className="group-child7" />
            <img
              className="rectangle-icon"
              alt=""
              src="/rectangle-100@2x.png"
            />
            <img className="group-child8" alt="" src="/rectangle-101@2x.png" />
            <div className="group-child9" />
            <div className="group-child10" />
            <img className="group-child11" alt="" src="/rectangle-103.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frame;
