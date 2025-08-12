import React, { useState } from 'react';
import './index.css';

function App() {
  const [Show, setShow] = useState("")
  const [Num, setNum] = useState("0")
  const appendValue = (val) => {
    setNum((prev) =>
      prev === "0" || prev === "Error"
        ? val
        : prev + val
    );
  };
  const reset = () => {
    setShow("")
    setNum("0")
  }

  const cut = () => {
    const arr = Num.split("");
    arr.pop();
    const updated = arr.join("");
    setNum(updated === "" ? "0" : updated);
  };
  const calculateFactorial = () => {
    let exp = Num;
    let match = exp.match(/\d+$/);
    if (!match) return; 
    let n = Number(match[0]);
    const fact = (num) => {
      if (num === 0 || num === 1) return 1;
      let result = 1;
      for (let i = 2; i <= num; i++) {
        result *= i;
      }
      return result;
    };
  
    let factorialResult = fact(n);
    setNum(exp.replace(/\d+$/, factorialResult.toString()));
  };
  
  const calculateSquare = () => { 
    let exp = Num;
    let lastNumMatch = exp.match(/\d+(\.\d+)?$/);
       if (lastNumMatch) {
        const lastNum = Number(lastNumMatch[0]);
        let squared = lastNum**2;
        exp = exp.replace(/\d+$/, squared);
        setNum(exp);
       }
   }
  const evaluate = () => {
    setShow(Num + "=");
    try {
      setNum(eval(Num).toString());
    } catch {
      setNum("Error");
    }
  };
  
  
  return (
    <>
  <div class="w-full h-screen p-4 flex flex-col gap-4">

        <div className="box1 flex-[0.4] flex flex-col bg-gray-100 px-2 py-4 gap-2" >
          <div  className=" w-full flex-[0.4] p-4 bg-gray-300 rounded-md text-right text-xl text-gray-700 ">
          {Show.replace(/\*/g, "×").replace(/\//g, "÷")}
          </div>
          <input
            
            readOnly
            type="text"
            className="w-full flex-[0.6] text-2xl font-bold text-right p-4 bg-white rounded-md shadow-inner outline-none "
         value={Num.replace(/\*/g, "×").replace(/\//g, "÷")}

          />
        </div>
        <div className="  box2 flex-[0.6] w-screen grid grid-cols-4 gap-2 bg-gray-800 p-2">
          <button onClick={reset} className='bg-green-500 h-full rounded-lg p-1'>C</button>
          <button onClick={calculateFactorial} className='bg-green-500 h-full rounded-lg p-1' >!</button>
          <button onClick={calculateSquare} className='bg-green-500 h-full rounded-lg p-1'>x²</button>
          <button onClick={() => { appendValue("/") }} className='bg-green-500 h-full rounded-lg p-1'>÷</button>

          <button onClick={() => { appendValue("7") }} className='bg-slate-200 h-full rounded-lg p-1'>7</button>
          <button onClick={() => { appendValue("8") }} className='bg-slate-200 h-full rounded-lg p-1'>8</button>
          <button onClick={() => { appendValue("9") }} className='bg-slate-200 h-full rounded-lg p-1'>9</button>
          <button onClick={() => { appendValue("*") }} className='bg-green-500 h-full rounded-lg p-1'>x</button>

          <button onClick={() => { appendValue("4") }} className='bg-slate-200 rounded-lg p-1'>4</button>
          <button onClick={() => { appendValue("5") }} className='bg-slate-200 rounded-lg p-1'>5</button>
          <button onClick={() => { appendValue("6") }} className='bg-slate-200 rounded-lg p-1'>6</button>
          <button onClick={() => { appendValue("-") }} className='bg-green-500 rounded-lg p-1'>-</button>

          <button onClick={() => { appendValue("1") }} className='bg-slate-200 h-full rounded-lg p-1' >1</button>
          <button onClick={() => { appendValue("2") }} className='bg-slate-200 h-full rounded-lg p-1'>2</button>
          <button onClick={() => { appendValue("3") }} className='bg-slate-200 h-full rounded-lg p-1'>3</button>
          <button onClick={() => { appendValue("+") }} className='bg-green-500 h-full rounded-lg p-1'>+</button>

          <button onClick={() => { appendValue(".") }} className='bg-slate-200 h-full rounded-lg p-1'>.</button>
          <button onClick={() => { appendValue("0") }} className='bg-slate-200 h-full rounded-lg p-1'>0</button>
          <button onClick={cut} className='bg-slate-200 h-full rounded-lg p-1'>cut</button>
          <button
          onClick={evaluate}
            className="bg-green-500 h-full rounded-lg p-1"
          >=</button>
        </div>
      </div>
    </>
  )
}

export default App
