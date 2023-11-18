import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addFilter } from "../utils/productSlice";

const FilterItem = ({items}) => {
  console.log('items', items)
  // .map(item=>item.code)
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState([]);

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addFilter(item))
  }

  const handleCheckboxChange = (item) => {
    setCheckedItems((prevCheckedItems) => {
      const newCheckedItems = { ...prevCheckedItems };
      newCheckedItems[item.id] = !newCheckedItems[item.id];
      return newCheckedItems;
    });
  };
  return (
    <div>

    {items.map((item) => (
        <div
          data-testid="filteritem"
          key={item?.id}
          className=" text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 m-2">
              <label className="mx-2 text-left">
                <input 
                type="checkbox"
                checked={checkedItems[item.id] || false}
                onChange={() => handleCheckboxChange(item)} />

                {item?.code}
              </label>
             
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterItem;
