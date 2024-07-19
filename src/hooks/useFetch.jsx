import { useState, useEffect } from "react"

export default function useFetch(adress) {
    const [datas, setDatas] = useState([])

    useEffect(()=> {
     fetch(adress)
     .then(res => res.json())
     .then(datas => setDatas(datas))
    },[])
    return [datas]
}
