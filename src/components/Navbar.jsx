import React from "react";
import { FaXing} from "react-icons/fa";
import { useContext } from "react";
import GlobalContext from "../Context/ExpenseContext";




const Navbar = () => {


const {clearAll} = useContext(GlobalContext)


  return (
    <nav>
      <h2>   <  FaXing /> Budget Buddy </h2>
      
      <button className="btn rounded-3  m-3 btn-outline-light " onClick={() => clearAll()} > Clear All   </button>
   
    </nav>
    
    );
};

export default Navbar;
