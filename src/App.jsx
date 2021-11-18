import React from "react";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1>Hello Anakin.</h1>
      <p>Hello Luke.</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
