import React, { useState, useEffect } from "react";

const App = () => {
  const [name, setName] = useState("홍길동");
  const [nickname, setNickname] = useState("무적");

  //특정 값이 변경될 때 캐치하고 싶음. 여러개도 가능
  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
  }, [name]); //인자 함수 딴거모르겠고 name처리된 거 만보고 내가 처리할께

  const changeName = () => {
    setName("김병만");
  };

  const changeNickname = () => {
    setNickname("약함");
  };

  return (
    <div>
      <div>{name}</div>
      <div>{nickname}</div>
      <button onClick={changeName}>이름변경</button>
      <button onClick={changeNickname}>별명변경</button>
    </div>
  );
};

export default App;
