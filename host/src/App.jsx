import React, { useState } from "react";
import ReactDOM from "react-dom";
import RemoteComponent1 from "remote/Component1";
import "./index.scss";

const Main = () => {
  const [state, setState] = useState(0);
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: host</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
      <div className="bg-purple-700 text-white px-5 my-5 py-2 rounded-lg">State: {state}</div>
      <button
        className="bg-blue-700 text-white px-5 py-2 rounded-lg"
        onClick={() => setState(state + 1)}
      >
        Increment
      </button>

      <RemoteComponent1 state={state} setState={setState} />
    </div>
  );
};
ReactDOM.render(<Main />, document.getElementById("app"));
