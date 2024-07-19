import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import useFetch from "../../../../hooks/useFetch";

export default function DialyChart() {
  const data = useFetch("http://localhost:3000/dialySales");

  return (
    <LineChart
      width={800}
      height={400}
      data={data[0]}
      className=" rounded-lg block m-auto"
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}
