import { useCallback } from "react";
import { Input, Checkbox } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./Mob20x152.css";

const Mob20x152 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/mob-end");
  }, [navigate]);

  return (
    <div className="mob-20x152">
      <img
        className="mob-20x15-child3"
        alt=""
        src="/vector-2.svg"
        onClick={onVectorIconClick}
      />
      <b className="b396">
        <span>Кошик</span>
        <span className="span77">{` `}</span>
        <span>{`> `}</span>
        <span className="span78">оформлення</span>
        <span>{` >`}</span>
        <span className="span77">{` `}</span>
        <span>{`оплата `}</span>
      </b>
      <img className="mob-20x15-child4" alt="" src="/rectangle-52.svg" />
      <div className="frame-parent10">
        <div className="wrapper76">
          <b className="b397">-</b>
        </div>
        <div className="div279">
          <span className="txt43">
            <span className="span80">{`1 `}</span>шт
          </span>
        </div>
        <div className="wrapper77">
          <b className="b397">+</b>
        </div>
      </div>
      <div className="parent52">
        <div className="div280">
          <p className="p187">гривень</p>
          <p className="p187">{`за все про все `}</p>
        </div>
        <b className="b399">399</b>
      </div>
      <button className="rectangle-parent71" onClick={onGroupButtonClick}>
        <div className="group-child88" />
        <b className="b400">ЗАМОВИТИ</b>
      </button>
      <div className="wrapper78">
        <b className="b401">Прізвище та імʼя</b>
      </div>
      <div className="wrapper79">
        <b className="b401">Мобільний телефон</b>
      </div>
      <div className="wrapper80">
        <b className="b401">Ваше місто</b>
      </div>
      <div className="wrapper82">
        <b className="b402">Кількість товару</b>
      </div>
      <div className="wrapper81">
        <b className="b401">Відділення пошти</b>
      </div>
      <b className="b405">Спосіб доставки</b>
      <Input
        className="inputflushed60"
        variant="flushed"
        width="291px"
        placeholder="Введіть ім'я"
        w="291px"
      />
      <Input
        className="inputflushed61"
        variant="flushed"
        width="291px"
        placeholder="Введіть номер телефону"
        w="291px"
      />
      <Input
        className="inputflushed62"
        variant="flushed"
        width="291px"
        placeholder="Введіть Ваше місто"
        w="291px"
      />
      <Input
        className="inputflushed64"
        variant="flushed"
        width="291px"
        placeholder="Введіть кількість товару"
        w="291px"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <Checkbox
        className="checkboxdefault-with-label48"
        colorScheme="blue"
        iconColor="#fff"
        size="sm"
        spacing="1rem"
      >
        Нова Пошта: за тарифами перевізника (1-3 дні)
      </Checkbox>
      <Checkbox
        className="checkboxdefault-with-label49"
        colorScheme="blue"
        iconColor="#fff"
        size="sm"
        spacing="1rem"
      >
        Укрпошта: за тарифами перевізника (3-7 дні)
      </Checkbox>
      <Checkbox
        className="checkboxdefault-with-label50"
        colorScheme="blue"
        iconColor="#fff"
        size="sm"
        spacing="1rem"
      >
        Міжнародна доставка: за тарифами перевізника (14-30 днів)
      </Checkbox>
      <Input
        className="inputflushed63"
        variant="flushed"
        width="291px"
        placeholder="Введіть номер відділення"
        w="291px"
      />
      <Checkbox
        className="checkboxdefault-with-label51"
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

export default Mob20x152;
