import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: 'blue',
    fontSize: '20px'
  }
  return (
    <>
      <h1 style={{ color: 'red' }}>Hello Anakin.</h1>
      <p style={contentStyle}>Hello Luke.</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
