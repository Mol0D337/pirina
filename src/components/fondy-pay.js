import CryptoJS from "crypto-js";

export const signature = (amount, quantity, name, productName, orderReference) =>
  CryptoJS.SHA1(
    `supop5skxjDy6yLStctvj8knp4oPFj4I|${amount * quantity * 100}|UAH|1511307|Name:${name} ${productName} Quantity:${quantity}|${orderReference}|https://pirina.shop/end/|https://pirina.shop/end/`
  ).toString();

export const generateOrderReference = () =>  `PIRINA:xxxyxxyxyxx`.replace(/[xy]/g, function(c) {
  const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16).toUpperCase();
});

export const fondyPayHandle = (formID) => {
  const form = document.getElementById(formID);
  const Timeout = setTimeout(() => {
    clearTimeout(Timeout);
    form.submit();
  }, 10);
}