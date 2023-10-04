import { useState, useEffect } from "react"
const useFetch = (currency = 'pkr') => {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then(res => {
                return res.json();
            })
            .then(res => {
                setData(res[currency]);
            })
    }, [currency])
    return data;
}

export default useFetch
