import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./X501.css";
import { useState } from "react";
import PortalPopup from "./PortalPopup";
import X50 from "./X50";

const X501 = ({ onClose }) => {
  const navigate = useNavigate();
  const [isX501Open, setX501Open] = useState(false);
  const [isX50PopupOpen, setX50PopupOpen] = useState(false);

  const openX501 = useCallback(() => {
    setX501Open(true);
  }, []);

  const closeX501 = useCallback(() => {
    setX501Open(false);
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
        <b className="b117">ЗАМОВИТИ</b>
      </div>
      <b className="b118">
        <span>Кошик</span>
        <span className="span13">{` `}</span>
        <span className="span14">{`> оформлення`}</span>
      </b>
      <b className="b119">Пір'їна 70х50</b>
      <b className="b120">999 грн</b>
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
          Ваша Пірʼїна приїде до вас, вже за 1-3 дні, якщо ви оформите доставку
          Новою Поштою.
        </p>
        <p className="p81">
          Якщо доставку буде оформлено Укрпоштою - очікуйте ваше замовлення 3-7
          днів.
        </p>
        <p className="p81">
          За межі України очікування від 6 днів Новою поштою та від 14 днів
          Укрпоштою
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
        <button className="rectangle-parent10" onClick={openX501}>
          <div className="group-child19" />
          <b className="b123">ОФОРМИТИ</b>
        </button>
      </div>
    </div>
    {isX501Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeX501}
        >
          <X50 onClose={closeX501} />
        </PortalPopup>
      )}
    </>
  );
};

export default X501;
