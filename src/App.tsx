import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <div class="h-screen w-screen bg-black flex justify-center items-center">
      <p class="font-bold text-3xl text-yellow-300">Hello Solidjs</p>
    </div>
  );
};

export default App;
