import { useCallback, useEffect } from "react";
import { Input, Checkbox } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./X50.css";
import { useState } from "react";
import PortalPopup from "./PortalPopup";
import Final from "./final";
import emailjs from "emailjs-com";
import {signature, fondyPayHandle, generateOrderReference} from "./fondy-pay"
import { CheckboxState } from "react";




const X50 = ({ onClose }) => {
    const navigate = useNavigate();
    const [isX50Open, setX50Open] = useState(false);
    const [isFinalOpen, setFinalOpen] = useState(false);
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

  const openX50 = useCallback(() => {
    setX50Open(true);
  }, []);

  const closeX50 = useCallback(() => {
    setX50Open(false);
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onVectorIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/Users/vitaliihrinko/Downloads/PIRINA FINAL(1)/src/pages/END.js");
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

  const amount = 999;
  const productName = "PIR'INA 70X50";
  const orderReference = generateOrderReference();
  const formID = 'fondy-pay-6';
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!isFormValid()) return;
  
    const formData = {
      name: name + " PIR'INA 70X50",
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
    <>
    <div className="o10070" data-animate-on-scroll>
      <img className="o10070-child" alt="" src="/rectangle-514.svg" />
      <img className="o10070-item" alt="" src="/rectangle-528.svg" />
      <img
        className="x501-inner"
        alt=""
        src="/arr.png"
        onClick={onClose}
      />
      <div className="parent">
        <b className="b72">Прізвище та імʼя</b>
        <b className="b73">Введіть ім’я...</b>
      </div>
      <div className="group">
        <b className="b72">Мобільний телефон</b>
        <b className="b75">Введіть номер телефону</b>
      </div>
      <b className="ovb76">
        <span>Кошик</span>
        <span className="span">{` `}</span>
        <span>{`> `}</span>
        <span className="span1">оформлення</span>
      </b>
      <div className="group-parent">
        <div className="group-div">
          <b className="b77">Нова пошта</b>
          <div className="frame">
            <div className="div86">за тарифами перевізника (1-3 дні)</div>
          </div>
        </div>
        <div className="parent1">
          <b className="b78">Укрпошта</b>
          <div className="frame">
            <div className="div86">за тарифами перевізника (3-7 дні)</div>
          </div>
        </div>
        <div className="parent2">
          <b className="b79">Міжнародна доставка</b>
          <div className="frame">
            <div className="div86">за тарифами перевізника (14-30 днів)</div>
          </div>
        </div>
      </div>
      <div className="parent3">
        <b className="b80">Спосіб доставки</b>
        <b className="b81">Ваше місто</b>
        <b className="b82">Введіть Ваше місто</b>
      </div>
      <div className="parent4">
        <b className="b72">Відділення пошти</b>
        <b className="b84">Введіть номер відділення</b>
      </div>
      <div className="group-container">
        <div className="parent5">
          <div className="div89">
            <span className="txt8">
              <p className="p66">гривень</p>
              <p className="p66">{`за ${quantity} подушку`}</p>
            </span>
          </div>
          <b className="b86">{ amount * quantity }</b>
        </div>
      </div>
      <form className="inputflushed-parent" onSubmit={handleSubmit}>
        <Input
          className="inputflushed"
          variant="flushed"
          width="527px"
          placeholder="Введіть ім'я"
          w="527px"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          className="inputflushed1"
          variant="flushed"
          width="527px"
          placeholder="Введіть номер телефону"
          w="527px"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <Input
          className="inputflushed2"
          variant="flushed"
          width="527px"
          placeholder="Введіть Ваше місто"
          w="527px"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <Input
          className="inputflushed3"
          variant="flushed"
          width="527px"
          placeholder="Введіть номер відділення"
          w="527px"
          value={postOffice}
          onChange={(e) => setPostOffice(e.target.value)}
          required
        />
        <Checkbox
      className="checkboxdefault-with-label"
      colorScheme="blue"
      iconColor="#fff"
      size="lg"
      spacing="1rem"
      value="option1"
      isChecked={selectedCheckboxes.has("option1")}
      onChange={onCheckboxChange}
    >
          {" "}
          Не телефонуйте мені, я впевнений в замовленні
        </Checkbox>
        <Checkbox
          className="checkboxdefault-with-label1"
          colorScheme="blue"
          iconColor="#fff"
          size="lg"
          spacing="1rem"
          value="option2"
          isChecked={selectedCheckboxes.has("option2")}
          onChange={onCheckboxChange}
        >
          Міжнародна доставка (14-30 днів)
        </Checkbox>
        <Checkbox
          className="checkboxdefault-with-label2"
          colorScheme="blue"
          iconColor="#fff"
          size="lg"
          spacing="1rem"
          value="option3"
          isChecked={selectedCheckboxes.has("option3")}
          onChange={onCheckboxChange}
        >
          Укрпошта (3-7 дні)
        </Checkbox>
        <Checkbox
          className="checkboxdefault-with-label3"
          colorScheme="blue"
          iconColor="#fff"
          size="lg"
          spacing="1rem"
          value="option4"
          isChecked={selectedCheckboxes.has("option4")}
          onChange={onCheckboxChange}
        >
          Нова Пошта (1-3 дні)
        </Checkbox>
        <div className="vgroup-parent1">
          <div className="vparent6">
            <b className="vb87">Кількість</b>
          </div>
          <Input
            className="vinputflushed4"
            variant="flushed"
            width="269px"
            size="md"
            type="number"
            placeholder="Введіть кількість"
            w="269px"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
      </form>
      <button
        className={`rectangle-group ${isFormValid ? "" : "disabled"}`}
        type="submit"
        onClick={handleSubmit}
        disabled={!isFormValid()}
      >
        <div className="group-item" />
        <b className="b88">ЗАМОВИТИ</b>
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
    {isX50Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeX50}
        >
          <Final onClose={closeX50} />
        </PortalPopup>
      )}
    </>
  );
};

export default X50;
