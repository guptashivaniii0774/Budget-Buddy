import React from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import ListGroup from "./components/ListGroup";
import {GlobalProvider} from './Context/ExpenseContext'

const App = () => {

  return (
    <GlobalProvider> 
      <Navbar />
      <MainSection />
      <ListGroup />
    </GlobalProvider>
  ); 
};

export default App;
