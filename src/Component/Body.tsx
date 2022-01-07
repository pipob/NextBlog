import React, { useContext, useEffect, useState } from "react";
import ThemeContext from './Context'

import Image_1 from "../Images/image_1.jpg"
import Image_2 from "../Images/image_2.jpg"
import Image_3 from "../Images/image_3.jpg"
import Image_4 from "../Images/image_4.jpg"
import Image_5 from "../Images/image_5.jpg"
import Image_6 from "../Images/image_6.jpg"
import Image_7 from "../Images/image_7.jpg"
import Image_8 from "../Images/image_8.jpg"
import Image_9 from "../Images/image_9.jpg"
import Image_10 from "../Images/image_10.jpg"


const contents = [
   { title: 'First Blog', imageUrl: Image_1 , datetime: '6 Jan 2022 17:00', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium libero non rerum, iure ex animi dolorum eum! Aperiam quibusdam maiores iure nostrum, impedit rem eos, voluptatibus, porro blanditiis illo quam.'}, 
   { title: 'Secondary Blog', imageUrl: Image_2 , datetime: '6 Jan 2022 17:00', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam atque tempore ipsum sed voluptates similique, eos enim vero nemo magnam! Deleniti commodi, dolor accusamus omnis ab deserunt ducimus quas perspiciatis?',  },
   { title: 'Third Blog', imageUrl: Image_3 , datetime: '6 Jan 2022 17:00', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestias dolores expedita nobis necessitatibus id neque consequuntur maxime harum, totam mollitia omnis ut nam voluptatum officia voluptatibus. Dolorem, fugiat dolorum.',  },
   { title: 'Forth Blog', imageUrl: Image_4 , datetime: '6 Jan 2022 17:00', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt incidunt, numquam facilis tenetur, neque pariatur id velit, exercitationem quidem odio ea alias! Facilis, doloribus? Velit, quia unde. Inventore, incidunt fugiat.',  },
   { title: 'Fifth Blog', imageUrl: Image_5 , datetime: '6 Jan 2022 17:00', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quam eaque similique hic eos architecto quisquam temporibus veritatis totam fugiat? Sed ipsa quis corrupti minima optio deleniti quia, vero harum!',  },
   { title: 'Sixth Blog', imageUrl: Image_6 , datetime: '6 Jan 2022 17:00', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor sapiente minus consectetur voluptas harum soluta atque reiciendis? Consequatur unde, commodi tempora dolorem vero alias veniam omnis consectetur laudantium a?',  },
   { title: 'Seventh Blog', imageUrl: Image_7 , datetime: '6 Jan 2022 17:00', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quis, rem saepe totam non est delectus veritatis eos obcaecati dolor, aspernatur, itaque nisi quae? Dolores deleniti error saepe ex dignissimos.',  },
   { title: 'Eigth Blog', imageUrl: Image_8 , datetime: '6 Jan 2022 17:00', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit officia explicabo provident ducimus similique aperiam cupiditate vitae culpa sint, esse aliquam, iure impedit at maxime nostrum quaerat rem ut a?',  },
   { title: 'Ninth Blog', imageUrl: Image_9 , datetime: '6 Jan 2022 17:00', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi cupiditate eveniet vitae doloribus culpa, fuga asperiores dignissimos, aperiam similique consectetur illo quo quis odit sed facilis. At, illo? Facilis, maxime!',  },
   { title: 'Tenth Blog', imageUrl: Image_10 , datetime: '6 Jan 2022 17:00', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, fugiat. Quaerat unde praesentium quae? Praesentium, voluptatibus aliquid! Eaque omnis error quibusdam quis dolores, veritatis facilis ipsum fuga itaque quae adipisci!',  },
]



const Body = () => {
   const theme = useContext(ThemeContext)
   const [carouselCount, setCarouselCount] = useState(3)
   const [listCount, setListCount] = useState(5)

   const carousel = contents.filter((data, i) => i < carouselCount)
   const list = contents.filter((data, i) => i >= 3 && i < listCount)

   const [showSlide, setShowSlide] = useState(0)

   const handleNextSlide = () => { 
      setShowSlide((showSlide === carousel.length-1)? 0: showSlide+1) 
   }

   const handleShowmoreList = () => {
      setListCount(listCount+1);
   }

   setInterval(() => {
      console.log(showSlide);
      setShowSlide((showSlide === carousel.length-1)? 0: showSlide+1) 
   }, 5000);
   useEffect(() => {

   }, [])

   return (
      <div className={`${theme.body.backgroundColor} ${theme.body.textColor}`}>
         <div className={`max-w-4xl mx-auto grid gap-4 py-4`}>
            <div className={`flex justify-between px-4`}>
               <div>Topic</div>
               <div>Menu</div>
            </div>
            <div>
               { carousel.map((data, i) =>  
                  <div className={`${(showSlide === i)?'':'hidden'} `}> 
                     <div className="px-4 ">
                        <div className="relative animation-right">
                           <img className="rounded-xl object-cover h-60 sm:h-72 md:h-80 lg:h-96 w-full " src={data.imageUrl} alt="slide" />  
                           <div className={`absolute bottom-0 w-full h-16 ${theme.carousel.backgroundColor}/75 rounded-b-xl p-2`}> 
                              <div className={`text-left ${theme.carousel.textColor} test-lg font-semibold`}>{data.title} </div> 
                              <div className={`text-left ${theme.carousel.textColor} text-sm truncate pr-10`}>{data.content} </div> 
                           </div>                
                           <button className={`absolute bottom-2 right-2 ${theme.carousel.textColor} font-semibold text-sm `} 
                              onClick={handleNextSlide}> 
                              <div className="material-icons">navigate_next</div> 
                           </button>
                        </div>               
                     </div>                     
                  </div>
                  ) 
               }

            </div>
         <div className="grid grid-cols-3 gap-2">
            <div className="col-span-full md:col-span-2">
               <div className="px-4  grid gap-2">
                  {  list.map((data, i) => 
                        <div className={`${theme.content.backgroundColor} text-left rounded-lg flex h-24 sm:h-28`}>
                           <img className="rounded-l-lg" src={data.imageUrl} alt="" />
                           <div className="p-3 ">
                              <div className={`flex justify-between `}>
                                 <div className={`font-semibold ${theme.content.textColor}`}> {data.title} </div>
                                 <div className={`text-xs italic ${theme.content.textColor}/70`}> {data.datetime} </div>
                              </div>                              
                              <div className={`text-sm ${theme.content.textColor} truncate-m`}> {data.content} </div>
                           </div> 
                        </div>
                     ) 
                  }   
                  { listCount < contents.length && 
                     <button className={`${theme.content.backgroundColor} rounded-lg text-sm py-1`}
                        onClick={handleShowmoreList}>
                        Show More..
                     </button>                     
                  }
            
               </div>


            </div>
            <div className="col-span-full md:col-span-1 px-4">
               <div></div>
            
            </div>
         </div>

         </div>

      </div>      
   )
}

export default Body