import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';

const ProductCard = ({data}) => {
    const {defaultArticle, images, price, variantSizes, rgbColors, brandName, articleColorNames, pk,code} = data
    const color= rgbColors[0]
  return (
    <div>
        <div className='grid grid-flow-col mr-20 ml-2 mt-2 p-2 space-x-6'>
            <div className='col-span-2'>
            <img className="w-80 h-40" src={defaultArticle?.images[0]?.baseUrl} alt='p-img' />
            </div>
            <div className='col-span-8'>
            <Link  to={'/details?product_code='+ defaultArticle?.code}>
                <h1 className='text-lg font-bold'>{defaultArticle?.name}</h1>
                <div className="flex items-center">
                    <button className="bg-green-700 rounded-md text-white h-6">
                        4.4 <StarBorderIcon />
                    </button>
                    <p className="text-gray-500 ml-2">4.434,182 Ratings & 3,473 Reviews</p>
                </div>
               <ul className='list-disc m-2 p-2 font-thin '>
                <li className='text-black font-semibold'>Size: {variantSizes.map(size => size.filterCode + ',')}</li>
                <li className='text-black font-semibold'>Brand: {brandName}</li>
                <li className='text-black font-semibold'>Color: {articleColorNames.filter(item=> item != 'dc').join(', ')}</li>
               </ul>
               </Link>
            </div>
            <div className='col-span-2 space-y-2'>
                <h1 className='text-lg font-bold'><CurrencyRupeeIcon fontSize='small'/>{price.value}</h1>
                <div>
                    <p className="line-through"><CurrencyRupeeIcon fontSize='small' className='text-xs'/>54,900</p>
                    <p className="text-green-700">  45% off</p>
                </div>
                <p>Fee delivery</p>
                <p className='bg-violet-400 text-xs text-violet-800'>Top Discount of the Sale</p>
                <p className='text-xs'>Upto <CurrencyRupeeIcon fontSize='small'/>2,000 Off on Exchange</p>
            </div>
        </div>
        <hr/>
    </div>

  )
}

export default ProductCard