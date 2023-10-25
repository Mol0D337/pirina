import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./END.css";
import "./MobEnd.css";

const END = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Определение по ширине окна, 768 - пример

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Обновление при изменении размера окна
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onVectorIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return isMobile ? (
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
      </div>
      <div className="div260i">
      <b className="b2">Вже лечу до тебе</b>
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
  ) : (
    <div className="end">
      <img className="end-child" alt="" src="/rectangle-514.svg" />
      <img className="a0093-icon3" alt="" src="/329a00931@2x.png" />
      <img
        className="end-item"
        alt=""
        src="/vector-21.svg"
        onClick={onVectorIconClick}
      />
      <div className="div277">
        <span className="txt41">
          <p className="p184">
            Ваше замовлення прийняте і буде відправлено протягом 3 днів. Якщо у вас залишились питання, звертайтеся за номером
          </p>
        </span>
      </div>
      <div className="div278">
        <span className="txt41">
          <p className="p184">
            <b>{`+38 095 354 62 82 `}</b>
            <span className="span76">{` `}</span>
          </p>
        </span>
      </div>
      <div className="traced-parent1">
        <img
          className="traced-icon3"
          alt=""
          src="/--20220926--0238-1-traced3.svg"
        />
        <b className="b395">Вже лечу до тебе</b>
      </div>
    </div>
  );
};

export default END;
