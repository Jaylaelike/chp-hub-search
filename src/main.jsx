import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import InjectTailwind from "./InjectTailwind.jsx";
import ParticlesBg from "particles-bg";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InjectTailwind>
      <App />
      <ParticlesBg type="polygon"  bg={true} />
    </InjectTailwind>
  </React.StrictMode>
);
