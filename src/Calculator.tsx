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
    <div className="flex! flex-col! w-400 h-367 bg-customBack items-center! justify-center! font-body p-25">
      {/* display */}
      <div className="flex items-center justify-end h-70 w-350 rounded-20 bg-screen text-screenText font-body font-normal text-customSize">
        {input}
      </div>
      {/* buttonbox */}
      <div className="grid grid-cols-5 grid-rows-4 font-body">
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("*")} className="operator">
          X
        </button>
        <button onClick={() => handleButtonClick("/")} className="operator">
          ÷
        </button>

        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("+")} className="operator">
          +
        </button>
        <button onClick={() => handleButtonClick("-")} className="operator">
          -
        </button>

        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("%")} className="operator">
          %
        </button>
        <button onClick={() => handleButtonClick("^")} className="operator">
          ^
        </button>

        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={handleClear}>
          <img src="clear.png" alt="clear" width={33} height={24} />
        </button>
        <button onClick={() => handleCalculate} className="operator">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
