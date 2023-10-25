import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ENGMob20x151.css";

const ENGMob20x151 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/eng-landing");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/eng-mob-20x151");
  }, [navigate]);

  const onOutlineInterfaceTrashClick = useCallback(() => {
    navigate("/eng-landing");
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
              <p className="your-pirina-will">{`uah `}</p>
              <p className="your-pirina-will">get it all!</p>
            </span>
          </div>
          <b className="b76">399</b>
        </div>
        <button className="group-button" onClick={onGroupButtonClick}>
          <div className="group-child1" />
          <b className="checkout">CHECKOUT</b>
        </button>
      </div>
      <b className="basket-ordering-container2">
        <span>{`basket `}</span>
        <span className="ordering2">{`> ordering`}</span>
      </b>
      <b className="pirina-2015">Pir'ina 20х15</b>
      <b className="b77">1999 грн</b>
      <button
        className="outlineinterfacetrash"
        onClick={onOutlineInterfaceTrashClick}
      >
        <img className="icon10" alt="" src="/icon9.svg" />
      </button>
      <div className="your-pirina-will-container">
        <p className="your-pirina-will">{`Your Pir'ina will arrive to you in 1-3 days if you order delivering by Nova Poshta. `}</p>
        <p className="your-pirina-will">&nbsp;</p>
        <p className="your-pirina-will">{`If the delivery will be processed by Ukrposhta - wait for 3-7 days. `}</p>
        <p className="your-pirina-will">&nbsp;</p>
        <p className="your-pirina-will">
          Outside of Ukraine, the waiting time is from 6 days by Nova Poshta and
          from 14 days by Ukrposhta
        </p>
      </div>
      <img className="eng-mob-20x15-child1" alt="" src="/rectangle-54@2x.png" />
    </div>
  );
};

export default ENGMob20x151;
