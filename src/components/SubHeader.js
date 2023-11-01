import React, { useEffect, useState } from 'react'
import { API_OPTIONS, CATEGORY_LIST_API, SEARCH_IMG_API } from '../utils/constant'

const SubHeader = () => {

    const [categoty, setCategory] = useState([]);
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
        resArr.push({category, image})
    }
    console.log(resArr)
    setCategory(resArr)
   } 

   const getImage = async (searchKey) => {
    const data = await fetch(`${SEARCH_IMG_API}${searchKey}`,
      API_OPTIONS);

    let json = await data.json();
    
    // json = json.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return json.results[1]?.urls?.regular
   } 

  return (
    <div className='shadow-lg p-2 mx-10 my-2'>
        <div className='flex mx-20 justify-between'>
            {
                categoty.map(item => (
                    <a key={item.category} className='text-center' href='/'><img className='rounded-full h-20 w-20' src={item.image} alt='top-offer' />{item.category}</a>
                ))
            }
        
        </div>
        
    </div>
  )
}

export default SubHeader