import React, { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import ProduCtWithPrice from './ProduCtWithPrice'
import Slider from '../slider/Slider'
import Footer from '../footer/Footer'
import PageData from '../pageData/PageData'
import Pay from '../pay/Pay'
import useFetch from '../../hooks/useFetch'

export default function MainPost() {
    const [mainProduct, setMainProduct] = useState([])
    const [showPay, setShowPay] = useState(false)
    const [userProductData, setUserProductData] = useState({id:0, name: "", title:"", price:"",img: ""})
    let params = useParams()
    const [MainCategoryData] = useFetch(`http://localhost:3000/posts/${params.id}`)
    const [productsData] = useFetch("http://localhost:3000/products")
    
    async function payModal(data){
        setUserProductData(data)
        setShowPay(true)

        
    }



    useEffect(()=>{
        
        let mainProduct = productsData.filter((product) => {
            return product.category === MainCategoryData.faName
         })
        setMainProduct(mainProduct)
     },[productsData])


    return (
        <div className=' dark:bg-slate-900'>
     <Slider/>


     <div className={!showPay ? ("") : ("hidden")}>
        <PageData isMain={true}/>
     <div className='grid justify-items-center w-full lg:w-[95%]  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 pb-10 m-auto ' >
    {

            
        mainProduct.map(item => (
            item.isAvailable && (
            <Link key={item.id} to={""} className='grid justify-items-center w-full' onClick={() => payModal(item)}>
            <ProduCtWithPrice key={item.id} {...item}/>
            </Link>
            )
        ))
    }
    </div>
    </div>
   {showPay &&

    <div >
        <Pay {...userProductData}/>
    </div>
   }

    <Footer/>
        
  
    </div>
  )
}
