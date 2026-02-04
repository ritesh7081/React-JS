import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        console.log('Fetching currency:', currency)
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then(res => {
                console.log('Response status:', res.status)
                return res.json()
            })
            .then((res) => {
                console.log('API Response:', res)
                setData(res.rates || {})
            })
            .catch(err => console.error('API Error:', err))
    }, [currency])
    return data
}

export default useCurrencyInfo;