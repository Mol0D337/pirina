import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ENGMob100x701.css";

const ENGMob100x701 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/eng-landing");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/mob-100x702");
  }, [navigate]);

  const onOutlineInterfaceTrashClick = useCallback(() => {
    navigate("/eng-landing");
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
              <p className="uah9">{`uah `}</p>
              <p className="uah9">get it all!</p>
            </span>
          </div>
          <b className="gb229">1 999</b>
        </div>
        <button className="rectangle-parent28" onClick={onGroupButtonClick}>
          <div className="group-child49" />
          <b className="checkout3">CHECKOUT</b>
        </button>
      </div>
      <b className="basket-ordering-container5">
        <span>{`basket `}</span>
        <span className="ordering5">{`> ordering`}</span>
      </b>
      <img
        className="eng-mob-70x50-child2"
        alt=""
        src="/rectangle-513@2x.png"
      />
      <b className="pirina-7050">Pir'ina 100х70</b>
      <b className="b230">1999 грн</b>
      <button
        className="outlineinterfacetrash5"
        onClick={onOutlineInterfaceTrashClick}
      >
        <img className="icon25" alt="" src="/icon9.svg" />
      </button>
      <div className="your-pirina-will-container3">
        <p className="uah9">{`Your Pir'ina will arrive to you in 1-3 days if you order delivering by Nova Poshta. `}</p>
        <p className="uah9">&nbsp;</p>
        <p className="uah9">{`If the delivery will be processed by Ukrposhta - wait for 3-7 days. `}</p>
        <p className="uah9">&nbsp;</p>
        <p className="uah9">
          Outside of Ukraine, the waiting time is from 6 days by Nova Poshta and
          from 14 days by Ukrposhta
        </p>
      </div>
    </div>
  );
};

export default ENGMob100x701;
