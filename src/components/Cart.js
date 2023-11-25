import { useDispatch, useSelector } from "react-redux"
// import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import CartItems from "./CartItems";
import { useEffect, useState } from "react";

const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items);
    // console.log('cartItems', cartItems)
    const [cartData, setCartData] = useState(null)

    const  groupAndCountByCode = (data) =>{
        const groupedData = {};
      
        data.forEach(item => {
          const { code, name } = item;
      
          if (!groupedData[code]) {
            groupedData[code] = {
              code,
              name,
              count: 1,
              image: item?.galleryDetails[0]?.baseUrl,
              price: item?.whitePrice?.price,
              totalPrice: item?.whitePrice?.price
            };
          } else {
            groupedData[code].count += 1;
            groupedData[code].totalPrice += item?.whitePrice?.price;
          }
        });
      
        const result = Object.values(groupedData);
      
        return result;
      }

      
    // console.log(groupedAndCountedData);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    useEffect(() => {
        const groupedAndCountedData = groupAndCountByCode(cartItems);
        setCartData(groupedAndCountedData)
    },[])

    if (!cartData) return
    console.log('cartData', cartData)

    return (
        <div className="text-center m-4 p-4">
            {/* <h1 className="text-2xl font-bold">Cart</h1> */}
            <div className=" ml-16">
                {/* <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length === 0 && <h1>Cart is empty. Add items to the cart</h1>} */}
                <CartItems data={cartData}/>
            </div>
        </div>
    )
}

export default Cart