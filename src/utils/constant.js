export const LOGO = 'https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-535108.svg';
export const USER_AVATAR = 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg';
export const BACKGROUND_IMAGE = 'https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg'


export const PRODUCT_LIST_API = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=in&lang=en&currentpage=0&pagesize=30&categories='
export const PRODUCT_DETAILS_API = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?country=in&lang=en&productcode='
// 'https://fakestoreapi.com/products'

// export const CATEGORY_LIST_API = 'https://fakestoreapi.com/products/categories'
export const CATEGORY_LIST_API = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list?lang=en&country=in'



export const API_OPTIONS = {
    method: 'GET', 
    headers: {
        'X-RapidAPI-Key': '565f15d20dmsh57212d08b79c612p1fe065jsne761a96e2f01',
        'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
      }
}

const UPSPLASH_ROOT = 'https://api.unsplash.com'
const UPSPLASH_ACCESS_KEY = 'jEQU19pKVTewgZSJEsKNlbs1jdj2nqL6GFJ5E-k_bhQ'
const UPSPLASH_SECRET_KEY = 'Ad5JI1EqhwvWbQ6ohm4_5f-6wGrcDVKADYaPc_uU1IA'
const UPSPLASH_REDIRECT_URI = 'urn:ietf:wg:oauth:2.0:oob'

export const SEARCH_IMG_API = `${UPSPLASH_ROOT}/search/photos?client_id=${UPSPLASH_ACCESS_KEY}&page=1&query=`