import React, { useEffect, useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const CartItems = ({ data }) => {
    console.log('items', data)
    // let count = 5
    let [items, setItems] = useState(data)
    let [price , setPrice] = useState(0)

    const increaseCount = async () => {
      const updatedCart = items.map((item) =>
        item.code === item.code ? { ...item, count: item.count + 1, totalPrice: item.totalPrice + item.price } : item
      
      
    );    
    setItems(updatedCart);
    }

    const decreaseCount = async () => {
      const updatedCart = items.map((item) =>
      item.code === item.code  && item.count > 1 ? { ...item, count: item.count - 1, totalPrice: item.totalPrice - item.price  } : item
    );
    setItems(updatedCart);
    }

    
    // setPrice(totalPrice)

    useEffect(() => {      
      setItems(data)
  
    },[])

    if(items.length == 0) return;
    const totalPrice = items.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.totalPrice;
    }, 0);

    const sumOfItems = items.reduce((countSum, currentItem) => {
      return countSum + currentItem.count;
    }, 0);
    console.log('totalPrice', totalPrice)
  return (
    <div className="grid grid-flow-col">
        <div className="col-span-11">
      <div className="m-2 text-center bg-white shadow-lg h-10 border border-gray-300">
        <h1 className="p-2 font-bold ">Flipkart({items.length})</h1>
      </div>
      <div className="m-2 text-left bg-white shadow-lg h-16 border border-gray-300">
        <h1 className="ml-2">
          Deliver to: <span className="font-bold">Nitin Kumar, 843121</span>
        </h1>
        <p className="ml-2 text-gray-500">Mirapur, Muzaffarpur, Bihar</p>
      </div>

      {
        
      items.map((item) => (
        
        <div className="m-2 text-left bg-white shadow-lg h-auto border border-gray-300 flex">
          <div>
            <img
              className="m-2 h-28"
              src={item?.image}
              alt=""
            />
            <span className="text-center mb-4">
                
                <button onClick={decreaseCount}><RemoveCircleOutlineIcon /></button>
                <input type="text" className="border border-black w-8 text-center" value={item.count} ></input>
                <button onClick={increaseCount}><AddCircleOutlineOutlinedIcon /></button>
            </span> 
          </div>
          <div className="justify-between">
            <h1 className="m-2 font-semibold ">{item.name}</h1>
            <h1 className="font-semibold mb-12"><CurrencyRupeeIcon fontSize="small"/>{item.totalPrice}</h1>
            <a className="ml-2 mr-4 text-black hover:text-green-700 font-semibold" href="">SAVE FOR LATER</a>
            <a className="ml-2 text-black hover:text-green-700 font-semibold" href="">REMOVE</a>
          </div>
        </div>
      ))}
      </div>

      {/* Price Details */}
      <div className="m-4 p-2 col-span-1 shadow-lg h-60 text-left">
        <h1 className=" font-bold text-lg">PRICE DETAILS</h1>
        <hr />
        <p className="mt-4 flex justify-between">
          <span className="text-left">Price({sumOfItems})</span>  
          <span className="text-right font-semibold"><CurrencyRupeeIcon fontSize="small" />{totalPrice}</span>
          </p>
        <p className="mt-4">Discount </p>
        <p className="mt-4">Delivery Charges</p>
        <hr className="border border-dotted border-black mt-2"/>
        <h1 className="text-lg font-bold mt-2 flex justify-between">
          <span className="text-left">Total Amount</span>  
          <span className="text-right font-semibold"><CurrencyRupeeIcon fontSize="small" />{totalPrice}</span>
        </h1>

        <h1 className="mt-2 text-base font-bold text-green-700">You will save ₹36,172 on this order</h1>
      </div>
    </div>
  );
};

export default CartItems;
