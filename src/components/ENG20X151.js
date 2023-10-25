import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ENG20X151.css";
import { useState } from "react";
import PortalPopup from "./PortalPopup";
import ENG20X15 from "./ENG20X15"

const ENG20x151 = ({ onClose }) => {
  const navigate = useNavigate();
  const [isENG20x151Open, setENG20x151Open] = useState(false);

  const openENG20x151 = useCallback(() => {
    setENG20x151Open(true);
  }, []);

  const closeENG20x151 = useCallback(() => {
    setENG20x151Open(false);
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
    navigate("/-70x50");
  }, [navigate]);

  return (
    <>
    <div className="x50" data-animate-on-scroll>
      <img className="x50-child" alt="" src="/rectangle-514.svg" />
      <img className="x50-item" alt="" src="/rectangle-529.svg" />
      <div className="rectangle-parent8">
        <div className="group-child17" />
        <b className="b117">CHECKOUT</b>
      </div>
      <b className="b118">
        <span>Basket </span>
        <span className="span14">{`> ordering`}</span>
      </b>
      <b className="b119">Pir'ina 20х15</b>
      <b className="b120">399 uah</b>
      <img
        className="x501-inner"
        alt=""
        src="/arr.png"
        onClick={onClose}
      />
      <button
        className="outlineinterfacetrash1"
        onClick={onClose}
      >
        <img className="icon11" alt="" src="/icon10.svg" />
      </button>
      <div className="div105">
        <p className="p81">
        Your Pir'ina will arrive to you in 1-3 days if you order delivering by Nova Poshta.
        </p>
        <p className="p81">
        If the delivery will be processed by Ukrposhta - wait for 3-7 days. Outside of Ukraine,
        </p>
        <p className="p81">
        the waiting time is from 6 days by Nova Poshta and from 14 days by Ukrposhta
        </p>
      </div>
      <img className="x50-child1" alt="" src="/rectangle-554@2x.png" />
      <div className="rectangle-parent9">
        <div className="group-child18" />
        <div className="wrapper8">
          <b className="b121">-</b>
        </div>
        <div className="div106">
          <span className="txt15">
            <span className="span15">{`1 `}</span>шт
          </span>
        </div>
        <div className="wrapper9">
          <b className="b121">+</b>
        </div>
      </div>
      <div className="group-parent5">
        <button className="rectangle-parent10" onClick={openENG20x151}>
          <div className="group-child19" />
          <b className="b123">CHECKOUT</b>
        </button>
      </div>
    </div>
    {isENG20x151Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeENG20x151}
        >
          <ENG20X15 onClose={closeENG20x151} />
        </PortalPopup>
      )}
    </>
  );
};

export default ENG20x151;
