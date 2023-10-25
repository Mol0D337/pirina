import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Mob100x702.css";

const Mob100x702 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/mob-100x703");
  }, [navigate]);

  return (
    <div className="mob-100x702">
      <img className="mob-100x70-child3" alt="" src="/rectangle-5213.svg" />
      <img
        className="mob-100x70-child4"
        alt=""
        src="/vector-2.svg"
        onClick={onVectorIconClick}
      />
      <div className="rectangle-parent79">
        <img className="frame-child38" alt="" src="/rectangle-553@2x.png" />
        <div className="rectangle-parent80">
          <img className="frame-child39" alt="" src="/rectangle-512@2x.png" />
          <img className="frame-child40" alt="" src="/rectangle-525@2x.png" />
          <img className="frame-child41" alt="" src="/rectangle-532@2x.png" />
          <img className="frame-child42" alt="" src="/rectangle-543@2x.png" />
        </div>
      </div>
      <div className="div293">100х70х20 см</div>
      <b className="b432">Матеріали:</b>
      <div className="div294">
        <p className="p199">{`Ніжний плюш-велюр. `}</p>
        <p className="p199">Наповнювач - білий холлофайбер.</p>
      </div>
      <b className="b433">{`Плюшки-коржики: `}</b>
      <div className="div295">
        Брошка-серденько, сет фірмових наліпок, листівка, конверт
      </div>
      <b className="b434">Розмір:</b>
      <b className="b435">Пір'їна 100х70</b>
      <div className="frame-parent14">
        <div className="wrapper92">
          <b className="b436">-</b>
        </div>
        <div className="div296">
          <span className="txt47">
            <span className="span87">{`1 `}</span>шт
          </span>
        </div>
        <div className="wrapper93">
          <b className="b436">+</b>
        </div>
      </div>
      <div className="group-parent40">
        <div className="parent56">
          <div className="div297">
            <p className="p199">гривень</p>
            <p className="p199">{`за все про все `}</p>
          </div>
          <b className="b438">1 999</b>
        </div>
        <button className="rectangle-parent81" onClick={onGroupButtonClick}>
          <div className="group-child92" />
          <b className="b439">КУПИТИ</b>
        </button>
      </div>
    </div>
  );
};

export default Mob100x702;
