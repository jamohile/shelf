import React, { useState, useEffect } from "react";
import Header from "./Header";
import Title from "./Title";

export default ({}) => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const interval =  setInterval(() => setNum(num === 3 ? 0 : num + 1), 200);
    return () => clearInterval(interval);
  });
  return (
    <Header>
      <Title text={`Loading${".".repeat(num)}`} />
    </Header>
  );
};
