import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ENG100x701.css";
import { useState } from "react";
import PortalPopup from "./PortalPopup";
import ENG100x70 from "./ENG100x70";

const ENG100x701 = ({ onClose }) => {
  const navigate = useNavigate();
  const [isENG100x701Open, setENG100x701Open] = useState(false);
  const [isENG100x70Open, setENG100x70Open] = useState(false);

  const openENG100x701 = useCallback(() => {
    setENG100x701Open(true);
  }, []);

  const closeENG100x701 = useCallback(() => {
    setENG100x701Open(false);
  }, []);

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

  const onVectorIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onOutlineInterfaceTrashClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/-100x70");
  }, [navigate]);

  return (
    <>
    <div className="b10070" data-animate-on-scroll>
      <img className="b10070-child" alt="" src="/rectangle-514.svg" />
      <img className="b10070-item" alt="" src="/rectangle-529.svg" />
      <div className="vrectangle-container">
        <div className="vgroup-inner" />
        <b className="vb89">CHECKOUT</b>
      </div>
      <b className="b90">
        <span>Basket </span>
        <span className="span3">{`> ordering`}</span>
      </b>
      <b className="b91">Pir'ina 100х70</b>
      <b className="b92">1999 uah</b>
      <img
        className="b10070-inner"
        alt=""
        src="/arr.png"
        onClick={onClose}
      />
      <button
        className="voutlineinterfacetrash"
        onClick={onClose}
      >
        <img className="vicon10" alt="" src="/icon10.svg" />
      </button>
      <div className="div90">
        <p className="p68">
        Your Pir'ina will arrive to you in 1-3 days if you order delivering by Nova Poshta.
        </p>
        <p className="p68">
        If the delivery will be processed by Ukrposhta - wait for 3-7 days. Outside of Ukraine,
        </p>
        <p className="p68">
        the waiting time is from 6 days by Nova Poshta and from 14 days by Ukrposhta
        </p>
      </div>
      <img className="b10070-child1" alt="" src="/rectangle-515@2x.png" />
      <div className="rectangle-parent1">
        <div className="group-child1" />
        <div className="frame-div">
          <b className="b93">-</b>
        </div>
        <div className="div91">
          <span className="txt9">
            <span className="span4">{`1 `}</span>шт
          </span>
        </div>
        <div className="wrapper3">
          <b className="b93">+</b>
        </div>
      </div>
      <div className="vgroup-parent2">
        <button className="vgroup-button" onClick={openENG100x701}>
          <div className="group-child2" />
          <b className="b95">CHECKOUT</b>
        </button>
      </div>
    </div>
    {isENG100x701Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeENG100x701}
        >
          <ENG100x70 onClose={closeENG100x701} />
        </PortalPopup>
      )}
    </>
  );
};

export default ENG100x701;
