import React, { useId } from 'react'

const InputCard = ({
    label = '',
    allOptions = ['btc', 'usd'],
    currencyOption = 'pkr',
    setCurrencyOption,
    value = 0,
    setValue,
    isReadOnly = false,

}) => {
    const currencyId = useId();
    const optionId = useId();
    return (
        <div className='w-full bg-slate-300 rounded-md flex justify-around items-center'>
            <div className='flex flex-col py-10'>
                <label className='text-lg font-bold ml-3' htmlFor={currencyId}>{label.toUpperCase()}</label>
                <input className='px-4 py-2 rounded-md' readOnly={isReadOnly} type="number" id={currencyId} value={value} onChange={(e) => { setValue(Number(e.target.value)) }} />
            </div>

            <div className='flex flex-col py-10'>
                <label className='text-lg font-bold my-1' htmlFor={optionId}>Select options</label>
                <select name="" id={optionId} value={currencyOption} onChange={(e) => { setCurrencyOption(e.target.value) }}>
                    {allOptions.map((currency => {
                        return (<option value={currency} key={currency}>{currency.toUpperCase()}</option>)
                    }))}
                </select>
            </div>
        </div>
    )
}

export default InputCard