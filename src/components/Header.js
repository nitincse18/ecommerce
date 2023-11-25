import React from 'react'
import { LOGO } from '../utils/constant'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {

  const cartItems = useSelector((store) => store.cart?.items)
  return (
    <div className='grid grid-flow-col p-4 m-2 shadow-lg '>
      <div className='flex col-span-1'>
        <img className='w-36'
        src={LOGO} alt='logo' />
      </div>
      <div className='col-span-8 px-10'>
        <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' placeholder='Search for Products, Brands and More' />
        <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200'>🔍</button>
      </div>
        
      <div className='flex col-span-3 justify-around'>
        <button className='cursor-pointer'>Become a Seller</button>
        <button className='cursor-pointer'>Sign-In <KeyboardArrowDownIcon /></button>
        <button className='cursor-pointer' ><Link to={"/cart"}><ShoppingCartIcon fontSize='medium'/>{cartItems?.length}</Link></button>
        <button className='cursor-pointer'><MoreVertIcon /></button>
        
      </div>
    </div>
    
  )
}

export default Header