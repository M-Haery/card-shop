import { Fade, Slide, Zoom } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
export default function Slider() {
  let images = [
    "/images/slider-image-2.jpg",
    "/images/slider-image-1.jpg",

  ]
  return (
  <>
 

  <Fade>
  {images.map((img, index) => (
    <div key={index} className=" relative flex justify-center  items-center w-[100%] h-[150px] sm:h-[300px] md:h-[400px] lg:h-[500px]" style={{backgroundImage: `url(${img})`, backgroundRepeat:"no-repeat", backgroundSize: "cover"}}>
      <div className=" absolute bottom-10 bg-gray-800 opacity-50 py-4 px-5 rounded-lg hidden sm:block">
        <p className=" text-white text-sm text-center ">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
      </div>
    </div>
  ))}
  
</Fade>

  
  </>
  );
}



