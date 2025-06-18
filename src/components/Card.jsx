import { useState } from "react";

function Card({ name, price, imageUrl }) {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);
  return (
    <>
      <div className="flex justify-center p-5  ">
        <div className="bg-white gap-5 flex w-96 flex-col shadow-lg ">
          <img src={imageUrl} className="rounded-t-lg" />
          <div className="p-2">
            <div className="text-xl font-bold">{name}</div>
            <div className="text-gray-600 mt-2 mb-2 text-sm">{price}</div>
            <div className="flex gap-4">
              <button
                className="w-full bg-blue-400 flex justify-center cursor-pointer rounded-xl text-xl shadow-lg px-5 p-3  font-semibold text-white hover:bg-blue-500"
                onClick={() => setCount(count + 1)}
              >
                {" "}
                좋아요 {count}{" "}
              </button>

              <button
                className="w-full bg-blue-400 flex justify-center cursor-pointer rounded-xl text-xl shadow-lg px-5 p-3 font-semibold text-white hover:bg-blue-500"
                onClick={() => setLike(!like)}
              >
                찜 {like ? "🤎" : "🤍"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
