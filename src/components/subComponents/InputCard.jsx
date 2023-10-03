import React, { useId } from 'react'

const InputCard = () => {
    const currencyId = useId();
    const optionId = useId();
    return (
        <div className='w-full bg-slate-300 flex justify-around items-center'>
            <div className='flex flex-col'>
                <label htmlFor={currencyId}>From</label>
                <input type="number" id={currencyId} />
            </div>

            <div className='flex flex-col'>
                <label htmlFor={optionId}>Select option</label>
                <select name="" id={optionId}>
                    <option value="usd">usd</option>
                    <option value="pkr">pkr</option>
                    <option value="inr">inr</option>
                </select>
            </div>
        </div>
    )
}

export default InputCard