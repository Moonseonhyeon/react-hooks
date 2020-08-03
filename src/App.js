import React, { useState } from "react";

//함수형에서 props받으려면
const App = (props) => {
  const [value, setValue] = useState({
    id: "ssar",
    password: "1234",
  }); //초기값 0자리에 오브젝트 들어갈 수 있음.

  const [user, setUser] = useState({
    username: "ssarmango",
    email: "ssarmango",
  });

  let change = () => {
    setValue({ ...value, password: "5678" }); //초기화했던 타입을 넣으면 됨.
  };

  return (
    <div>
      <h1>{value.id}</h1>
      <h1>{value.password}</h1>
      <h1>{user.username}</h1>
      <button onClick={change}>수정</button>
    </div>
  );
};

export default App;
