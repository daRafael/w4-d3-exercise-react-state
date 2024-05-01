// import useState
import { useState } from "react";

export default function Counter() {
  // use state hook
  const [num, setNum] = useState(0);

  const changeNum = (int) => {
    if(typeof int !== 'number' || num + int < 0) return;
    setNum(num + int);
  }


  return (
    <div>
      {/* use state to make the integer dynamic */}
      <p>The count is: {num}</p>
      <div>
        {/* update the onClick with your function */}
        <button onClick={() => {changeNum(1)}}>Increment</button>
        <button onClick={() => {changeNum(-1)}}>Decrement</button>
      </div>
    </div>
  );
}
