import React, { useEffect, useState } from "react";
import { PRODUCT_LIST_API, API_OPTIONS } from "../utils/constant";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FilterItem from "./FilterItem";

const Filter = () => {

  return (
    <div>
        
          <h1 className="font-semibold text-xl">Filters</h1>
          <hr className="border border-gray-700 mt-4"/>
          <div className=" mx-auto my-3 shadow-sm p-2 w-32">
            <h1>Filter1</h1>
            <h1>Filter2</h1>
            <h1>Filter3</h1>
            <h1>Filter4</h1>
            <h1>Filter5</h1>

            {/* {
                showItems &&
                <ItemList items={data.itemCards} />
            } */}
          </div>
        </div>

  )
}

export default Filter