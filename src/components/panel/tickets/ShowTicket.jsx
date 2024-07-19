import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import SideBar from "../side-bar/SideBar";
import Adress from "../adress/Adress";
import CopyBTN from "./CopyBTN";
import DoNotDisturbOutlinedIcon from "@mui/icons-material/DoNotDisturbOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

export default function ShowTicket() {
  const params = useParams();
  const [ticket] = useFetch(`http://localhost:3000/tickets/${params.id}`);
  const navigate = useNavigate()

  function closeHandler(id){
    fetch(`http://localhost:3000/tickets/${id}`,{
      method:"PUT",
      headers:{"content-type":'application/json'},
      body: JSON.stringify({"id": "edb9",
      ticketID: ticket.ticketID,
      name: ticket.name,
      email: ticket.email,
      phone: ticket.phone,
      urgency: ticket.urgency,
      part: ticket.part,
      title: ticket.title,
      message: ticket.message,
      condition: "بسته شده"})
    })
    .then(()=>navigate("/tickets"))
  }

  function answerHandler(id){
    fetch(`http://localhost:3000/tickets/${id}`,{
      method:"PUT",
      headers:{"content-type":'application/json'},
      body: JSON.stringify({"id": "edb9",
      ticketID: ticket.ticketID,
      name: ticket.name,
      email: ticket.email,
      phone: ticket.phone,
      urgency: ticket.urgency,
      part: ticket.part,
      title: ticket.title,
      message: ticket.message,
      condition: "پاسخ داده شده"})
    })
    .then(()=>navigate("/tickets"))
  }

  return (
    <div dir="rtl" className="flex bg-[#f5f5f5]">
      <SideBar />

      <div className="relative w-full px-10">
        <div className=" mt-9">
          <Adress adress={"پیشخوان > تیکت"} />
        </div>
        <div
          style={{ boxShadow: "0 0 8px 0px #c9c9c9" }}
          className="mb-10 flex flex-col justify-center items-center gap-10 mt-9 bg-white rounded-lg"
        >
          <div
            style={{ boxShadow: "0 0 8px 0px #c9c9c9" }}
            className="  flex flex-col gap-10 white w-[500px] h-[600px] my-8 rounded-lg text-center justify-center items-center"
          >
            <h1 className=" text-xl">{ticket.name}</h1>
            <div className="flex flex-col gap-4 border rounded-2xl pt-3 ">
              <h1>اطلاعات تماس</h1>
              <div className="flex flex-col gap-4  p-7">
                <CopyBTN text={ticket.email} />
                <div className=" bg-slate-300 w-[90%] h-[1px] m-auto"></div>
                <CopyBTN text={ticket.phone} />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <h1 className=" text-xl">
                  <span className="text-lg "> عنوان پیام: </span>
                  {ticket.title}
                </h1>
              </div>
              <div className=" bg-slate-300 w-[90%] h-[1px] m-auto"></div>
              <div>
                <h1 className=" text-xl mb-3">متن پیام:</h1>
                <div className=" bg-slate-100 py-4 px-10 rounded-md">
                  <p className=" text-justify">{ticket.message}</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" mb-10 flex gap-4 justify-center items-center child:text-white child:px-4 child:py-3 child:rounded-lg">
            <button onClick={() => closeHandler(params.id)} className=" bg-red-400 hover:bg-red-300 transition-colors duration-75">
              بستن تیکت <DoNotDisturbOutlinedIcon />
            </button>
            <button onClick={() => answerHandler(params.id)} className=" bg-cyan-500 hover:bg-cyan-400 transition-colors duration-75">
              پاسخ داده شده <CheckOutlinedIcon />
            </button>
            <Link to={"/tickets"} className=" bg-orange-400 hover:bg-orange-300 transition-colors duration-75">
              بازگشت <ArrowBackOutlinedIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
