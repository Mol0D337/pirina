import { useState, useCallback, useEffect } from "react";
import "./X70POPUP.css";
import X701 from "./X701";
import PortalPopup from "./PortalPopup";

const X70POPUP = ({ onClose }) => {
  const [isX70PopupOpen, setX70PopupOpen] = useState(false);
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

  const openX70Popup = useCallback(() => {
    setX70PopupOpen(true);
  }, []);

  const closeX70Popup = useCallback(() => {
    setX70PopupOpen(false);
  }, []);

  return (
    <>
    <div className="x10070" data-animate-on-scroll>
      <img className="x10070-child" alt="" src="/rectangle-514.svg" />
      <b className="b97">Пір'їна 100х70</b>
      <div className="parent8">
        <div className="div93">100х70х20 см</div>
        <b className="b98">Матеріали:</b>
        <div className="div94">
          <p className="p73">{`Ніжний плюш-велюр. `}</p>
          <p className="p73">Наповнювач - білий холлофайбер.</p>
        </div>
        <b className="b99">{`Плюшки-коржики: `}</b>
        <div className="div95">
          Брошка-серденько, сет фірмових наліпок, листівка, конверт
        </div>
        <b className="b100">Розмір:</b>
      </div>
      <img className="x10070-item" alt="" src="/rectangle-5211.svg" />
      <b className="b101">{`- `}</b>
      <div className="div96">
        <span className="span5">{`1 `}</span>шт
        <span className="span5">{` `}</span>
      </div>
      <b className="b102">{`+ `}</b>
      <div className="rectangle-parent2">
        <img className="group-child3" alt="" src="/rectangle-591@2x.png" />
        <img className="group-child4" alt="" src="/rectangle-581@2x.png" />
        <img className="group-child5" alt="" src="/rectangle-536@2x.png" />
        <img className="group-child6" alt="" src="/rectangle-571@2x.png" />
        <img className="group-child7" alt="" src="/rectangle-561@2x.png" />
      </div>
      <div className="group-parent3" onClick={openX70Popup}>
        <button className="rectangle-parent3">
          <div className="group-child8" />
          <b className="b103">КУПИТИ</b>
        </button>
        <div className="parent9">
          <div className="div97">
            <span className="txt11">
              <p className="p73">гривень</p>
              <p className="p73">{`за все про`}</p>
              <p className="p73">{`все`}</p>
            </span>
          </div>
          <b className="b104">1 999</b>
        </div>
        <button className="rectangle-parent4">
          <div className="group-child9" />
          <div className="div98">
            <span className="txt11">
              <span className="span5">{`1 `}</span>шт
              <span className="span5">{` `}</span>
            </span>
          </div>
          <div className="wrapper4">
            <b className="b105">+</b>
          </div>
          <div className="wrapper5">
            <b className="b105">-</b>
          </div>
        </button>
      </div>
      <img
        className="x10070-inner"
        alt=""
        src="/vector-22.svg"
        onClick={onClose}
      />
    </div>
    {isX70PopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeX70Popup}
        >
          <X701 onClose={closeX70Popup} />
        </PortalPopup>
      )}
    </>
  );
};

export default X70POPUP;
