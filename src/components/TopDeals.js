import React from 'react'
import Card from './Card'

const mobiles = [
    {name: "Beastmode M Running Shoes For Men", pik:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/x/2/n/6-iq8862-6-adidas-conavy-silvio-preyel-original-imagsrzbavgspt4d.jpeg?q=70"},
    {name: "Izzy Analog Watch - For Women ES4782", pik:"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/v/b/m/-original-imagrh69jk22fy8y.jpeg?q=70"},
    {name: "Women Off White Flats Sandal", pik:"https://rukminim2.flixcart.com/image/832/832/xif0q/sandal/j/1/a/4-vish-wv-001692-vishudh-cream-original-imaghxwhzyhuwrzx.jpeg?q=70"},
    {name: "Boys Full Sleeve Printed Sweatshirt", pik:"https://rukminim2.flixcart.com/image/832/832/xif0q/kids-t-shirt/d/x/d/15-16-years-new-jf-4311-supersquad-original-imaghrcqa9xwecfc.jpeg?q=70"},
    {name: "Astro Lite 2.0 M Ss 19 Training", pik:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/f/p/j/-original-imagg6r42kecwp4r.jpeg?q=70"},
    {name: "Women Embellished Pure Silk Straight Kurta", pik:"https://rukminim2.flixcart.com/image/832/832/krf91u80/kurta/i/r/h/l-vkur11251036-varanga-original-imag57tk3cfrvzk9.jpeg?q=70"},
]

const TopDeals = () => {
    return (
        <div className='shadow-lg p-2 mx-10 my-2  flex flex-col'>
        <div className='my-5 font-bold text-xl text-left'>Top Deals</div>
        <div className='flex flex-wrap'>
        {
            
            mobiles.map(m => {
                return <Card key={m.name}  name={m.name} pik={m.pik} />
            })
        }
         </div>
    </div>
    )
}

export default TopDeals