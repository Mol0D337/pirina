import { useState, useCallback, useEffect } from "react";
import ENG70x501 from "./ENG70x501";
import PortalPopup from "./PortalPopup";
import "./ENG70x50POPUP.css";

const ENG70x50POPUP = ({ onClose }) => {
  const [isENG70x50POPUPOpen, setENG70x50POPUPOpen] = useState(false);
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

  const openENG70x50POPUP = useCallback(() => {
    setENG70x50POPUPOpen(true);
  }, []);

  const closeENG70x50POPUP = useCallback(() => {
    setENG70x50POPUPOpen(false);
  }, []);

  return (
    <>
      <div className="x50-pop-up" data-animate-on-scroll>
        <img className="x50-pop-up-child" alt="" src="/rectangle-514.svg" />
        <b className="b125">Pir'ina 70х50</b>
        <div className="parent13">
          <div className="div108">70х50х20 sm</div>
          <b className="b126">Materials:</b>
          <div className="div109">
            <p className="p86">{`Gentle plush velour. `}</p>
            <p className="p86">The filler is white holofiber.</p>
          </div>
          <b className="b127">{`Our complements: `}</b>
          <div className="div110">
          Brooch - heart, set of branded stickers, postcard, envelope
          </div>
          <b className="b128">Size:</b>
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
          <button className="rectangle-parent12" onClick={openENG70x50POPUP}>
            <div className="group-child25" />
            <b className="b131">BUY</b>
          </button>
          <div className="parent14">
            <div className="div112">
              <span className="txt17">
                <p className="p86">uah</p>
                <p className="p86">{`get it all! `}</p>
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
      {isENG70x50POPUPOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeENG70x50POPUP}
        >
          <ENG70x501 onClose={closeENG70x50POPUP} />
        </PortalPopup>
      )}
    </>
  );
};

export default ENG70x50POPUP;
