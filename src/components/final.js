import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./final.css";
import { useState } from "react";
import PortalPopup from "./PortalPopup";

const Final = ({ onClose }) => {
  const navigate = useNavigate();
  const [isFinalOpen, setFinalOpen] = useState(false);

  const openfinal = useCallback(() => {
    setFinalOpen(true);
  }, []);

  const closeFinal = useCallback(() => {
    setFinalOpen(false);
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
        onClick={() => window.location.reload()}
      />
     <div className="div277">
        <span className="txt41">
          <p className="p184">
            Ваше замовлення прийняте і буде відправлено протягом 3 днів. Якщо у вас залишились питання, звертайтеся за номером
          </p>
        </span>
      </div>
      <div className="div278">
        <span className="txt41">
          <p className="p184">
            <b>{`+38 095 354 62 82 `}</b>
            <span className="span76">{` `}</span>
          </p>
        </span>
      </div>
      <div className="traced-parent1">
        <img
          className="traced-icon3"
          alt=""
          src="/--20220926--0238-1-traced3.svg"
        />
        <b className="b395">Вже лечу до тебе</b>
      </div>
    </div>
  );
};

export default Final;
