import React, {useState} from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const [num, setNum] = useState(0);

  return (
    <>
      <h1 style={{ color: 'red' }}>Hello Anakin.</h1>
      <ColorfulMessage color="blue">May the force be with you.</ColorfulMessage>
      <ColorfulMessage color="pink">No! Try not. Do. Or do not. There is no try.</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App;
