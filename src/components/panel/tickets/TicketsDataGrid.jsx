import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import useFetch from "../../../hooks/useFetch";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FilterOption from "./selectBox/FilterOption";

export default function TicketsDataGrid(props) {
  const [ticketsDataFromDatabase] = useFetch("http://localhost:3000/tickets");
  const [urgencyInput, setUrgencyInput] = useState("همه")
  const [partInput, setPartInput] = useState("همه")
  const [conditionInput, setConditionInput] = useState("همه")
  const [filteredData, setFilteredData] = useState([]) 
  const [partOptions, setPartOptions] = useState(["همه", "فروش", "پشتیبانی", "سایر" ])
  const [urgencyOptions, setUrgencyOptions] = useState(["همه", "کم", "عادی", "زیاد" ])
  const [conditionOptions, setConditionOptions] = useState(["همه", "در انتظار", "پاسخ داده شده", "بسته شده" ])

  function filterTickets() {
    return ticketsDataFromDatabase.filter((item) => {
      const urgencyMatch = urgencyInput === "همه" || item.urgency === urgencyInput;
      const partMatch = partInput === "همه" || item.part === partInput;
      const conditionMatch = conditionInput === "همه" || item.condition === conditionInput;
      return urgencyMatch && partMatch && conditionMatch;
    });
  };

  useEffect(() => {
    setFilteredData(filterTickets());
  }, [ticketsDataFromDatabase, partInput, conditionInput, urgencyInput]);

  function deleteHandler(params){
    props.onRemove(params.id)
  }


  const columns = [
    { field: "id", headerName: "ID", width: 90, align: "right" },
    {
        field: "title",
        headerName: "عنوان تیکت",
        width: 150,
        editable: false,
        align: "right"
      },
    {
      field: "name",
      headerName: "نام",
      width: 150,
      editable: false,
      align: "right"
    },
    {
      field: "phone",
      headerName: "شماره همراه",
      width: 150,
      editable: false,
      align: "right"
    },
      {
        field: "part",
        headerName: "بخش",
        width: 150,
        editable: false,
        align: "right"
      },
      {
        field: "urgency",
        headerName: "فوریت",
        width: 150,
        editable: false,
        align: "right"
      },
      {
        field: "condition",
        headerName: "وضعیت",
        width: 150,
        editable: false,
        align: "right"
      },
  
    {
      field: "operation",
      headerName: "عملیات",
      width: 250,
      editable: false,
      sortable: false,
      align: "right",
      renderCell: (params) => (
        <div className=" flex gap-3">
          <Link to={`/ticket/${params.id}`} className=" bg-sky-500 rounded-lg px-3 text-white" ><RemoveRedEyeOutlinedIcon/> مشاهده</Link>
          <button onClick={()=>deleteHandler(params)} className=" w-12 h-12 rounded-full text-white bg-red-600 flex justify-center items-center"><DeleteOutlineOutlinedIcon/></button>
        </div>
      )
    },
  ];

  return (
<>
    <div className=" mt-4 w-full flex child:w-full child:flex child:flex-col child:justify-center child:items-center child:text-lg child:gap-2">
        <div>
            <h1>بخش</h1>
        <select value={partInput} onChange={(e)=>setPartInput(e.target.value)} className=' border border-gray-500 py-2 rounded-lg w-[80%] block m-auto' >
        {
           partOptions.map((option) => (<FilterOption option={option}/>))
        }
        </select>
        </div>

        <div>
            <h1>فوریت</h1>
        <select value={urgencyInput} onChange={(e)=>{setUrgencyInput(e.target.value)}} className=' border border-gray-500 py-2 rounded-lg w-[80%] block m-auto' >
        {
           urgencyOptions.map((option) => (<FilterOption option={option}/>))
        }
        </select>
        </div>

        <div>
            <h1>وضعیت</h1>
        <select value={conditionInput} onChange={(e)=>setConditionInput(e.target.value)} className=' border border-gray-500 py-2 rounded-lg w-[80%] block m-auto' >
        {
           conditionOptions.map((option) => (<FilterOption option={option}/>))
        }
        </select>
        </div>
    </div>
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid 
        
        rows={filteredData}
        columns={columns}
        initialState={{
            pagination: {
                paginationModel: {
                    pageSize: 4,
                },
            },
        }}
        pageSizeOptions={[2]}
        checkboxSelection
        disableRowSelectionOnClick
        />
    </Box>
</>
  );
}
