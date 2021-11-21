import React from "react";
import "./style.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <li>ゴリラ</li>
          <button>完了</button>
          <button>削除</button>
        </ul>
        <ul>
          <li>カッパ</li>
          <button>完了</button>
          <button>削除</button>
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <ul>
          <li>ウサギ</li>
          <button>戻す</button>
        </ul>
      </div>
    </>
  );
};
