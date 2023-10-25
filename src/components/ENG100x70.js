import { useCallback, useEffect } from "react";
import { Input, Checkbox } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./ENG100x70.css";
import { useState } from "react";
import PortalPopup from "./PortalPopup";
import Engfinal from "./Engfinal"
import emailjs from "emailjs-com";
import {signature, fondyPayHandle, generateOrderReference} from "./fondy-pay"
import { CheckboxState } from "react";


const ENG100x70 = ({ onClose }) => {
    const navigate = useNavigate();
    const [isENG100x70Open, setENG100x70Open] = useState(false);
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

  const openENG100x70 = useCallback(() => {
    setENG100x70Open(true);
  }, []);

  const closeENG100x70 = useCallback(() => {
    setENG100x70Open(false);
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

  const amount = 1999;
  const productName = "PIR'INA 100X70";
  const orderReference = generateOrderReference();
  const formID = 'fondy-pay-2';
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!isFormValid()) return;
  
    const formData = {
      name: name + " PIR'INA 100X70",
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
        className="o10070-inner"
        alt=""
        src="/arr.png"
        onClick={onClose}
      />
      <div className="parent">
        <b className="b72">Full name</b>
        <b className="b73">Введіть ім’я...</b>
      </div>
      <div className="group">
        <b className="b72">Phone number</b>
        <b className="b75">Введіть номер телефону</b>
      </div>
      <b className="ovb76">
        <span>basket </span>
        <span>{`> `}</span>
        <span className="span1">ordering</span>
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
        <b className="b80">Delivery method</b>
        <b className="b81">Your city</b>
        <b className="b82">Введіть Ваше місто</b>
      </div>
      <div className="parent4">
        <b className="b72">Post office</b>
        <b className="b84">Введіть номер відділення</b>
      </div>
      <div className="group-container">
        <div className="parent5">
          <div className="div89">
            <span className="txt8">
              <p className="p66">uah</p>
              <p className="p66">{`for ${quantity} pillow! `}</p>
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
          placeholder="Input name..."
          w="527px"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          className="inputflushed1"
          variant="flushed"
          width="527px"
          placeholder="Input number..."
          w="527px"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <Input
          className="inputflushed2"
          variant="flushed"
          width="527px"
          placeholder="Input city..."
          w="527px"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <Input
          className="inputflushed3"
          variant="flushed"
          width="527px"
          placeholder="Input post office..."
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
          No need to call I trust you
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
          International delivery (14-30 days)
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
         Ukrposhta (3-7 days)
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
          Nova Poshta (1-3 days)
        </Checkbox>
        <div className="vgroup-parent1">
          <div className="vparent6">
            <b className="vb87">Quantity</b>
          </div>
          <Input
            className="vinputflushed4"
            variant="flushed"
            width="269px"
            size="md"
            type="number"
            placeholder="Input quantity"
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
        <b className="b88">ORDER</b>
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
    {isENG100x70Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeENG100x70}
        >
          <Engfinal onClose={closeENG100x70} />
        </PortalPopup>
      )}
    </>
  );
};

export default ENG100x70;
