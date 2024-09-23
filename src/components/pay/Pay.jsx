import React, { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import PageData from "../pageData/PageData";
import CreditCardIcon from '@mui/icons-material/CreditCard'; 
import useCounter from "../../hooks/useCounter";
import Notification from '../panel/admins/Notification';

export default function Pay(props) {
  const [price, setPrice] = useState(props.price);
  const [discount, setDiscount] = useState(0);
  const [payable, setPayable] = useState(price);
  const [paymentMethod, setPaymentMethod] = useState(true);

  const [phoneInput, setPhoneInput] = useState("")
  const [emailInput, setEmailInput] = useState("")

  const [quantity, quantityPlus, quantityMinus] = useCounter(1)

  const [isphoneNotifeShow, setIsphoneNotifeShow] = useState(false)
  const [isSuccessModalShow, setIsSuccessModalShow] = useState(false)

  function cartToCartHandler(){
    setPaymentMethod(true)
  }

  function dargahHandler(){
    setPaymentMethod(false)
  }



  useEffect(() => {
    setPrice(props.price * quantity)
  },[quantity])

  useEffect(() => {
    setPayable(price)
  },[price])

  function submitHandler(){
    if(phoneInput.length < 10){
       setIsphoneNotifeShow(true)
       setTimeout(()=>{
         setIsphoneNotifeShow(false)
       },2000)
    }else{
      let newOrder = {product: props.title, price: price, phone: phoneInput, email: emailInput}
  
      fetch("http://localhost:3000/orders", {
        method: 'post',
        headers:{"content-type":"application/json"},
        body: JSON.stringify(newOrder)
      })
      .then(()=> {
        setIsSuccessModalShow(true)
        setTimeout(()=>{
          setIsSuccessModalShow(false)
        },2000)
      })

    }
  }

  return (
    <>
    <PageData isPay={true}/>
    <div className=" flex flex-col md:flex-row gap-10 dark:text-white dark:bg-slate-900 mt-7 w-[90%] sm:w-[70%] md:w-[650px] lg:w-[800px] xl:w-[80%] m-auto">
    {isphoneNotifeShow && <Notification title={"لطفا شماره همراه را به درستی وارد کنید"} color={"darkRed"}/>}
    {isSuccessModalShow && <Notification title={"پرداخت با موفقیت انجام شد"} color={"aqua"}/>}
      <div className="flex flex-col lg:h-[600px] pt-3 shadow-2xl border border-gray-400 dark:bg-slate-700 rounded-lg md:w-[50%] lg:w-[40%]">
        <div className="w-[90%] flex flex-col gap-3 m-auto">
          <h2>شماره همراه (اجباری)</h2>
          <input
           onChange={e => setPhoneInput(e.target.value)}
           value={phoneInput}
           type="text" 
           placeholder="مثلا 09907220089" 
           className=" w-full  px-5 py-1 rounded-lg dark:bg-slate-900 border-4 border-[#eee] dark:border-black"/>
        </div>
        <div className="flex flex-col gap-3 w-[90%] m-auto">
          <h2>ایمیل (اختیاری)</h2>
          <input
            onChange={e => setEmailInput(e.target.value)}
            value={emailInput}
            type="email"
            name=""
            id=""
            placeholder="haerisadra@gmail.com"
            className=" w-full  px-5 py-1 rounded-lg  dark:bg-slate-900 border-4 border-[#eee] dark:border-black"
            />
        </div>

        <div className=" w-[96%] rounded-xl m-auto mb-3 text-justify p-4 bg-[#224a5c] text-[#59c6ce;]">
          <p>
            <CheckIcon />
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </p>
          <p>
            <CheckIcon />
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </p>
          <p>
            <CheckIcon />
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </p>
        </div>
      </div>

      <div className="dark:bg-slate-700 shadow-2xl border border-gray-400 flex flex-col gap-6 p-3 mb-10 rounded-lg md:w-[50%] lg:w-[60%]">
        <div className=" flex justify-between p-3 items-center bg-[#eee] dark:bg-slate-900 rounded-xl">
          <img src={props.img} alt="" className=" w-20 rounded-lg"/>
          <h1>{props.title}</h1>
        </div>
        <div className=" flex justify-between p-3 items-center bg-[#eee] dark:bg-slate-900 rounded-xl">
          <h2>تعداد</h2>
          <div className=" flex justify-center items-center gap-2 cursor-pointer">
            <div className=" py-2 px-4 rounded-2xl border border-white" onClick={quantityMinus}>-</div>
            <div className="py-2 px-7 rounded-xl border border-white">{quantity}</div>
            <div className=" py-2 px-4 rounded-2xl border border-white cursor-pointer" onClick={quantityPlus}>+</div>
          </div>
        </div>
        <div className=" flex justify-between p-3 items-center bg-[#eee] dark:bg-slate-900 rounded-xl">
          <h2>جمع کل:</h2>
          <h2>{price} تومان</h2>
        </div>
        <div className=" flex justify-between p-3 items-center bg-[#eee] dark:bg-slate-900 rounded-xl">
          <h2>تخفیف</h2>
          <h2>{discount}</h2>
        </div>
        <div className=" flex justify-between p-3 items-center bg-[#eee] dark:bg-slate-900 rounded-xl">
          <h2>قابل پرداخت</h2>
          <h2>{payable} تومان</h2>
        </div>
        <div className=" flex justify-center gap-2 p-3 items-center ">
          <button className={paymentMethod ? ("w-36 border-2 border-blue-600 py-2 rounded-md") : ("w-36 border-2 border-gray-600 py-2 rounded-md")} onClick={cartToCartHandler}>پرداخت از درگاه</button>
          <p>یا</p>
          <button className={paymentMethod ?  ("w-36 border-2 border-gray-600 py-2 rounded-md") : ("w-36 border-2 border-blue-600 py-2 rounded-md")} onClick={dargahHandler}>کارت به کارت</button>
        </div>
        
        {
          paymentMethod && 
          <div className=" grid grid-cols-4">
          <img className=" cursor-pointer" src="/images/bitpay.png" alt="" />
          <img className=" cursor-pointer" src="/images/idpay.png" alt="" />
          <img className=" cursor-pointer" src="/images/mellat.png" alt="" />
          <img className=" cursor-pointer" src="/images/saderat.png" alt="" />
          <img className=" cursor-pointer" src="/images/saman.png" alt="" />
          <img className=" cursor-pointer" src="/images/zibal.png" alt="" />
        </div>
        }

        {
          !paymentMethod &&
          <div>
          <img src="/images/card2card.png" alt="" />
        </div>
        }
        <div className=" flex items-start gap-2">
        <input type="checkbox" name="" id=""  className=" w-7 h-7" />
  قوانین و ضوابط سایت را مطالعه کرده و می پذیرم. مشاهده قوانین و ضوابط  
        </div>
        <button onClick={() => submitHandler()} className=" block m-auto bg-[#5a8dee] text-white px-5 py-2 rounded-md">پرداخت و ثبت<CreditCardIcon/></button>
        
      </div>
    </div>
            </>
  );
}
