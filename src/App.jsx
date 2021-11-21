import React, {useState} from "react";
import "./style.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ゴリラ",
    "カッパ"
  ]);

  const [completeTodos, setInCompleteTodos] = useState(["ウサギ"]);

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
          {incompleteTodos.map((todo) => {
            return (
              <ul key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </ul>
            );
          })}
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
          {completeTodos.map((todo) => {
            return (
              <ul key={todo} className="list-row">
                <li>ウサギ</li>
                <button>戻す</button>
              </ul>
            );
          })}
      </div>
    </>
  );
};
