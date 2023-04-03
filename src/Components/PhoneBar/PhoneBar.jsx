import React, { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
const PhoneBar = () => {
  const [phones, setPhones] = useState([]);

  axios
    .get("https://openapi.programming-hero.com/api/phones?search=iphone")
    .then((data) => {
      const loadedData = data.data.data;
      const phoneData = loadedData.map((phone) => {
        const resultData = phone.slug.split("-");
        const intResultData = parseInt(resultData[1]);
        const price = intResultData;
        const phoneInfo = {
          name: phone.phone_name,
          price: price,
        };
        return phoneInfo;
      });
      // setPhones(phoneData)
      // console.log(phoneData)
      setPhones(phoneData);
    });
  return (
    <div>
      <ResponsiveContainer width={700} height={700}>
        <BarChart width={1600} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
          <YAxis dataKey="price"></YAxis>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PhoneBar;
