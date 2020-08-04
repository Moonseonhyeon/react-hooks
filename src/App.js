import React, { useState, useMemo } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b); //a는 누적값
  console.log(sum);
  return sum / numbers.length;
};

const App = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    //등록버튼 누르면
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {getAverage(list)}
      </div>
    </div>
  );
};

export default App;
