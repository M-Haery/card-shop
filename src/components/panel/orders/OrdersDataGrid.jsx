import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import useFetch from "../../../hooks/useFetch";


export default function OrdersDataGrid() {
    const [ordersData] = useFetch("http://localhost:3000/orders");
  
    const columns = [
      { field: "id", headerName: "ID", width: 90, align: "right" },
      {
        field: "product",
        headerName: "محصول",
        width: 300,
        editable: false,
        align: "right"
      },
    
      {
        field: "phone",
        headerName: "شماره همراه",
        width:300,
        editable: false,
        align: "right"
      },

      {
        field: "email",
        headerName: "ایمیل",
        width:300,
        editable: false,
        align: "right"
      },

      {
        field: "price",
        headerName: "قیمت",
        width:300,
        editable: false,
        align: "right"
      },
    
      
    ];
  
    return (
      <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid 
          
          rows={ordersData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[2]}
          disableRowSelectionOnClick
        />
  
      </Box>
    );
}
