import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./M20.css";

const M20 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/mob-20x151");
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
        <img className="frame-child3" alt="" src="/rectangle-551@2x.png" />
        <div className="rectangle-parent34">
          <img className="frame-child4" alt="" src="/rectangle-541@2x.png" />
          <img className="frame-child5" alt="" src="/rectangle-51@2x.png" />
          <img className="frame-child6" alt="" src="/rectangle-523@2x.png" />
          <img className="frame-child7" alt="" src="/rectangle-53@2x.png" />
        </div>
      </div>
      <div className="sm3">100х70х20 см</div>
      <b className="materials3">Матеріали:</b>
      <div className="gentle-plush-velour-container3">
        <p className="gentle-plush-velour3">{`Ніжний плюш-велюр. `}</p>
        <p className="gentle-plush-velour3">Наповнювач - білий холлофайбер.</p>
      </div>
      <b className="our-complements3">{`Плюшки-коржики: `}</b>
      <div className="brooch-heart3">
        Брошка-серденько, сет фірмових наліпок, листівка, конверт
      </div>
      <b className="size3">Розмір:</b>
      <b className="pirina-70501">Пір'їна 20х15</b>
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
      <div className="guah-get-it-all-parent7">
        <b className="b236">399</b>
        <div className="guah-get-it-container15">
          <p className="gentle-plush-velour3">гривень</p>
          <p className="gentle-plush-velour3">{`за все про все `}</p>
        </div>
      </div>
      <button className="rectangle-parent32" onClick={onGroupButtonClick}>
        <div className="group-child51" />
        <b className="buy3">КУПИТИ</b>
      </button>
    </div>
  );
};

export default M20;
