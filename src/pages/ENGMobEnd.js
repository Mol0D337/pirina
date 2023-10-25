import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ENGMobEnd.css";

const ENGMobEnd = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/eng-landing");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/eng-landing");
  }, [navigate]);

  return (
    <div className="eng-mob-end">
      <img className="a0093-icon" alt="" src="/329a0093@2x.png" />
      <img
        className="eng-mob-end-child"
        alt=""
        src="/vector-2.svg"
        onClick={onVectorIconClick}
      />
      <div className="traced-parent">
        <img
          className="traced-icon"
          alt=""
          src="/--20220926--0238-1-traced.svg"
        />
        <b className="im-already-flying-container">
          <span className="im-already-flying-container1">
            <p className="im-already">{`I'm already `}</p>
            <p className="im-already">flying to you</p>
          </span>
        </b>
      </div>
      <div className="your-order-has">{`Your order has been accepted and will be shipped within 3 days. `}</div>
      <div className="for-further-information-container">
        <p className="im-already">{`For further information, contact this number `}</p>
        <p className="im-already">
          <b>+38 095 354 62 82</b>
        </p>
      </div>
      <button className="rectangle-parent45" onClick={onGroupButtonClick}>
        <div className="group-child60" />
        <b className="close">CLOSE</b>
      </button>
    </div>
  );
};

export default ENGMobEnd;
