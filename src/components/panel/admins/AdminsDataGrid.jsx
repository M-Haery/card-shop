import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import useFetch from "../../../hooks/useFetch";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { textAlign } from "@mui/system";
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';



export default function AdminsDataGrid(props) {
  const [adminData] = useFetch("http://localhost:3000/admins");

  function deleteHandler(params){
    props.onRemove(params.id)
  }

  const columns = [
    { field: "id", headerName: "ID", width: 90, align: "right" },
    {
      field: "name",
      headerName: "نام",
      width: 350,
      editable: false,
      align: "right"
    },
  
    {
      field: "userName",
      headerName: "نام کاربری",
      width:350,
      editable: false,
      align: "right"
    },
  
    {
      field: "operation",
      headerName: "عملیات",
      width:350,
      editable: false,
      sortable: false,
      align: "right",
      renderCell: (params) => (
        <div className=" flex gap-3">
          <Link to={`/userPass/${params.id}`} className=" bg-sky-500 rounded-lg px-3 text-white" ><VpnKeyOutlinedIcon/> تغییر رمز عبور</Link>
          <Link to={`/userInfo/${params.id}`} className=" bg-orange-400 rounded-lg px-3 text-white" ><EditOutlinedIcon/> ویرایش</Link>
          <button onClick={() => deleteHandler(params)} className=" w-12 h-12 rounded-full text-white bg-red-600 flex justify-center items-center"><DeleteOutlineOutlinedIcon/></button>
        </div>
      )
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid 
        
        rows={adminData}
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
  );
}
