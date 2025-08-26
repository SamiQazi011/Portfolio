import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/Home";
import AboutMe from "./Screens/AboutMe";
import CallNow from "./Screens/CallNow";
import Portfolio from "./Screens/Portfolio";
import Navbar from "./Screens/Navbar";
import Transitions1 from "./Screens/Transitions1";
// import MarkSheet from "./Screens/MarkSheet";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/callnow" element={<CallNow />} />
        <Route path="/portfolio" element={<Portfolio />} /> 
        <Route path="/transitions1" element={<Transitions1/>}/>
        {/* {/* <Route path="/MarkSheet" element={<MarkSheet />} /> */}

      </Routes>
    </Router>
  );
};

export default App;
