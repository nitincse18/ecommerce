import React, { useEffect, useState } from 'react'
import { API_OPTIONS, CATEGORY_LIST_API, SEARCH_IMG_API } from '../utils/constant'
import { Link } from 'react-router-dom';
import ProductList from './ProductList';

const SubHeader = () => {

    const [category, setCategory] = useState([]);
    // const [image, setImage] = useState('')

    useEffect(() => {
        getCategories();
        getImage()
    },[])

   const getCategories = async () => {
    const data = await fetch(CATEGORY_LIST_API,
      API_OPTIONS);

    let json = await data.json();
    let resArr = []
    for(let i=0; i<json.length; i++) {

        const category = json[i].CatName;
        const image = await getImage(category)
        console.log('image', image)
        resArr.push({category, image,id:i})
    }
    console.log('resArr', resArr)
    setCategory(resArr)
   } 

   const getImage = async (searchKey) => {
    const data = await fetch(`${SEARCH_IMG_API}${searchKey}`,
      API_OPTIONS);

    let json = await data.json();
    
    return json.results[1]?.urls?.regular
   } 

   if(!category) return

  return (
    <div className='shadow-lg p-2 mx-10 my-2'>
        <div className='flex mx-20 justify-between'>
            {
                category.map(item => (
                  <Link key={item.category} className='text-center' to={'/products?category='+ item.category}>
                    <img className='rounded-full h-20 w-20' src={item.image} alt={item.category} />
                    {item.category}
                </Link>
                    // <a key={item.category} className='text-center' href={'/products?category='+ item.category}>
                    //   <img className='rounded-full h-20 w-20' src={item.image} alt='top-offer' />{item.category}
                    //   </a>
                ))
            }
        
        </div>
        
    </div>
  )
}

export default SubHeader