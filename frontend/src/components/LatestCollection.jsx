import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';


const LatestCollection=()=>{
    const {products}=useContext(ShopContext);
    // console.log(products)

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className='w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Discover our latest collection of products, carefully curated to bring
          you the newest trends and styles. From fashion to tech, explore what's
          new and exciting in our store.
        </p>
      </div>
    </div>
  );
}

export default LatestCollection