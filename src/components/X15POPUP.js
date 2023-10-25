import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./X15POPUP.css";
import X151 from "./X151";
import PortalPopup from "./PortalPopup";

const X15POPUP = ({ onClose }) => {
  const [isX15PopupOpen, setX15PopupOpen] = useState(false);
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

  const openX15Popup = useCallback(() => {
    setX15PopupOpen(true);
  }, []);

  const closeX15Popup = useCallback(() => {
    setX15PopupOpen(false);
  }, []);

  return (
    <>
    <div className="x15-pop-up" data-animate-on-scroll>
      <img className="x15-pop-up-child" alt="" src="/rectangle-514.svg" />
      <b className="b107">Пір'їна 20х15</b>
      <div className="parent10">
        <div className="div99">20х15х7 см</div>
        <b className="b108">Матеріали:</b>
        <div className="div100">
          <p className="p77">{`Ніжний плюш-велюр. `}</p>
          <p className="p77">Наповнювач - білий холлофайбер.</p>
        </div>
        <b className="b109">{`Плюшки-коржики: `}</b>
        <div className="div101">
          Брошка-серденько, сет фірмових наліпок, листівка, конверт
        </div>
        <b className="b110">Розмір:</b>
      </div>
      <img className="x15-pop-up-item" alt="" src="/rectangle-5210.svg" />
      <b className="b111">{`- `}</b>
      <div className="div102">
        <span className="span9">{`1 `}</span>шт
        <span className="span9">{` `}</span>
      </div>
      <b className="b112">{`+ `}</b>
      <div className="rectangle-parent5">
        <img className="group-child10" alt="" src="/rectangle-544@2x.png" />
        <img className="group-child11" alt="" src="/rectangle-516@2x.png" />
        <img className="group-child12" alt="" src="/rectangle-526@2x.png" />
        <img className="group-child13" alt="" src="/rectangle-533@2x.png" />
        <img className="group-child14" alt="" src="/rectangle-555@2x.png" />
      </div>
      <div className="group-parent4">
        <button className="rectangle-parent6" onClick={openX15Popup}>
          <div className="group-child15" />
          <b className="b113">КУПИТИ</b>
        </button>
        <div className="parent11">
          <div className="div103">
            <span className="txt13">
              <p className="p77">гривень</p>
              <p className="p77">{`за все про`}</p>
              <p className="p77">{`все`}</p>
            </span>
          </div>
          <b className="b114">399</b>
        </div>
        <div className="rectangle-parent7">
          <div className="group-child16" />
          <div className="div104">
            <span className="txt13">
              <span className="span9">{`1 `}</span>шт
              <span className="span9">{` `}</span>
            </span>
          </div>
          <div className="wrapper6">
            <b className="b115">+</b>
          </div>
          <div className="wrapper7">
            <b className="b115">-</b>
          </div>
        </div>
      </div>
      <img
        className="x15-pop-up-inner"
        alt=""
        src="/vector-22.svg"
        onClick={onClose}
      />
    </div>
    {isX15PopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeX15Popup}
        >
          <X151 onClose={closeX15Popup} />
        </PortalPopup>
      )}
    </>
  );
};

export default X15POPUP;
