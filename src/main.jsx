// main.jsx

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import liff from "@line/liff";

async function initializeLiff() {
  try {
    await liff.init({ liffId: '2002771159-rZEzqnAq' });
    // 初期化が成功したら、SDKが使用可能
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById("root")
    );
  } catch (error) {
    console.error('LIFF initialization failed', error);
  }
}

initializeLiff();
