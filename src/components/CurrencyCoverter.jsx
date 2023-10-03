import React from 'react'
import { InputCard } from './AllComponents'

const CurrencyCoverter = () => {
    return (
        <div className='w-screen flex justify-center items-center'>
            <div className='w-8/12 border-2 flex flex-col justify-center items-center border-black shadow-lg rounded-lg bg-slate-700'>
                <h2 className='text-blue-600 text-4xl font-bold capitalize my-4'>Currency Convertor</h2>
                <div className='w-7/12'><InputCard /></div>
                <button className='px-4 py-2 bg-blue-500 hover:bg-blue-600 font-bold text-lg capitalize rounded'>convert</button>
                <div className='w-7/12'><InputCard /></div>
                <button className='w-7/12 my-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 font-bold text-lg capitalize rounded'>convert USD to PKR</button>
            </div>

        </div>
    )
}

export default CurrencyCoverter