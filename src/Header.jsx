import React, { useContext } from "react";
import LanguageData from "./Lanaguage/LanaguageContext";

export default function HeaderInfo() {
  const { lan, setlan } = useContext(LanguageData);
  return (
    <div>
      <select onChange={(e)=>{

        setlan(e.target.value);
      }}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>
    </div>
  );
}
