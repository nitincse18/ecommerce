import React from 'react'
import Card from './Card'

const mobiles = [
    {name: "SAMSUNG Galaxy S22 5G", pik:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/h/c/-original-imagth5xwrg4gfyp.jpeg?q=70"},
    {name: "Google Pixel 7a", pik:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/i/d/-original-imagpgx4erjqnpzx.jpeg?q=70"},
    {name: "Google Pixel 7", pik:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/2/y/-original-imaggswcffkgcupp.jpeg?q=70"},
    {name: "realme 11x 5G", pik:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/q/g/-original-imagtqqd4vcdzqdg.jpeg?q=70"},
    {name: "realme C53", pik:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/h/d/-original-imags487gaqqhcea.jpeg?q=70"},
    {name: "SAMSUNG Galaxy F34 5G", pik:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/k/x/-original-imagtrrqkxprtd4n.jpeg?q=70"},
]

const BestMobile = () => {
  return (
        <div className='shadow-lg p-2 mx-10 my-2  flex flex-col'>
        <div className='my-5 font-bold text-xl text-left'>Best Mobiles</div>
        <div className='flex flex-wrap'>
        {
            
            mobiles.map(m => {
                return <Card key={m.name} name={m.name} pik={m.pik} />
                // return <a className="text-center" href=''><img className='h-56 p-2 mx-2 justify-between' src={m.pik} alt='mobile'/>{m.name}</a>
            })
        }
         </div>
    </div>

  )
}

export default BestMobile