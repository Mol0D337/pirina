import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Mob70x501.css";

const Mob70x501 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/mob-70x502");
  }, [navigate]);

  return (
    <div className="eng-mob-70x501">
      <img className="eng-mob-70x50-inner" alt="" src="/rectangle-521.svg" />
      <img
        className="eng-mob-70x50-child1"
        alt=""
        src="/vector-2.svg"
        onClick={onVectorIconClick}
      />
      <div className="frame-group">
        <div className="wrapper20">
          <b className="b227">-</b>
        </div>
        <div className="div221">
          <span className="txt28">
            <span className="span31">{`1 `}</span>шт
          </span>
        </div>
        <div className="wrapper21">
          <b className="b227">+</b>
        </div>
      </div>
      <div className="group-parent14">
        <div className="uah-get-it-all-parent5">
          <div className="uah-get-it-container12">
            <span className="txt28">
              <p className="uah9">гривень</p>
              <p className="uah9">{`за все про все `}</p>
            </span>
          </div>
          <b className="b229">999</b>
        </div>
        <button className="rectangle-parent28" onClick={onGroupButtonClick}>
          <div className="group-child49" />
          <b className="checkout3">ЗАМОВИТИ</b>
        </button>
      </div>
      <b className="basket-ordering-container5">
        <span>Кошик </span>
        <span className="ordering5">{`> оформлення`}</span>
      </b>
      <b className="pirina-7050">Пір'їна 70х50</b>
      <b className="b230">999 грн</b>
      <img
        className="outlineinterfacetrash5"
        alt=""
        src="/outlineinterfacetrash.svg"
        onClick={onVectorIconClick}
      />
      <div className="your-pirina-will-container3">
        <p className="uah9">
          Ваша Пірʼїна приїде до вас, вже за 1-3 дні, якщо ви оформите доставку
          Новою Поштою.
        </p>
        <p className="uah9">&nbsp;</p>
        <p className="uah9">
          Якщо доставку буде оформлено Укрпоштою - очікуйте ваше замовлення 3-7
          днів.
        </p>
        <p className="uah9">&nbsp;</p>
        <p className="uah9">
          За межі України очікування від 6 днів Новою поштою та від 14 днів
          Укрпоштою
        </p>
      </div>
      <img className="eng-mob-70x50-child2" alt="" src="/rectangle-55@2x.png" />
    </div>
  );
};

export default Mob70x501;
