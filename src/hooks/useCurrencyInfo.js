
import {useState,useEffect} from "react";

function useCurrencyInfo(currency) {
    const[data,setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/beb46280822276e94c01428e/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=>setData(res.conversion_rates))
        console.log(data)
    }, [currency]);

    return data;
}
export default useCurrencyInfo;