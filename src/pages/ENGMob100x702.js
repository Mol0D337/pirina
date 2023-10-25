import { useCallback, useEffect } from "react";
import { Input, Checkbox } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./ENGMob100x702.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import {signature, fondyPayHandle, generateOrderReference} from "../components/fondy-pay"
import { CheckboxState } from "react";

const ENGMob100x702 = () => {
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
    navigate("/eng-landing");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/ENG-mob-end");
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
  const formID = 'fondy-pay-8';
  
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
        <span className="span44">ordering</span>
      </b>
      <div className="wrapper39">
        <b className="b275">Full name</b>
      </div>
      <div className="wrapper40">
        <b className="b275">Phone number</b>
      </div>
      <div className="wrapper41">
        <b className="b275">Your city</b>
      </div>
      <div className="wrapper43">
        <b className="b402">Quantity</b>
      </div>
      <div className="wrapper42">
        <b className="b275">Post office</b>
      </div>
      <b className="b280">Delivery method</b>
      <img className="mob-20x15-item" alt="" src="/rectangle-52.svg" />
      <div className="wgroup-parent24">
        <div className="parent24">
          <div className="div235">
            <p className="p140">uah </p>
            <p className="p140">{`get it all!`}</p>
          </div>
          <b className="gb281">{ amount * quantity }</b>
        </div>
        <button
        className={`rectangle-parent46 ${isFormValid ? "" : "disabled"}`}
        type="submit"
        onClick={handleSubmit}
        disabled={!isFormValid()}
      >
      <div className="group-child61" />
      <b className="b282">ORDER</b>
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
          placeholder="Input name..."
          w="291px"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          className="inputflushed36"
          variant="flushed"
          width="291px"
          placeholder="Input number..."
          w="291px"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <Input
          className="inputflushed37"
          variant="flushed"
          width="291px"
          placeholder="Input city..."
          w="291px"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <Input
        className="inputflushed39"
        variant="flushed"
        width="291px"
        placeholder="Input quantity"
        w="291px"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
        <Input
          className="inputflushed38"
          variant="flushed"
          width="291px"
          placeholder="Input № of office"
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
          Nova Poshta: according to the carrier's rates (1-3 days)
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
          Ukrposhta: according to the carrier's rates (3-7 days)
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
          International delivery: according to the carrier's rates (14-30 days)
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
          No need to call I trust you
        </Checkbox>
      </form>
    </div>
  );
};

export default ENGMob100x702;
