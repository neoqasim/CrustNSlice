import React, { useEffect, useState } from 'react'
import { data } from '../data/data'
const Food = () => {
    const [food, setFood] = useState(data)
    const filterType = (category) => {
        setFood(data.filter((filteredFoodByType) => {
            return filteredFoodByType.category === category
        }))
    }
    const filterPrice = (price) => {
        setFood(data.filter((filteredFoodByPrice) => {
            return filteredFoodByPrice.price === price
        }))
    }

    return (
        <div className=' max-w-[1600px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menus</h1>
            <div className=' flex flex-col lg:flex-row'>
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className=' flex justify-evenly flex-wrap'>
                        <button onClick={() => setFood(data)} className='m-1 border-orange-600 duration-300  hover:text-white font-semibold text-orange-600 hover:bg-orange-500 hover:border-orange-600'>All</button>
                        <button onClick={() => filterType('burger')} className='m-1 border-orange-600 duration-300  hover:text-white font-semibold text-orange-600 hover:bg-orange-500 hover:border-orange-600'>Burgers</button>
                        <button onClick={() => filterType('pizza')} className='m-1 border-orange-600 duration-300  hover:text-white font-semibold text-orange-600 hover:bg-orange-500 hover:border-orange-600'>Pizza</button>
                        <button onClick={() => filterType('salad')} className='m-1 border-orange-600 duration-300  hover:text-white font-semibold text-orange-600 hover:bg-orange-500 hover:border-orange-600'>Salads</button>
                        <button onClick={() => filterType('chicken')} className='m-1 border-orange-600 duration-300  hover:text-white font-semibold text-orange-600 hover:bg-orange-500 hover:border-orange-600'>Chickens</button>
                    </div>
                </div>

                <div>
                    <p>Filter Price </p>
                    <button onClick={() => { filterPrice('$') }} className='m-1 border-orange-600 duration-300  hover:text-white font-semibold text-orange-600 hover:bg-orange-500 hover:border-orange-600' > $</button>
                    <button onClick={() => { filterPrice('$$') }} className='m-1 border-orange-600 duration-300  hover:text-white font-semibold text-orange-600 hover:bg-orange-500 hover:border-orange-600' > $$</button>
                    <button onClick={() => { filterPrice('$$$') }} className='m-1 border-orange-600 duration-300  hover:text-white font-semibold text-orange-600 hover:bg-orange-500 hover:border-orange-600' > $$$</button>
                    <button onClick={() => { filterPrice('$$$$') }} className='m-1 border-orange-600 duration-300  hover:text-white font-semibold text-orange-600 hover:bg-orange-500 hover:border-orange-600' > $$$$</button>
                </div>
            </div>

            <div className='mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {food.map((singleFood, index) => (
                    <>
                        <div key={index} className='border shadow-lg cursor-pointer overflow-hidden  '>
                            <img className='rounded-t-lg w-3/4 mx-auto md:w-full duration-200 h-[160px] hover:scale-110 md:h-[290px] object-cover' src={singleFood.image} alt={singleFood.name} />
                            <div className='flex justify-between p-6'>
                                <p>{singleFood.name}</p>
                                <p><span className='bg-orange-500 text-white px-4 py-2 rounded-md'> {singleFood.price}</span></p>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Food
