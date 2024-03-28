import  { useState, useEffect } from "react";
import CustomBarChart from "../componants/CustomBarChart";

const ToRead = () => {
    const [readBooks, setReadBooks] = useState([]);
  
    useEffect(() => {
      // Fetch readBooks data from localStorage
      const storedReadBooks = JSON.parse(localStorage.getItem("readBooks")) || [];
      setReadBooks(storedReadBooks);
    }, []); // Empty dependency array ensures useEffect runs only once on component mount
  
    return (
      <div className="to-read-page flex justify-center items-center mt-8">
        <CustomBarChart data={readBooks} />
      </div>
    );
  };
  
  export default ToRead;