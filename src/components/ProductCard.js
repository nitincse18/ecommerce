import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const ProductCard = ({data}) => {
    console.log('data', data)
    const {defaultArticle, images, price, variantSizes} = data
  return (
    <div>
        <div className='grid grid-flow-col mr-20 ml-2 mt-2 p-2 space-x-6'>
            <div className='col-span-2'>
            <img className="w-80 h-40" src={defaultArticle?.images[0]?.baseUrl} alt='p-img' />
            </div>
            <div className='col-span-8'>
                <h1 className='text-lg font-bold'>{defaultArticle?.name}</h1>
                <div className="flex items-center">
                    <button className="bg-green-700 rounded-md text-white h-6">
                        4.4 <StarBorderIcon />
                    </button>
                    <p className="text-gray-500 ml-2">4.434,182 Ratings & 3,473 Reviews</p>
                </div>
               <ul className='list-disc m-2 p-2 font-thin '>
                <li className='text-black'>Size: {variantSizes.map(size => size.filterCode + ',')}</li>
                <li className='text-black'>Ultra HD (4K), 3840 x 2160</li>
                <li className='text-black'>Launch Year 2023</li>
                <li className='text-black'>1 Year Comprehensive Warranty on Product and 1 Year Additional Warranty on Panel</li>
               </ul>
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