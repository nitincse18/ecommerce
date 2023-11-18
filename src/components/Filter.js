import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FilterItem from "./FilterItem";

const Filter = ({data, showItems, setShowIndex}) => {
  // console.log('data--- fiter', data)
  const handleClick = () => {
    setShowIndex()
}
  return (
    <div>
          
          <div className=" mx-1 my-2 w-32" onClick={handleClick}>
          <hr className="border border-gray-200 mt-2"/>
            <span className="font-semibold text-lg text-left">{data.code.charAt(0).toUpperCase() + data.code.slice(1)} </span>
            <span className="text-right">{showItems ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/> }</span>
          </div>

          {
            showItems &&
            <FilterItem items={data.values} />
          }
        </div>

  )
}

export default Filter