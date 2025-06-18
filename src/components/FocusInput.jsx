import { useRef, useState } from "react";

function FocusInput() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [rerender, setRerender] = useState(0);

  const handleFocus = () => {
    setRerender(countRef.current);
  };

  return (
    <>
      <div className="flex gap-3">
        <div className="font-semibold">State : {count}</div>
        <br />
        <div className="font-semibold">Ref : {rerender}</div>
      </div>
      <br />
      <div className="flex gap-3">
        <button
          className="w-full bg-blue-400 flex justify-center cursor-pointer rounded-xl text-xl shadow-lg px-5 p-3 font-semibold text-white hover:bg-blue-500"
          onClick={() => setCount(count + 1)}
        >
          State 올려
        </button>
        <button
          className="w-full bg-blue-400 flex justify-center cursor-pointer rounded-xl text-xl shadow-lg px-5 p-3 font-semibold text-white hover:bg-blue-500"
          onClick={() => (countRef.current += 1)}
        >
          ref 올려
        </button>
        <button
          className="w-full bg-blue-400 flex justify-center cursor-pointer rounded-xl text-xl shadow-lg px-5 p-3 font-semibold text-white hover:bg-blue-500"
          onClick={handleFocus}
        >
          랜더
        </button>
      </div>
      <br />
    </>
  );
}

export default FocusInput;
