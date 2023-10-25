import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Engfinal.css";
import { useState } from "react";
import PortalPopup from "./PortalPopup";

const Engfinal = ({ onClose }) => {
  const navigate = useNavigate();
  const [isEngfinalOpen, setEngfinalOpen] = useState(false);

  const openEnginal = useCallback(() => {
    setEngfinalOpen(true);
  }, []);

  const closeEngfinal = useCallback(() => {
    setEngfinalOpen(false);
  }, []);

  const onVectorIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="final" data-animate-on-scroll>
      <img className="final-child" alt="" src="/rectangle-514.svg" />
      <img className="a0093-icon3" alt="" src="/329a00931@2x.png" />
      <img
        className="end-item"
        alt=""
        src="/vector-21.svg"
        onClick={onVectorIconClick}
      />
      <div className="your-order-has-container">
        <span className="your-order-has-container1">
          <p className="days-for-further">{`Your order has been accepted and will be shipped within 3 days. For further information, contact this number `}</p>
          <p className="days-for-further">
            <b>+38 095 354 62 82</b>
          </p>
        </span>
      </div>
      <div className="traced-parent1">
        <img
          className="traced-icon3"
          alt=""
          src="/--20220926--0238-1-traced3.svg"
        />
        <b className="b395">I'm already flying to you</b>
      </div>
    </div>
  );
};

export default Engfinal;
