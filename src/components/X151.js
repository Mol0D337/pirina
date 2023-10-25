import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./X151.css";
import { useState } from "react";
import PortalPopup from "./PortalPopup";
import X15 from "./X15";

const X151 = ({ onClose }) => {
  const navigate = useNavigate();
  const [isX151Open, setX151Open] = useState(false);
  const [isX15PopupOpen, setX15PopupOpen] = useState(false);

  const openX151 = useCallback(() => {
    setX151Open(true);
  }, []);

  const closeX151 = useCallback(() => {
    setX151Open(false);
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

  const onGroupButtonClick = useCallback(() => {
  openX151();
}, [openX151]);

  return (
    <>
    <div className="x158" data-animate-on-scroll>
      <img className="x15-child1" alt="" src="/rectangle-514.svg" />
      <img className="x15-child2" alt="" src="/rectangle-529.svg" />
      <div className="rectangle-parent52">
        <div className="group-child57" />
        <b className="b324">ЗАМОВИТИ</b>
      </div>
      <b className="b325">
        <span>Кошик</span>
        <span className="span53">{` `}</span>
        <span className="span54">{`> оформлення`}</span>
      </b>
      <b className="b4000">Пір'їна 20х15</b>
      <b className="b4001">399 грн</b>
      <img
        className="x15-child3"
        alt=""
        src="/arr.png"
        onClick={onClose}
      />
      <button
        className="outlineinterfacetrash7"
        onClick={onClose}
      >
        <img className="icon26" alt="" src="/icon10.svg" />
      </button>
      <div className="div246">
        <p className="p155">
          Ваша Пірʼїна приїде до вас, вже за 1-3 дні, якщо ви оформите доставку
          Новою Поштою.
        </p>
        <p className="p155">
          Якщо доставку буде оформлено Укрпоштою - очікуйте ваше замовлення 3-7
          днів.
        </p>
        <p className="p155">
          За межі України очікування від 6 днів Новою поштою та від 14 днів
          Укрпоштою
        </p>
      </div>
      <img className="x15-child4" alt="" src="/rectangle-515@2x.png" />
      <div className="rectangle-parent53">
        <div className="group-child58" />
        <div className="wrapper61">
          <b className="b328">-</b>
        </div>
        <div className="div247">
          <span className="txt26">
            <span className="span55">{`1 `}</span>шт
          </span>
        </div>
        <div className="wrapper62">
          <b className="b328">+</b>
        </div>
      </div>
      <div className="group-parent4000">
        <button className="rectangle-parent4000" onClick={openX151}>
          <div className="group-child4000" />
          <b className="b5000">ОФОРМИТИ</b>
        </button>
      </div>
    </div>
    {isX151Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
        >
          <X15 onClose={closeX151}  />
        </PortalPopup>
      )}
    </>
  );
};

export default X151;
