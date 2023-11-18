import React, { useEffect, useState } from "react";
import { PRODUCT_LIST_API, API_OPTIONS } from "../utils/constant";
import Filter from "./Filter";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";


const ProductList = ({data}) => {
  console.log('category data', data)
  const [products, setProducts] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [showIndex, setShowIndex] = useState(null);

  const [searchParam] = useSearchParams();

  const getProductsList = async () => {
    try {
      const data = await fetch(PRODUCT_LIST_API + searchParam.get("category"), API_OPTIONS);
      const json = await data.json();
      // console.log('json?.results', json);
      setProducts(json?.results);

      const codesToFilter = ['sizes', 'contexts', 'collection', 'qualities', 'fits', 'descriptiveLengths', 'functions', 'colorWithNames'];

      const filteredFacets =await json?.facets.filter(facet => codesToFilter.includes(facet.code));
      setFilterData(filteredFacets)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProductsList();
  }, []);

  if(!products && products.length == 0 && !filterData) return

  return (
    <div className="">
      <div className="grid grid-flow-col">
        <div className="col-span-2 shadow-lg p-2 m-2">
        <h1 className="font-semibold text-xl">Filters</h1>
          {
            filterData.map((item, index) => (
              <Filter key={item.code} data={item} 
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}/>
              
            ))
          }
        </div>
        <div className="col-span-10  shadow-lg p-2 m-2">
          {
            products.map(product => (              
              // <Link key={product.pk}  to={'/details?product_code='+ product.pk}>
                <ProductCard key={product.pk} data={product} />
              // </Link>
            )
            )
          }

        </div>
      </div>
    </div>
  );
};

export default ProductList;
