import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ENGMob100x70.css";

const ENGMob100x70 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/eng-landing");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/mob-100x701");
  }, [navigate]);

  return (
    <div className="ueng-mob-70x502">
      <img className="eng-mob-70x50-child3" alt="" src="/rectangle-522.svg" />
      <img
        className="eng-mob-70x50-child4"
        alt=""
        src="/vector-2.svg"
        onClick={onVectorIconClick}
      />
      <div className="rectangle-parent33">
        <img className="frame-child3" alt="" src="/rectangle-553@2x.png" />
        <div className="rectangle-parent34">
          <img className="frame-child4" alt="" src="/rectangle-512@2x.png" />
          <img className="frame-child5" alt="" src="/rectangle-525@2x.png" />
          <img className="frame-child6" alt="" src="/rectangle-532@2x.png" />
          <img className="frame-child7" alt="" src="/rectangle-543@2x.png" />
        </div>
      </div>
      <div className="sm3">100х70х20 sm</div>
      <b className="materials3">Materials:</b>
      <div className="gentle-plush-velour-container3">
        <p className="gentle-plush-velour3">{`Gentle plush velour. `}</p>
        <p className="gentle-plush-velour3">The filler is white holofiber.</p>
      </div>
      <b className="our-complements3">Our complements:</b>
      <div className="brooch-heart3">
        Brooch - heart, set of branded stickers, postcard, envelope
      </div>
      <b className="size3">Size:</b>
      <b className="pirina-70501">Pir'ina 100х70</b>
      <div className="frame-parent1">
        <div className="wrapper24">
          <b className="b234">{`- `}</b>
        </div>
        <div className="div233">
          <span className="span34">{`1 `}</span>шт
          <span className="span34">{` `}</span>
        </div>
        <div className="wrapper25">
          <b className="b235">{`+ `}</b>
        </div>
      </div>
      <div className="vuah-get-it-all-parent7">
        <div className="vuah-get-it-container15">
          <p className="gentle-plush-velour3">{`uah `}</p>
          <p className="gentle-plush-velour3">get it all!</p>
        </div>
        <b className="b236">1 999</b>
      </div>
      <button className="rectangle-parent32" onClick={onGroupButtonClick}>
        <div className="group-child51" />
        <b className="buy3">BUY</b>
      </button>
    </div>
  );
};

export default ENGMob100x70;
