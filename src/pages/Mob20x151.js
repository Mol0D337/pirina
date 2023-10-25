import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Mob20x151.css";

const Mob20x151 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/mob-20x152");
  }, [navigate]);

  return (
    <div className="eng-mob-20x151">
      <img className="eng-mob-20x15-inner" alt="" src="/rectangle-521.svg" />
      <img
        className="vector-icon"
        alt=""
        src="/vector-2.svg"
        onClick={onVectorIconClick}
      />
      <div className="frame-parent">
        <div className="frame">
          <b className="b74">-</b>
        </div>
        <div className="div86">
          <span className="txt6">
            <span className="span2">{`1 `}</span>шт
          </span>
        </div>
        <div className="frame-div">
          <b className="b74">+</b>
        </div>
      </div>
      <div className="group-parent1">
        <div className="uah-get-it-all-container">
          <div className="uah-get-it-container2">
            <span className="txt6">
              <p className="your-pirina-will">гривень</p>
              <p className="your-pirina-will">{`за все про все `}</p>
            </span>
          </div>
          <b className="b76">399</b>
        </div>
        <button className="group-button" onClick={onGroupButtonClick}>
          <div className="group-child1" />
          <b className="checkout">ЗАМОВИТИ</b>
        </button>
      </div>
      <b className="basket-ordering-container2">
        <span>Кошик</span>
        <span className="basket">{` `}</span>
        <span className="container2">{`> оформлення`}</span>
      </b>
      <b className="pirina-2015">Пір'їна 20х15</b>
      <b className="b77">399 грн</b>
      <img
        className="outlineinterfacetrash"
        alt=""
        src="/outlineinterfacetrash.svg"
        onClick={onVectorIconClick}
      />
      <div className="your-pirina-will-container">
        <p className="your-pirina-will">
          Ваша Пірʼїна приїде до вас, вже за 1-3 дні, якщо ви оформите доставку
          Новою Поштою.
        </p>
        <p className="your-pirina-will">&nbsp;</p>
        <p className="your-pirina-will">
          Якщо доставку буде оформлено Укрпоштою - очікуйте ваше замовлення 3-7
          днів.
        </p>
        <p className="your-pirina-will">&nbsp;</p>
        <p className="your-pirina-will">
          За межі України очікування від 6 днів Новою поштою та від 14 днів
          Укрпоштою
        </p>
      </div>
      <img className="eng-mob-20x15-child1" alt="" src="/rectangle-54@2x.png" />
    </div>
  );
};

export default Mob20x151;
