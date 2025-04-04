import React from 'react'
import "./App.css";
import ToDo from "./ToDo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {

  return (
    <>
      <ToastContainer />
      <ToDo />
    </>
  );
}

export default App;
