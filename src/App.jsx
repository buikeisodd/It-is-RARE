// import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Pricing from "./components/pricing";
import People from "./components/people";
// import Embed from "./components/embedded";
import Project from "./components/project";
import Header from "./components/header";
import Body from "./components/body";
import {Routes, Route} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      {/* Include this script tag or install `@tailwindplus/elements` via npm: */}
      {/* <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script> */}
     <div className="bg-rose-400">
      <Header />

      <Routes>
        <Route path="/"                         element={<Body />} />
        <Route path="/project"                  element={<Project />} />
        <Route path="/free-instrumentals"       element={<Project />} />
        <Route path="/instrumental-marketplace" element={<Pricing />} />
        <Route path="/about-us"                 element={<People />} />
      </Routes>
    </div>
    <People />
    <Pricing />g
    </>
  );
}

export default App;
