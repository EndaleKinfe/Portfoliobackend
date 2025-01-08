import { useState } from 'react';
import Slides from './Slides';
import useFetch from '../useFetch';
const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const requestOptions = {
  method: "GET",
  redirect: "follow"
}
    const {data, error, isLoading} = useFetch("http://localhost/portfoliobackend/index.php/carosels/list", requestOptions);
    let slideInfo = error || isLoading ? [] : data;
    
    let currentObject = slideInfo[currentSlide - 1];
    function handleSlide(next) {
        let nextSlide = next;
        if (next > slideInfo.length  ) {
            nextSlide = 1
        }
        if (next < 1) {
            nextSlide = slideInfo.length;
        }
        
        setCurrentSlide(nextSlide);
    }
    
    // slideImageLink={currentObject?.imageLink}
    
    return ( 
        <div className="w-full relative  min-h-screen bg-yellow-200">
            {isLoading && 
            <Slides 
                slideId={1}
                slideCount={1}
                slideText={"Loading carret"} 
            />}
            {
                currentObject &&
            <Slides 
                slideId={currentObject?.id}
                slideCount={slideInfo.length }
                slideText={currentObject?.title} 
            />
            }
            <Slides 
                slideId={1}
                slideCount={1}
                slideText={"this is me"} 
            />
            {/* Next and previous buttons */}
            <a className="text-2xl text-white absolute top-1/2 left-4 hover:bg-slate-800 p-2 rounded-sm" onClick={()=>handleSlide(currentSlide - 1)}>❮</a>
            <a className="text-2xl text-white absolute top-1/2 right-4 hover:bg-slate-800 rounded-sm p-2 " onClick={()=>handleSlide(currentSlide + 1)}>❯</a>
        </div>

    );
}
 
export default ImageSlider;