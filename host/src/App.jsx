import React from "react";
import ReactDOM from "react-dom";
import RemoteComponent1 from "remote/Component1"
import "./index.scss";

const Main = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>

    <RemoteComponent1/>
  </div>
);
ReactDOM.render(<Main />, document.getElementById("app"));
