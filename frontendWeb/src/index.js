import React from 'react'
import { createRoot } from "react-dom/client";
import App from "./App";
//variável #root que está no index do public
const root = createRoot(document.querySelector("#root")); root.render(<App/>);
