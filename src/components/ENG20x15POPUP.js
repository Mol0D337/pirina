import { useState, useCallback, useEffect } from "react";
import ENG20X151 from "./ENG20X151";
import PortalPopup from "./PortalPopup";
import "./ENG20x15POPUP.css";

const ENG20x15POPUP = ({ onClose }) => {
  const [isENG20X15Open, setENG20X15Open] = useState(false);
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

  const openENG20X15 = useCallback(() => {
    setENG20X15Open(true);
  }, []);

  const closeENG20X15 = useCallback(() => {
    setENG20X15Open(false);
  }, []);

  return (
    <>
      <div className="eng-20x15-pop-up" data-animate-on-scroll>
        <b className="b137">{`- `}</b>
        <div className="div114">
          <span className="span20">{`1 `}</span>шт
          <span className="span20">{` `}</span>
        </div>
        <b className="b138">{`+ `}</b>
        <img
          className="eng-20x15-pop-up-child"
          alt=""
          src="/rectangle-514.svg"
        />
        <b className="pirina-20151">Pir'ina 20х15</b>
        <div className="sm-parent">
          <div className="sm">20х15х7 sm</div>
          <b className="materials">Materials:</b>
          <div className="gentle-plush-velour-container">
            <p className="gentle-plush-velour">{`Gentle plush velour. `}</p>
            <p className="gentle-plush-velour">
              The filler is white holofiber.
            </p>
          </div>
          <b className="our-complements">Our complements:</b>
          <div className="brooch-heart">
            Brooch - heart, set of branded stickers, postcard, envelope
          </div>
          <b className="size">Size:</b>
        </div>
        <div className="ggroup-parent8">
          <button className="rectangle-parent16" onClick={openENG20X15}>
            <div className="group-child29" />
            <b className="buy">BUY</b>
          </button>
          <div className="guah-get-it-all-group">
            <div className="guah-get-it-container2">
              <span className="guah-get-it-container3">
                <p className="gentle-plush-velour">uah</p>
                <p className="gentle-plush-velour">{`get it all! `}</p>
              </span>
            </div>
            <b className="vb139">399</b>
          </div>
          <div className="rectangle-parent17">
            <div className="group-child30" />
            <div className="div115">
              <span className="uah-get-it-container3">
                <span className="span20">{`1 `}</span>шт
                <span className="span20">{` `}</span>
              </span>
            </div>
            <div className="wrapper12">
              <b className="b140">+</b>
            </div>
            <div className="wrapper13">
              <b className="b140">-</b>
            </div>
          </div>
        </div>
        <img
          className="eng-20x15-pop-up-item"
          alt=""
          src="/vector-22.svg"
          onClick={onClose}
        />
        <div className="rectangle-parent18">
          <img className="group-child31" alt="" src="/rectangle-544@2x.png" />
          <img className="group-child32" alt="" src="/rectangle-516@2x.png" />
          <img className="group-child33" alt="" src="/rectangle-526@2x.png" />
          <img className="group-child34" alt="" src="/rectangle-533@2x.png" />
          <img className="group-child35" alt="" src="/rectangle-555@2x.png" />
        </div>
      </div>
      {isENG20X15Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeENG20X15}
        >
          <ENG20X151 onClose={closeENG20X15} />
        </PortalPopup>
      )}
    </>
  );
};

export default ENG20x15POPUP;
