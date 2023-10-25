import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MobEnd.css";

const MobEnd = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="mob-end">
      <img className="a0093-icon2" alt="" src="/329a0093@2x.png" />
      <img
        className="mob-end-child"
        alt=""
        src="/vector-2.svg"
        onClick={onVectorIconClick}
      />
      <div className="traced-container">
        <img
          className="traced-icon2"
          alt=""
          src="/--20220926--0238-1-traced2.svg"
        />
        <b className="b335">Вже лечу до тебе</b>
      </div>
      <div className="div260">
        Ваше замовлення прийняте і буде відправлено протягом 3 днів.
      </div>
      <div className="div261">
        <p className="p166">{`Якщо у вас залишились питання, звертайтеся за номером `}</p>
        <p className="p166">
          <b>{`+38 095 354 62 82 `}</b>
          <span className="span63">{` `}</span>
        </p>
      </div>
      <button className="rectangle-parent63" onClick={onGroupButtonClick}>
        <div className="group-child80" />
        <b className="b336">ЗАКРИТИ</b>
      </button>
    </div>
  );
};

export default MobEnd;
