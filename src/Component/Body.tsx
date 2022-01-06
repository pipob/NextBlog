import React, { useContext, useState } from "react";
import ThemeContext from './Context'

import Image_1 from "../Images/image_1.jpg"
import Image_2 from "../Images/image_2.jpg"
import Image_3 from "../Images/image_3.jpg"
import Image_4 from "../Images/image_4.jpg"
import Image_5 from "../Images/image_5.jpg"
import Image_6 from "../Images/image_6.jpg"


const contents = [
   { title: 'First Blog', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium libero non rerum, iure ex animi dolorum eum! Aperiam quibusdam maiores iure nostrum, impedit rem eos, voluptatibus, porro blanditiis illo quam.', imageUrl: Image_1 }, 
   { title: 'Secondary Blog', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam atque tempore ipsum sed voluptates similique, eos enim vero nemo magnam! Deleniti commodi, dolor accusamus omnis ab deserunt ducimus quas perspiciatis?', imageUrl: Image_2 },
   { title: 'Third Blog', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestias dolores expedita nobis necessitatibus id neque consequuntur maxime harum, totam mollitia omnis ut nam voluptatum officia voluptatibus. Dolorem, fugiat dolorum.', imageUrl: Image_3 },
   { title: 'Forth Blog', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt incidunt, numquam facilis tenetur, neque pariatur id velit, exercitationem quidem odio ea alias! Facilis, doloribus? Velit, quia unde. Inventore, incidunt fugiat.', imageUrl: Image_4 },
   { title: 'Fifth Blog', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quam eaque similique hic eos architecto quisquam temporibus veritatis totam fugiat? Sed ipsa quis corrupti minima optio deleniti quia, vero harum!', imageUrl: Image_5 },
   { title: 'Sixth Blog', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor sapiente minus consectetur voluptas harum soluta atque reiciendis? Consequatur unde, commodi tempora dolorem vero alias veniam omnis consectetur laudantium a?', imageUrl: Image_6 },
]



const Body = () => {
   const theme = useContext(ThemeContext)
   const carousel = contents.filter((data, i) => i < 3)
   const list = contents.filter((data, i) => i >= 3)

   const [showSlide, setShowSlide] = useState(0)

   const handleNextSlide = () => { 
      setShowSlide((showSlide === carousel.length-1)? 0: showSlide+1) 
   }

   return (
      <div className={`${theme.body.backgroundColor}`}>
         <div className={`max-w-4xl mx-auto grid gap-4 py-4`}>
            <div>
               { carousel.map((data, i) =>  
                  <div className={`${(showSlide === i)?'':'hidden'} `}> 
                     <div className="px-4 ">
                        <div className="relative overflow-hidden animate-right">
                           <img className="rounded-xl object-cover h-60 sm:h-72 md:h-80 lg:h-96 w-full " src={data.imageUrl} alt="slide" />  
                           <div className={`absolute bottom-0 w-full h-16 ${theme.body.backgroundTextColor}/75 rounded-b-xl p-2`}> 
                              <div className={`text-left ${theme.body.textColor} test-lg font-semibold`}>{data.title} </div> 
                              <div className={`text-left ${theme.body.textColor} text-sm truncate pr-10`}>{data.content} </div> 
                           </div>                
                           <button className={`absolute bottom-2 right-2 ${theme.body.textColor} font-semibold text-sm `} 
                              onClick={handleNextSlide}> 
                              <div className="material-icons">navigate_next</div> 
                           </button>
                        </div>               
                     </div>                     
                  </div>
                  ) 
               }

            </div>
         <div className="grid grid-cols-3">
            <div className="col-span-full md:col-span-2">
               <div className="px-4 text-left grid gap-2">
                  {  list.map((data, i) => 
                        <div className={`${theme.body.backgroundTextColor} rounded-lg flex`}>
                           <img className="rounded-l-lg h-24" src={data.imageUrl} alt="" />
                           <div className="p-3">
                              <div className={`font-semibold ${theme.body.textColor}`}> {data.title} </div>
                              <div className={`text-sm ${theme.body.textColor}`}> {data.content} </div>
                           </div> 
                        </div>
                        
                     ) 
                  }                  
               </div>


            </div>
            <div className="col-span-1 bg-gray-500">3</div>
         </div>

         </div>

      </div>      
   )
}

export default Body