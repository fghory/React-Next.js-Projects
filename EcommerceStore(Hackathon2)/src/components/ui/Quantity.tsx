"use client";

import React, { useState } from "react";

const Quantity = () => {
  const [num, setNum] = useState(1);
  return (
    <div className="flex">
      <button
        className="bg-gray-100 w-6 h-6 rounded-full"
        onClick={() => {
          num <= 1 ? 1 : setNum(num - 1);
        }}
      >
        -
      </button>
      <div className="mx-2">{num}</div>
      <button
        className="bg-gray-100 w-6 h-6 rounded-full"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
