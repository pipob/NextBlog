import React, { useContext, useEffect, useState } from "react";
import ThemeContext from './Context'


const Carousel = ({ contents, limit }: { contents: any, limit: number }) => {
   const theme = useContext(ThemeContext)
   const carousel = contents.filter((data: any, i: number) => i < limit)
   const [showCarousel, setShowCarousel] = useState(0)

   const handleNextCarousel = () => { 
      setShowCarousel((value: any) => (value+1 < limit)? value+1 : 0 ) 
   }

   useEffect(() => {
      const intervalId = setInterval(handleNextCarousel, 7000);
      return () => clearInterval(intervalId);
   }, [showCarousel, carousel])
   
   return (
      <div className={`${theme.carousel.textColor}`}>
         { carousel.map((data: any, i: number) =>  
            <div key={`carousel-${i}`} className={`${(showCarousel === i)?'':'hidden'} `}> 
                <div className="relative animation-right">
                  <img className="rounded-xl object-cover h-60 sm:h-72 md:h-80 lg:h-96 w-full " src={data.imageUrl} alt="slide" />     
                  <div className={`absolute bottom-0 w-full h-16 ${theme.carousel.backgroundColor}/75 rounded-b-xl p-2`}> 
                     <div className={`text-left test-lg truncate font-semibold`}>{data.title} </div> 
                     <div className={`text-left text-sm truncate pr-6`}>{data.content} </div> 
                  </div>
                  <button className={`absolute top-2 right-2 font-semibold text-xs rounded-full ${theme.carousel.backgroundColor}/40 px-2 py-1`}>{data.category}</button>                
                  <button className={`absolute bottom-2 right-2 font-semibold text-sm `} 
                     onClick={handleNextCarousel}> 
                     <div className="material-icons">navigate_next</div> 
                  </button>
               </div>               
            </div>                     
            ) 
         }
      </div>
   )
}

export default Carousel