import { Link } from "react-router-dom";

export default function Product({id, img, faName, enName}) {
    
  return (
    <Link className="w-[100%] sm:w-[70%] md:w-80 lg:w-60    gap-1    dark:text-white dark:bg-slate-800 dark:hover:bg-slate-700  dark:duration-100 cursor-pointer  rounded-lg  hover:shadow-2xl shadow-md bg-[#ffffff] transition-all duration-300 py-4" to={`./products/${id}`}>
    
    <div className="flex md:justify-center md:items-center md:flex-col ">
        
        <img className='  w-20 md:w-72 lg:w-56  rounded-xl  mx-5 md:mx-0 mb-4' src={img} alt="" />
      <div className='flex items-center justify-center flex-col gap-6 '>
        <h1 className=''>{faName}</h1>
        <h1>{enName}</h1>
      </div>
    </div>
    </Link>
  )
}
