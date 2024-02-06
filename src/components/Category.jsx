import React from 'react'
import { categories } from "../data/data";
const Category = () => {
    console.log(categories);
    return (
        <div className='max-w-[1600px] px-4 py-12 m-auto shadow brder shadow-orange-500' >
            <h1 className='text-orange-600 font-bold text-4xl text-center my-4 p-4'>Top Rated Menu Items</h1>
            <div className='grid sm:grid-cols-2  md:grid-cols-3 gap-4 lg:w-3/4 mx-auto'>
                {categories.map((singleCategory) => (
                    <>
                        <div key={singleCategory.id} className="bg-gray-100 px-2 lg:px-16 rounded-lg flex justify-evenly sm:justify-between items-center">
                            <h2 className='font-bold md:text-xl'>{singleCategory.name}</h2>
                            <img className='w-24' src={singleCategory.image} alt={singleCategory.name} />
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Category