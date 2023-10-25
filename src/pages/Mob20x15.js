import { useCallback, useEffect } from "react";
import { Input, Checkbox } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./Mob20x15.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import {signature, fondyPayHandle, generateOrderReference} from "../components/fondy-pay"
import { CheckboxState } from "react";

const Mob20x15 = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [postOffice, setPostOffice] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(new Set());

  const onCheckboxChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setSelectedCheckboxes((prev) => new Set([...prev, value]));
    } else {
      setSelectedCheckboxes((prev) => {
        const newSet = new Set([...prev]);
        newSet.delete(value);
        return newSet;
      });
    }
  };

  const isFormValid = () =>
  name &&
  phone &&
  city &&
  postOffice &&
  quantity &&
  selectedCheckboxes.size > 0;


  const onVectorIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/mob-end");
  }, [navigate]);

  const sendEmail = (data) => {
    return new Promise((resolve, reject) => {
      const templateParams = {
        to_email: "pirinaukraina@gmail.com",
      name: data.name,
      phone: data.phone,
      city: data.city,
      branch: data.branch,
      quantity: data.quantity,
      option1: data.option1,
      option2: data.option2,
      option3: data.option3,
      option4: data.option4,
      };
  
      emailjs.send("service_cvq8w2h", "template_fbi8rqm", templateParams, "tH0zK0-FC76IFV8L4")
        .then(
          (response) => {
            console.log("Email sent successfully!", response.status, response.text);
            resolve();
          },
          (err) => {
            console.log("Failed to send email.", err);
            reject(err);
          }
        );
    });
  };

  const amount = 399;
  const productName = "PIR'INA 20X15";
  const orderReference = generateOrderReference();
  const formID = 'fondy-pay-11';
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!isFormValid()) return;
  
    const formData = {
      name: name + " PIR'INA 20X15",
      phone: phone,
      city: city,
      branch: postOffice,
      quantity: quantity,
    };
  
    selectedCheckboxes.forEach((value) => {
      formData[value] = true;
    });
  
    try {
      await sendEmail(formData); // Дождитесь отправки письма
      fondyPayHandle(formID);
    } catch (error) {
      console.error("An error occurred:", error);
      // Можно предпринять дополнительные действия в случае ошибки
    }
  };

  return (
    <div className="mob-20x15">
      <img
        className="mob-20x15-child"
        alt=""
        src="/vector-2.svg"
        onClick={onVectorIconClick}
      />
      <b className="b274">
        <span>Кошик</span>
        <span className="span43">{` `}</span>
        <span>{`> `}</span>
        <span className="span44">оформлення</span>
      </b>
      <div className="wrapper39">
        <b className="b275">Прізвище та імʼя</b>
      </div>
      <div className="wrapper40">
        <b className="b275">Мобільний телефон</b>
      </div>
      <div className="wrapper41">
        <b className="b275">Ваше місто</b>
      </div>
      <div className="wrapper43">
        <b className="b402">Кількість товару</b>
      </div>
      <div className="wrapper42">
        <b className="b275">Відділення пошти</b>
      </div>
      <b className="b280">Спосіб доставки</b>
      <img className="mob-20x15-item" alt="" src="/rectangle-52.svg" />
      <div className="wgroup-parent24">
        <div className="parent24">
          <div className="div235">
            <p className="p140">гривень</p>
            <p className="p140">{`за все про все `}</p>
          </div>
          <b className="b281">{ amount * quantity }</b>
        </div>
        <button
        className={`rectangle-parent46 ${isFormValid ? "" : "disabled"}`}
        type="submit"
        onClick={handleSubmit}
        disabled={!isFormValid()}
      >
      <div className="group-child61" />
      <b className="b282">ЗАМОВИТИ</b>
    </button>
        <div>
          <form style={{ display: 'none' }} id={formID} name={formID} method="POST" action="https://pay.fondy.eu/api/checkout/redirect/">
            <input type="text" name="server_callback_url" value="https://pirina.shop/end/"/>
            <input type="text" name="response_url" value="https://pirina.shop/end/"/>
            <input type="text" name="order_id" value={orderReference}/>
            <input type="text" name="order_desc" value={"Name:" + name + ` ${productName} ` + "Quantity:" + quantity}/>
            <input type="text" name="currency" value="UAH"/>
            <input type="text" name="amount" value={amount * quantity * 100}/>
            <input type="text" name="signature" value={signature(amount, quantity, name, productName, orderReference)}/>
            <input type="text" name="merchant_id" value="1511307"/>
            <input type="submit"/>
          </form>
        </div>
      </div>
      <form className="inputflushed-parent4">
        <Input
          className="inputflushed35"
          variant="flushed"
          width="291px"
          placeholder="Введіть ім'я"
          w="291px"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          className="inputflushed36"
          variant="flushed"
          width="291px"
          placeholder="Введіть номер телефону"
          w="291px"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <Input
          className="inputflushed37"
          variant="flushed"
          width="291px"
          placeholder="Введіть Ваше місто"
          w="291px"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <Input
        className="inputflushed39"
        variant="flushed"
        width="291px"
        placeholder="Введіть кількість товару"
        w="291px"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
        <Input
          className="inputflushed38"
          variant="flushed"
          width="291px"
          placeholder="Введіть номер відділення"
          w="291px"
          value={postOffice}
          onChange={(e) => setPostOffice(e.target.value)}
          required
        />
        <Checkbox
          className="checkboxdefault-with-label28"
          colorScheme="blue"
          iconColor="#fff"
          size="sm"
          spacing="1rem"
          value="option4"
          isChecked={selectedCheckboxes.has("option4")}
          onChange={onCheckboxChange}
        >
          Нова Пошта: за тарифами перевізника (1-3 дні)
        </Checkbox>
        <Checkbox
          className="checkboxdefault-with-label29"
          colorScheme="blue"
          iconColor="#fff"
          size="sm"
          spacing="1rem"
          value="option3"
          isChecked={selectedCheckboxes.has("option3")}
          onChange={onCheckboxChange}
        >
          Укрпошта: за тарифами перевізника (3-7 дні)
        </Checkbox>
        <Checkbox
          className="checkboxdefault-with-label30"
          colorScheme="blue"
          iconColor="#fff"
          size="sm"
          spacing="1rem"
          value="option2"
          isChecked={selectedCheckboxes.has("option2")}
          onChange={onCheckboxChange}
        >
          Міжнародна доставка: за тарифами перевізника (14-30 днів)
        </Checkbox>
        <Checkbox
          className="checkboxdefault-with-label31"
          colorScheme="blue"
          iconColor="#fff"
          size="sm"
          spacing="1rem"
          value="option1"
          isChecked={selectedCheckboxes.has("option1")}
          onChange={onCheckboxChange}
        >
          {" "}
          Не телефонуйте мені, я впевнений в замовленні
        </Checkbox>
      </form>
    </div>
  );
};

export default Mob20x15;
