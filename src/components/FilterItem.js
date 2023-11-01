import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const FilterItem = ({filterCat}) => {
    console.log('filterCat--------------',filterCat)
  return (
    <div>
      <div
        className="flex justify-between cursor-pointer my-2"
      >
        <span className="font-semibold">
          {filterCat.charAt(0).toUpperCase() + filterCat.slice(1)}
        </span>
        <span>
          {true ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </span>
      </div>
    </div>
  );
};

export default FilterItem;
