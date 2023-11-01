import React, { useEffect, useState } from "react";
import { PRODUCT_LIST_API, API_OPTIONS } from "../utils/constant";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Filter from "./Filter";
import FilterItem from "./FilterItem";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [showIndex, setShowIndex] = useState(null);

  

  const getProductsList = async () => {
    try {
      const data = await fetch(PRODUCT_LIST_API, API_OPTIONS);
      const json = await data.json();
      console.log('json?.results', json?.results);
      setProducts(json?.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProductsList();
  }, []);

  // if(!products) return
  // const {facets, results} = products

  return (
    <div className="">
      <div className="grid grid-flow-col">
        <div className="col-span-2 shadow-lg p-2 m-2">
          <Filter />
        </div>
        <div className="col-span-10  shadow-lg p-2 m-2">
          {
            products.map(product => <ProductCard key={product.pk} data={product} />)
          }

        </div>
      </div>
    </div>
  );
};

export default ProductList;
