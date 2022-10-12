import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Statistics.css";

const Statistics = () => {
  const quizes = useLoaderData().data;
  return (
    <div className="custom-statistics">
      <ResponsiveContainer width='75%' height={300}>
        <LineChart data={quizes}>
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
