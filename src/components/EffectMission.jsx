import { useState, useEffect } from "react";

function EffectMission() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("대기 중이지 않음");

  const handleClick = () => {
    setStatus("대기 중...");
  };
  useEffect(() => {
    if (status === "대기 중...") {
      const timer = setTimeout(() => {
        setStatus("완료되었습니다.");
        setCount(count + 1);
      }, 3000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [count, status]);

  return (
    <div>
      <button onClick={handleClick}>작업 시작</button>
      <p>{status}</p>
      <p>작업 완료 : {count}</p>
    </div>
  );
}

export default EffectMission;
