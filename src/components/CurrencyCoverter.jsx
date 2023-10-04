import React, { useCallback, useEffect, useState } from 'react'
import { InputCard } from './AllComponents'
import useFetch from '../hooks/useFetch';

const CurrencyCoverter = () => {
    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [from, setFrom] = useState('pkr');
    const [to, setTo] = useState('usd');

    const res = useFetch(from);
    const allCurrencies = Object.keys(res);

    const convertOptions = useCallback(() => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    }, [to, from, convertedAmount, amount]);

    return (
        <div className='w-screen flex justify-center items-center'>
            <div className='w-8/12 border-2 flex flex-col justify-center items-center border-black shadow-lg rounded-lg bg-slate-700'>
                <h2 className='text-blue-600 text-4xl font-bold capitalize my-4'>Currency Convertor</h2>
                <div className='w-7/12'><InputCard
                    label={'from'}
                    allOptions={allCurrencies}
                    currencyOption={from}
                    setCurrencyOption={setFrom}
                    value={amount}
                    setValue={setAmount}
                /></div>
                <button className='px-4 py-2 my-2 bg-blue-500 hover:bg-blue-600 font-bold text-lg capitalize rounded' onClick={() => {
                    convertOptions();
                }}>convert</button>
                <div className='w-7/12'><InputCard
                    label={'to'}
                    allOptions={allCurrencies}
                    currencyOption={to}
                    setCurrencyOption={setTo}
                    value={convertedAmount}
                    setValue={setConvertedAmount}
                    isReadOnly={true}
                /></div>
                <button className='w-7/12 my-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 font-bold text-lg capitalize rounded' onClick={() => {
                    setConvertedAmount(Number(res[to]) * amount);

                }}>convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </div>

        </div>
    )
}

export default CurrencyCoverter