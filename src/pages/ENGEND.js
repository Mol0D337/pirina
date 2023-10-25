import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ENGEND.css";

const ENGEND = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/eng-landing");
  }, [navigate]);

  return (
    <div className="eng-end">
      <img className="eng-end-child" alt="" src="/rectangle-514.svg" />
      <img className="a0093-icon1" alt="" src="/329a00931@2x.png" />
      <img
        className="eng-end-item"
        alt=""
        src="/vector-21.svg"
        onClick={onVectorIconClick}
      />
      <div className="your-order-has-container">
        <span className="your-order-has-container1">
          <p className="days-for-further">{`Your order has been accepted and will be shipped within 3 days. For further information, contact this number `}</p>
          <p className="days-for-further">
            <b>+38 095 354 62 82</b>
          </p>
        </span>
      </div>
      <div className="traced-group">
        <img
          className="traced-icon1"
          alt=""
          src="/--20220926--0238-1-traced1.svg"
        />
        <b className="im-already-flying">I'm already flying to you</b>
      </div>
    </div>
  );
};

export default ENGEND;
