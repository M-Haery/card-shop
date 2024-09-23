// import React, { useEffect } from "react";
// import SideBar from "../side-bar/SideBar";
// import Adress from "../adress/Adress";
// import { useState } from "react";
// import SelectIMG from "./SelectIMG";
// import { Link } from "react-router-dom";
// import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
// import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";
// import { useNavigate } from "react-router-dom";
// import Notification from "../admins/Notification";
// import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
// import { useParams } from 'react-router-dom'
// import useFetch from '../../../hooks/useFetch'
// import ModeEditOutlineSharpIcon from '@mui/icons-material/ModeEditOutlineSharp';

// export default function EditCategory() {
//     const params = useParams()
//     const [category] = useFetch(`http://localhost:3000/posts/${params.id}`)

//     const [adresses, setAdresses] = useState([
//         "/images/googleplay.jpg",
//         "/images/itunes.jpg",
//         "/images/kerio.jpg",
//         "/images/nod.jpg",
//         "/images/ping.png",
//         "/images/spotify.png",
//         "/images/steam.png",
//         "/images/xbox.jpg",
//       ]);
    
    
//       const [adress, setAdress] = useState(category.img);
//       const [FaName, setFaName] = useState(category.faName);
//       const [EnName, setEnName] = useState(category.enName);
    
//       const [isSuccessModalShow, setIsSuccessModalShow] = useState(false);
//       const [isFaNameModalShow, setIsFaNameModalShow] = useState(false);
//       const [isEnNameModalShow, setIsEnNameModalShow] = useState(false);
//       const [isIMGModalShow, setIsIMGModalShow] = useState(false);
    
//       function imageSelectHandler(adress) {
//         setAdress(adress);
//       }
    
//       function submitHandler() {
//         if (adress.length == 0) {
//           setIsIMGModalShow(true);
//           setTimeout(() => {
//             setIsIMGModalShow(false);
//           }, 2000);
//         } else if (FaName.length == 0) {
//           setIsFaNameModalShow(true);
//           setTimeout(() => {
//             setIsFaNameModalShow(false);
//           }, 2000);
//         } else if (EnName.length == 0) {
//           setIsEnNameModalShow(true);
//           setTimeout(() => {
//             setIsEnNameModalShow(false);
//           }, 2000);
//         } else {
//           fetch(`http://localhost:3000/posts`, {
//             method: "post",
//             headers: { "content-type": "application/json" },
//             body: JSON.stringify({
    
//               faName: FaName,
//               enName: EnName,
//               img: adress,
//               isShow: true,
//               pricing: [],
//             }),
//           }).then(() => {
//             setIsSuccessModalShow(true);
//             setTimeout(() => {
//               setIsSuccessModalShow(false);
//             }, 2000);
//           });
//         }
//       }
    
//       return (
//         <div dir="rtl" className="flex bg-[#f5f5f5]">
//           <SideBar />
    
//           <div className="relative w-full px-10">
//             <div className=" mt-9">
//               <Adress adress={"پیشخوان >  دسته بندی جدید"} />
//             </div>
//             <div
//               style={{ boxShadow: "0 0 8px 0px #c9c9c9" }}
//               className=" flex flex-col gap-10 mt-9 bg-white rounded-lg p-5"
//             >
//               <div className=' text-lg'>
//               <h1 className=' mb-2'><ModeEditOutlineSharpIcon/> ویرایش دسته</h1>
//               <div className=' bg-slate-300 w-full h-[1px] m-auto'></div>
//              </div>
//               {isSuccessModalShow && (
//                 <Notification color={"aqua"} title={"دسته جدید با موفقیت ثبت شد"} />
//               )}
//               {isFaNameModalShow && (
//                 <Notification color={"darkRed"} title={"نام فارسی را وارد کنید"} />
//               )}
//               {isEnNameModalShow && (
//                 <Notification
//                   color={"darkRed"}
//                   title={"نام انگلیسی را وارد کنید"}
//                 />
//               )}
//               {isIMGModalShow && (
//                 <Notification color={"darkRed"} title={"یک تصویر را انتخاب کنید"} />
//               )}
//               <div className=" flex gap-4 justify-center">
//                 {adresses.map((item) => (
//                   <SelectIMG
//                     adress={item}
//                     isSelected={adress === item}
//                     onSelect={imageSelectHandler}
//                   />
//                 ))}
//               </div>
//               <div className=" flex gap-4 w-full child:w-full child:flex child:flex-col child:gap-3">
//                 <div>
//                   <h2>نام دسته به فارسی</h2>
//                   <input
//                     value={FaName}
//                     className=" w-full py-2 border rounded-md"
//                     type="text"
//                     onChange={(e) => setFaName(e.target.value)}
//                   />
//                 </div>
//                 <div>
//                   <h2>نام دسته به انگلیسی</h2>
//                   <input
//                     value={EnName}
//                     className=" w-full py-2 border rounded-md"
//                     type="text"
//                     onChange={(e) => setEnName(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="flex justify-evenly w-full mt-6 child:text-center child:w-28 child:py-2 child:rounded-md child:text-white">
//                 <button
//                   onClick={() => submitHandler()}
//                   className=" bg-blue-500 hover:bg-blue-400 transition-all duration-75"
//                 >
//                   <BeenhereOutlinedIcon /> ذخیره
//                 </button>
//                 <Link
//                   to={"/productsCategorization"}
//                   className=" bg-orange-500 hover:bg-orange-300 transition-all duration-75"
//                 >
//                   <CancelPresentationOutlinedIcon /> بازگشت
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
// }
