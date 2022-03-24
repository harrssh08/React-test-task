import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const Cap = (props) => {
  const [data, setData] = useState();
  useEffect(async () => {
    const d = await axios.get(`http://localhost:5000/get?id=883-koWrsO4`);
    setData(d);
    console.log(d, "DATA");
  }, []);
  return <div></div>;
};

export default Cap;
