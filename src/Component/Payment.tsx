import React from "react";
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { stringify } from "querystring";

const privateKey = 'CD229682D3297390B9F66FF4020B758F4A5E625AF4992E5D75D311D6458B38E2'
const PaymentButton = () => {

   const handleClickPayment = async () => {
      let invoiceNo = Math.random().toString().slice(3,13)
      let value = {
         "merchantID": "JT04",
         "invoiceNo": invoiceNo,
         "description": "",
         "amount": 50.00,
         "currencyCode": "THB",
         "frontendReturnUrl": "http://localhost:3003/2c2p/",
         "paymentChannel": ["CC"]
      }
      let payload = jwt.sign(value, privateKey)
      let header: any = { "Content-Type": "application/json" }
      let { data } = await axios.post('https://sandbox-pgw.2c2p.com/payment/4.1/PaymentToken', 
         { payload }, header ) 
      console.log(data);    
      let { webPaymentUrl: string } = jwt.decode(data.payload)
      console.log(res); 
      window.location.href = String(res?.webPaymentUrl) ;
      
   }

   return (
      <div onClick={handleClickPayment}>
         Payment Button 50 THB
      </div>
   )
}

export default PaymentButton