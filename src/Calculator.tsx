/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState<string>("0");

  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };
  //background: #242530;

  return (
    //wrapper
    <div className="w-400 h-367 bg-customBack font-body p-25">
      {/* display */}
      <div className="flex items-center justify-end h-70 w-350 rounded-20 bg-screen text-screenText font-body font-normal text-customSize">
        {input}
      </div>
      {/* buttonbox */}
      <div className="grid grid-cols-5 grid-rows-4 font-body">
        <button
          className="border-none bg-btnBack font-normal font-body text-btnCustom text-screenText cursor-pointer rounded-[35px] w-[65px] h-[45px]"
          onClick={() => handleButtonClick("1")}
        >
          1
        </button>
        <button
          className="border-none bg-btnBack font-normal font-body text-btnCustom text-screenText cursor-pointer rounded-[35px] w-[65px] h-[45px]"
          onClick={() => handleButtonClick("2")}
        >
          2
        </button>
        <button
          className="border-none bg-btnBack font-normal font-body text-btnCustom text-screenText cursor-pointer rounded-[35px] w-[65px] h-[45px]"
          onClick={() => handleButtonClick("3")}
        >
          3
        </button>
        <button
          className="bg-btnOperator border-none w-[45px] h-[45px] font-body text-screenText font-normal text-customSize rounded-full"
          onClick={() => handleButtonClick("*")}
        >
          x
        </button>
        <button
          className="bg-btnOperator border-none w-[45px] h-[45px] font-body text-screenText font-normal text-customSize rounded-full"
          onClick={() => handleButtonClick("/")}
        >
          ÷
        </button>

        <button
          className="border-none bg-btnBack font-normal font-body text-btnCustom text-screenText cursor-pointer rounded-[35px] w-[65px] h-[45px]"
          onClick={() => handleButtonClick("4")}
        >
          4
        </button>
        <button
          className="border-none bg-btnBack font-normal font-body text-btnCustom text-screenText cursor-pointer rounded-[35px] w-[65px] h-[45px]"
          onClick={() => handleButtonClick("5")}
        >
          5
        </button>
        <button
          className="border-none bg-btnBack font-normal font-body text-btnCustom text-screenText cursor-pointer rounded-[35px] w-[65px] h-[45px]"
          onClick={() => handleButtonClick("6")}
        >
          6
        </button>
        <button
          className="bg-btnOperator border-none w-[45px] h-[45px] font-body text-screenText font-normal text-customSize rounded-full"
          onClick={() => handleButtonClick("+")}
        >
          +
        </button>
        <button
          className="bg-btnOperator border-none w-[45px] h-[45px] font-body text-screenText font-normal text-customSize rounded-full"
          onClick={() => handleButtonClick("-")}
        >
          -
        </button>

        <button
          className="border-none bg-btnBack font-normal font-body text-btnCustom text-screenText cursor-pointer rounded-[35px] w-[65px] h-[45px]"
          onClick={() => handleButtonClick("7")}
        >
          7
        </button>
        <button
          className="border-none bg-btnBack font-normal font-body text-btnCustom text-screenText cursor-pointer rounded-[35px] w-[65px] h-[45px]"
          onClick={() => handleButtonClick("8")}
        >
          8
        </button>
        <button
          className="border-none bg-btnBack font-normal font-body text-btnCustom text-screenText cursor-pointer rounded-[35px] w-[65px] h-[45px]"
          onClick={() => handleButtonClick("9")}
        >
          9
        </button>
        <button
          className="bg-btnOperator border-none w-[45px] h-[45px] font-body text-screenText font-normal text-customSize rounded-full"
          onClick={() => handleButtonClick("%")}
        >
          %
        </button>
        <button
          className="bg-btnOperator border-none w-[45px] h-[45px] font-body text-screenText font-normal text-customSize rounded-full"
          onClick={() => handleButtonClick("^")}
        >
          ^
        </button>

        <button
          className="border-none bg-btnBack font-normal font-body text-btnCustom text-screenText cursor-pointer rounded-[35px] w-[65px] h-[45px]"
          onClick={() => handleButtonClick(".")}
        >
          .
        </button>
        <button
          className="border-none bg-btnBack font-normal font-body text-btnCustom text-screenText cursor-pointer rounded-[35px] w-[65px] h-[45px]"
          onClick={() => handleButtonClick("0")}
        >
          0
        </button>
        <button
          className="border-none bg-btnBack font-normal font-body text-btnCustom text-screenText cursor-pointer rounded-[35px] w-[65px] h-[45px]"
          onClick={handleClear}
        >
          <img
            src="clear.png"
            alt="clear"
            width={33}
            height={24}
            className=""
          />
        </button>
        <button
          className="w-[104.83px] h-[46.8px] rounded-[100px] bg-btnEqualBg font-body font-normal text-btnEqualText text-btnEqual"
          onClick={() => handleCalculate}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
