// import react tools
import ReactDOM from "react-dom/client";
// import first compent 
import {App} from "./App";
//target the root div
const rootDiv = document.getElementById("root");
// transform the root into react node
const reactRoot = ReactDOM.createRoot(rootDiv);
// inject our app compent into react node 
reactRoot.render(<App></App>);


