import React, {useState, useEffect} from "react";
// import ColorfulMessage from "./components/ColorfulMessage";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("ゴリラ");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  /* 3の倍数の時だけ顔文字を表示（0の時は非表示） */
  useEffect(() => {
    /* console.log("useEffect!!"); */
    if (num > 0 && num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    };
  /* eslint react-hooks/exhaustive-deps: off */
  }, [num]);

  return (
    <>
      <h1 style={{ color: 'red' }}>おはようございます</h1>
      <ColorfulMessage color="blue">こんにちは</ColorfulMessage>
      <ColorfulMessage color="pink">いただきます</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(｀・∀・´)</p>}
    </>
  );
};

export default App;
