import React, { useState, useCallback, useEffect, useRef } from 'react'

const MyCard = () => {
    const [pass, setPass] = useState('');
    const [len, setLen] = useState(6);
    const [isNums, setIsNums] = useState(false);
    const [isChar, setIsChar] = useState(false);
    const passInput = useRef(null);

    const generatePass = useCallback(() => {
        let tempPass = '';
        let allChars = 'qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM';
        isChar ? allChars += '[]{}_=+-!@#$%^&*()|";:<>/?,.' : allChars += '';
        isNums ? allChars += '1234567890' : allChars += '';
        for (let i = 0; i < len; i++) {
            let tempCharIndex = Math.floor(Math.random() * allChars.length);
            tempPass += allChars.charAt(tempCharIndex);
        }
        setPass(tempPass);
    }, [len, isChar, isNums, setPass]);

    const copyPass = useCallback(() => {
        passInput.current.select();
        window.navigator.clipboard.writeText(pass);
    }, [pass])

    useEffect(generatePass, [len, isChar, isNums, generatePass]);


    return (
        <div className="w-screen h-screen flex justify-center items-start">
            <div className='w-8/12 p-4 my-20 border-2 border-black bg-slate-700 rounded-lg'>
                <h2 className='text-center text-4xl font-bold text-blue-600 capitalize '>password generator</h2>
                <div className='w-full flex justify-center items-center my-6 rounded-full'>
                    <input ref={passInput} value={pass} className='outline-none shadow-lg rounded w-6/12 px-4 py-2 bg-slate-200 text-black' placeholder='Password' readOnly type="text" />
                    <button onClick={() => { generatePass() }} className='px-4 py-2 mx-4 rounded hover:bg-blue-600 capitalize font-bold  outline-none bg-blue-500'>genarate</button>
                    <button onClick={() => { copyPass() }} className='px-4 py-2 rounded hover:bg-blue-600 capitalize font-bold  outline-none bg-blue-500'>copy</button>
                </div>
                <div className='flex w-10/12 justify-evenly items-center mx-auto'>
                    <div className='flex w-4/12 justify-center gap-3 items-center'>
                        <input onChange={(e) => { setLen(Number(e.target.value)) }} className='w-6/12 mx-3' value={len} type="range" id='range' min={6} max={20} />
                        <label className='capitalize font-lg text-slate-950 font-bold' htmlFor="rang">Length : {len}</label>
                    </div>
                    <div className='flex w-4/12 justify-center gap-3 items-center'>
                        <input onChange={() => { setIsNums(prev => !prev) }} className='' type="checkbox" name="" id="nums" />
                        <label className='capitalize font-lg text-slate-950 font-bold' htmlFor="nums">numbers</label>
                    </div>
                    <div className='flex w-4/12 justify-center gap-3 items-center'>
                        <input onChange={() => { setIsChar(prev => !prev) }} className='' type="checkbox" name="" id="chars" />
                        <label className='capitalize font-lg text-slate-950 font-bold' htmlFor="chars">Special Characters</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCard