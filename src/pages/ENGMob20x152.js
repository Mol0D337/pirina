import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ENGMob20x152.css";

const ENGMob20x152 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/eng-landing");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/eng-mob-20x152");
  }, [navigate]);

  return (
    <div className="ueng-mob-20x152">
      <img className="eng-mob-20x15-child2" alt="" src="/rectangle-522.svg" />
      <img
        className="eng-mob-20x15-child3"
        alt=""
        src="/vector-2.svg"
        onClick={onVectorIconClick}
      />
      <div className="sm2">20х15х7 sm</div>
      <b className="materials2">Materials:</b>
      <div className="gentle-plush-velour-container2">
        <p className="gentle-plush-velour2">{`Gentle plush velour. `}</p>
        <p className="gentle-plush-velour2">The filler is white holofiber.</p>
      </div>
      <b className="our-complements2">Our complements:</b>
      <div className="brooch-heart2">
        Brooch - heart, set of branded stickers, postcard, envelope
      </div>
      <b className="size2">Size:</b>
      <b className="pirina-20153">Pir'ina 20х15</b>
      <div className="frame-container">
        <div className="wrapper22">
          <b className="b231">{`- `}</b>
        </div>
        <div className="div222">
          <span className="span32">{`1 `}</span>шт
          <span className="span32">{` `}</span>
        </div>
        <div className="wrapper23">
          <b className="b232">{`+ `}</b>
        </div>
      </div>
      <div className="guah-get-it-all-parent6">
        <div className="guah-get-it-container14">
          <p className="gentle-plush-velour2">{`uah `}</p>
          <p className="gentle-plush-velour2">get it all!</p>
        </div>
        <b className="b233">399</b>
      </div>
      <button className="rectangle-parent29" onClick={onGroupButtonClick}>
        <div className="group-child50" />
        <b className="buy2">BUY</b>
      </button>
      <div className="rectangle-parent30">
        <img className="frame-child" alt="" src="/rectangle-551@2x.png" />
        <div className="rectangle-parent31">
          <img className="frame-item" alt="" src="/rectangle-541@2x.png" />
          <img className="frame-inner" alt="" src="/rectangle-51@2x.png" />
          <img className="frame-child1" alt="" src="/rectangle-523@2x.png" />
          <img className="frame-child2" alt="" src="/rectangle-53@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default ENGMob20x152;
