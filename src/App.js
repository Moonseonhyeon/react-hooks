import React, { useEffect, useRef } from "react";

const App = () => {
  const input1 = useRef(null);

  //didmount
  useEffect(() => {
    console.log(input1);
    input1.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={input1} />
    </div>
  );
};

export default App;
