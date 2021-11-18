import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: 'red' }}>Hello Anakin.</h1>
      <ColorfulMessage color="blue">May the force be with you.</ColorfulMessage>
      <ColorfulMessage color="pink">No! Try not. Do. Or do not. There is no try.</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
