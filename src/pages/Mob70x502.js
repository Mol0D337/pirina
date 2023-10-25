import { useCallback } from "react";
import { Input, Checkbox } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./Mob70x502.css";

const Mob70x502 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/mob-end");
  }, [navigate]);

  return (
    <div className="mob-70x502">
      <img
        className="mob-70x50-child3"
        alt=""
        src="/vector-2.svg"
        onClick={onVectorIconClick}
      />
      <b className="b406">
        <span>Кошик</span>
        <span className="span81">{` `}</span>
        <span>{`> `}</span>
        <span className="span82">оформлення</span>
        <span>{` >`}</span>
        <span className="span81">{` `}</span>
        <span>{`оплата `}</span>
      </b>
      <img className="mob-70x50-child4" alt="" src="/rectangle-52.svg" />
      <div className="frame-parent11">
        <div className="wrapper82">
          <b className="b407">-</b>
        </div>
        <div className="div281">
          <span className="txt44">
            <span className="span84">{`1 `}</span>шт
          </span>
        </div>
        <div className="wrapper83">
          <b className="b407">+</b>
        </div>
      </div>
      <div className="parent53">
        <div className="div282">
          <p className="p189">гривень</p>
          <p className="p189">{`за все про все `}</p>
        </div>
        <b className="b409">999</b>
      </div>
      <button className="rectangle-parent72" onClick={onGroupButtonClick}>
        <div className="group-child89" />
        <b className="b410">ЗАМОВИТИ</b>
      </button>
      <div className="wrapper84">
        <b className="b411">Прізвище та імʼя</b>
      </div>
      <div className="wrapper85">
        <b className="b411">Мобільний телефон</b>
      </div>
      <div className="wrapper86">
        <b className="b411">Ваше місто</b>
      </div>
      <div className="wrapper87">
        <b className="b411">Відділення пошти</b>
      </div>
      <b className="b415">Спосіб доставки</b>
      <Input
        className="inputflushed64"
        variant="flushed"
        width="291px"
        placeholder="Введіть ім'я"
        w="291px"
      />
      <Input
        className="inputflushed65"
        variant="flushed"
        width="291px"
        placeholder="Введіть номер телефону"
        w="291px"
      />
      <Input
        className="inputflushed66"
        variant="flushed"
        width="291px"
        placeholder="Введіть Ваше місто"
        w="291px"
      />
      <Checkbox
        className="checkboxdefault-with-label52"
        colorScheme="blue"
        iconColor="#fff"
        size="sm"
        spacing="1rem"
      >
        Нова Пошта: за тарифами перевізника (1-3 дні)
      </Checkbox>
      <Checkbox
        className="checkboxdefault-with-label53"
        colorScheme="blue"
        iconColor="#fff"
        size="sm"
        spacing="1rem"
      >
        Укрпошта: за тарифами перевізника (3-7 дні)
      </Checkbox>
      <Checkbox
        className="checkboxdefault-with-label54"
        colorScheme="blue"
        iconColor="#fff"
        size="sm"
        spacing="1rem"
      >
        Міжнародна доставка: за тарифами перевізника (14-30 днів)
      </Checkbox>
      <Input
        className="inputflushed67"
        variant="flushed"
        width="291px"
        placeholder="Введіть номер відділення"
        w="291px"
      />
      <Checkbox
        className="checkboxdefault-with-label55"
        colorScheme="blue"
        iconColor="#fff"
        size="sm"
        spacing="1rem"
      >
        {" "}
        Не телефонуйте мені, я впевнений в замовленні
      </Checkbox>
    </div>
  );
};

export default Mob70x502;
