import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./X701.css";
import { useState } from "react";
import PortalPopup from "./PortalPopup";
import X70 from "./X70";

const X701 = ({ onClose }) => {
  const navigate = useNavigate();
  const [isX701Open, setX701Open] = useState(false);
  const [isX70PopupOpen, setX70PopupOpen] = useState(false);

  const openX701 = useCallback(() => {
    setX701Open(true);
  }, []);

  const closeX701 = useCallback(() => {
    setX701Open(false);
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
      <div className="rectangle-container">
        <div className="group-inner" />
        <b className="b89">ЗАМОВИТИ</b>
      </div>
      <b className="b90">
        <span>Кошик</span>
        <span className="span2">{` `}</span>
        <span className="span3">{`> оформлення`}</span>
      </b>
      <b className="b91">Пір'їна 100х70</b>
      <b className="b92">1999 грн</b>
      <img
        className="b10070-inner"
        alt=""
        src="/arr.png"
        onClick={onClose}
      />
      <button
        className="goutlineinterfacetrash"
        onClick={onClose}
      >
        <img className="gicon10" alt="" src="/icon10.svg" />
      </button>
      <div className="div90">
        <p className="p68">
          Ваша Пірʼїна приїде до вас, вже за 1-3 дні, якщо ви оформите доставку
          Новою Поштою.
        </p>
        <p className="p68">
          Якщо доставку буде оформлено Укрпоштою - очікуйте ваше замовлення 3-7
          днів.
        </p>
        <p className="p68">
          За межі України очікування від 6 днів Новою поштою та від 14 днів
          Укрпоштою
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
      <div className="ggroup-parent2">
        <button className="ggroup-button" onClick={openX701}>
          <div className="ggroup-child2" />
          <b className="b95">ОФОРМИТИ</b>
        </button>
      </div>
    </div>
    {isX701Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeX701}
        >
          <X70 onClose={closeX701} />
        </PortalPopup>
      )}
    </>
  );
};

export default X701;
