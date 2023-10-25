import { useState, useCallback, useEffect } from "react";
import ENG100x701 from "./ENG100x701";
import PortalPopup from "./PortalPopup";
import "./ENG100x70POPUP.css";

const ENG100x70POPUP = ({ onClose }) => {
  const [isENG100x70POPUPOpen, setENG100x70POPUPOpen] = useState(false);
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

  const openENG100x70POPUP = useCallback(() => {
    setENG100x70POPUPOpen(true);
  }, []);

  const closeENG100x70POPUP = useCallback(() => {
    setENG100x70POPUPOpen(false);
  }, []);

  return (
    <>
      <div className="eng-100x70-pop-up" data-animate-on-scroll>
        <b className="b144">{`- `}</b>
        <div className="div116">
          <span className="span24">{`1 `}</span>шт
          <span className="span24">{` `}</span>
        </div>
        <b className="b145">{`+ `}</b>
        <img
          className="eng-100x70-pop-up-child"
          alt=""
          src="/rectangle-514.svg"
        />
        <b className="pirina-100701">Pir'ina 100х70</b>
        <div className="sm-group">
          <div className="sm1">100х70х20 sm</div>
          <b className="materials1">Materials:</b>
          <div className="gentle-plush-velour-container1">
            <p className="gentle-plush-velour1">{`Gentle plush velour. `}</p>
            <p className="gentle-plush-velour1">
              The filler is white holofiber.
            </p>
          </div>
          <b className="our-complements1">Our complements:</b>
          <div className="brooch-heart1">
            Brooch - heart, set of branded stickers, postcard, envelope
          </div>
          <b className="size1">Size:</b>
        </div>
        <div className="group-parent10">
          <button className="rectangle-parent21" onClick={openENG100x70POPUP}>
            <div className="group-child38" />
            <b className="buy1">BUY</b>
          </button>
          <div className="uah-get-it-all-parent1">
            <div className="uah-get-it-container6">
              <span className="uah-get-it-container7">
                <p className="gentle-plush-velour1">uah</p>
                <p className="gentle-plush-velour1">{`get it all! `}</p>
              </span>
            </div>
            <b className="b146">1 999</b>
          </div>
          <div className="rectangle-parent22">
            <div className="group-child39" />
            <div className="div117">
              <span className="uah-get-it-container7">
                <span className="span24">{`1 `}</span>шт
                <span className="span24">{` `}</span>
              </span>
            </div>
            <div className="wrapper14">
              <b className="b147">+</b>
            </div>
            <div className="wrapper15">
              <b className="b147">-</b>
            </div>
          </div>
        </div>
        <img
          className="eng-100x70-pop-up-item"
          alt=""
          src="/vector-22.svg"
          onClick={onClose}
        />
        <div className="rectangle-parent23">
          <img className="group-child40" alt="" src="/rectangle-59@2x.png" />
          <img className="group-child41" alt="" src="/rectangle-58@2x.png" />
          <img className="group-child42" alt="" src="/rectangle-534@2x.png" />
          <img className="group-child43" alt="" src="/rectangle-57@2x.png" />
          <img className="group-child44" alt="" src="/rectangle-56@2x.png" />
        </div>
      </div>
      {isENG100x70POPUPOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeENG100x70POPUP}
        >
          <ENG100x701 onClose={closeENG100x70POPUP} />
        </PortalPopup>
      )}
    </>
  );
};

export default ENG100x70POPUP;
