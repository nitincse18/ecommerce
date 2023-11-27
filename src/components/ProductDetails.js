import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import productData from "../utils/StaticData/products.json";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShopIcon from "@mui/icons-material/Shop";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";


const ProductDetails = () => {

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // Dispatch an action
    
    dispatch(addItem(item));
  };

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [mainImage, setMainImage] = useState(
    productData?.articlesList[0]?.galleryDetails[0].baseUrl
  );
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [gallery, setGallery] = useState(productData?.articlesList[0]);

  const [images, setImages] = useState(
    productData?.articlesList[0]?.galleryDetails
  );

  const [searchParam] = useSearchParams();

  const getProductDetails = async () => {
    //   const data = await fetch(PRODUCT_DETAILS_API + searchParam.get("product_code"), API_OPTIONS);
    //     const json = await data.json();
    //     console.log(json)
    setProduct(productData);
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  const handlePreviewClick = async (image, index) => {
    setSelectedImage(index);
    setMainImage(image);
  };

  const handleSelectedProduct = async (article, index) => {
    setSelectedProduct(index || 0);

    setImages(article.galleryDetails.map((item) => item.baseUrl));
    setGallery(article);

    handlePreviewClick(article.galleryDetails[0].baseUrl, 0);
  };

  console.log("selectedProduct", selectedProduct);
  if (!product) return;

  const { name, description, articlesList } = product;
  // const images = articlesList[0].galleryDetails.map((item) => item.baseUrl);
  const { variantsList, whitePrice, galleryDetails } = gallery;
  console.log("galleryDetails", galleryDetails);

  return (
    <div className="grid grid-flow-col mx-28 my-2">
      <div className="col-span-3">
        {/* Image preview */}
        {/* <div className="flex p-2 justify-around"> */}
        {/* <div className="flex flex-col">
            {images.map((image, index) => (
              <img
                key={index}
                className={`w-20 h-20 text-right p-1  ${selectedImage === index ? 'border border-blue-700': ''}`}
                src={image}
                alt=""
                onClick={() => handlePreviewClick(image, index)}
              />
            ))}
          </div> */}

        {/* Selected Image */}
        {/* <div>
            <img
              className="w-80 text-right transition-transform transform-gpu hover:scale-125"
              src={mainImage}
              alt=""
            />
          </div> */}
        {/* </div> */}

        <div className="flex p-2 justify-around">
          {/* Image preview */}
          <div className="flex flex-col">
            {galleryDetails.map((image, index) => (
              <img
                key={index}
                className={`w-20 h-20 text-right p-1  ${
                  selectedImage === index ? "border border-blue-700" : ""
                }`}
                src={image.baseUrl}
                alt=''
                onClick={() => handlePreviewClick(image.baseUrl, index)}
              />
            ))}
          </div>

          {/* Selected Image */}
          <div>
            <img
              className="w-80 text-right transition-transform transform-gpu hover:scale-125"
              src={mainImage}
              alt=""
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="text-center justify-evenly">
          <button
            className="m-2 p-2 w-52 h-12 bg-yellow-600 text-white font-semibold"
            onClick={() => handleAddItem(gallery)}
          >
            <AddShoppingCartIcon /> Add To Cart
          </button>
          <button className="m-2 p-2 w-52 h-12 bg-red-600 text-white font-semibold">
            <ShopIcon /> Buy Now
          </button>
        </div>
      </div>

      {/* Content Part */}
      <div className="w-2/3">
        {/* <div className="col-span-9  p-2"> */}
        <div>
          <h1 className="m-4 text-lg font-bold">{name}</h1>
        </div>
        <div>
          <h1 className="m-4">{description}</h1>
        </div>
        <div>
          <h1 className="m-4 text-lg font-bold">
            <CurrencyRupeeIcon /> {whitePrice.price}
          </h1>
        </div>

        <div className="m-4 flex">
          <h1 className="mr-10 text-gray-500 font-semibold">Color</h1>
          <ul className="flex">
            {articlesList.map((article, index) => (
              <li className="mx-2 border border-gray-200 text-center">
                {
                  <img
                    key={index}
                    className="w-20 h-20 hover:opacity-75"
                    title={article?.color?.text}
                    src={article?.galleryDetails[0]?.baseUrl}
                    onClick={() => handleSelectedProduct(article, index)}
                  />
                }
              </li>
            ))}
          </ul>
        </div>
        <div className="m-4 flex">
          <h1 className="mr-12 text-gray-500 font-semibold">Size</h1>
          <ul className="flex">
            {variantsList.map((size) => (
              <li
                key={size?.size?.name}
                className="mx-2 w-8 h-6 border border-gray-200 text-center"
              >
                {size?.size?.name}
              </li>
            ))}
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductDetails;
