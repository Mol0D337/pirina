import { useState, useCallback, useEffect } from "react";
import X501 from "./X501";
import PortalPopup from "./PortalPopup";
import "./X50POPUP.css";

const X50POPUP = ({ onClose }) => {
  const [isX50PopupOpen, setX50PopupOpen] = useState(false);
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

  const openX50Popup = useCallback(() => {
    setX50PopupOpen(true);
  }, []);

  const closeX50Popup = useCallback(() => {
    setX50PopupOpen(false);
  }, []);

  return (
    <>
      <div className="x50-pop-up" data-animate-on-scroll>
        <img className="x50-pop-up-child" alt="" src="/rectangle-514.svg" />
        <b className="b125">Пір'їна 70х50</b>
        <div className="parent13">
          <div className="div108">70х50х20 см</div>
          <b className="b126">Матеріали:</b>
          <div className="div109">
            <p className="p86">{`Ніжний плюш-велюр. `}</p>
            <p className="p86">Наповнювач - білий холлофайбер.</p>
          </div>
          <b className="b127">{`Плюшки-коржики: `}</b>
          <div className="div110">
            Брошка-серденько, сет фірмових наліпок, листівка, конверт
          </div>
          <b className="b128">Розмір:</b>
        </div>
        <img className="x50-pop-up-item" alt="" src="/rectangle-5212.svg" />
        <b className="b129">{`- `}</b>
        <div className="div111">
          <span className="span16">{`1 `}</span>шт
          <span className="span16">{` `}</span>
        </div>
        <b className="b130">{`+ `}</b>
        <div className="rectangle-parent11">
          <img className="group-child20" alt="" src="/rectangle-517@2x.png" />
          <img className="group-child21" alt="" src="/rectangle-527@2x.png" />
          <img className="group-child22" alt="" src="/rectangle-545@2x.png" />
          <img className="group-child23" alt="" src="/rectangle-535@2x.png" />
          <img className="group-child24" alt="" src="/rectangle-556@2x.png" />
        </div>
        <div className="group-parent6">
          <button className="rectangle-parent12" onClick={openX50Popup}>
            <div className="group-child25" />
            <b className="b131">КУПИТИ</b>
          </button>
          <div className="parent14">
            <div className="div112">
              <span className="txt17">
                <p className="p86">гривень</p>
                <p className="p86">{`за все про`}</p>
                <p className="p86">{`все`}</p>
              </span>
            </div>
            <b className="b132">999</b>
          </div>
          <div className="rectangle-parent13">
            <div className="group-child26" />
            <div className="div113">
              <span className="txt17">
                <span className="span16">{`1 `}</span>шт
                <span className="span16">{` `}</span>
              </span>
            </div>
            <div className="wrapper10">
              <b className="b133">+</b>
            </div>
            <div className="wrapper11">
              <b className="b133">-</b>
            </div>
          </div>
        </div>
        <img
          className="x50-pop-up-inner"
          alt=""
          src="/vector-22.svg"
          onClick={onClose}
        />
      </div>
      {isX50PopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeX50Popup}
        >
          <X501 onClose={closeX50Popup} />
        </PortalPopup>
      )}
    </>
  );
};

export default X50POPUP;
