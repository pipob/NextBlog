import React, { useContext, useEffect, useState } from "react";
import ThemeContext from './Context'

import Carousel from "./Carousel";
import List from "./List";
import Market from "./Market";

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
   { title: 'Eleventh Blog', imageUrl: Image_8 , datetime: '6 Jan 2022 17:00', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit officia explicabo provident ducimus similique aperiam cupiditate vitae culpa sint, esse aliquam, iure impedit at maxime nostrum quaerat rem ut a?',  },
   { title: 'Twelveth Blog', imageUrl: Image_9 , datetime: '6 Jan 2022 17:00', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi cupiditate eveniet vitae doloribus culpa, fuga asperiores dignissimos, aperiam similique consectetur illo quo quis odit sed facilis. At, illo? Facilis, maxime!',  },
   { title: 'Thrirteenth Blog', imageUrl: Image_10 , datetime: '6 Jan 2022 17:00', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, fugiat. Quaerat unde praesentium quae? Praesentium, voluptatibus aliquid! Eaque omnis error quibusdam quis dolores, veritatis facilis ipsum fuga itaque quae adipisci!',  },
]



const carouselLimit = 3;
const Body = () => {
   const theme = useContext(ThemeContext)

   return (
      <div className={`${theme.body.backgroundColor} ${theme.body.textColor} p-4`}>
         <div className={`max-w-4xl mx-auto grid gap-4 `}>
            <div className={`flex justify-between`}>
               <div>Topic</div>
               <div>Menu</div>
            </div>
            <Carousel contents={contents} limit={carouselLimit} />

            <div className="grid md:grid-cols-3 gap-2">
               <div className="md:col-span-2">
                  <List contents={contents} skip={carouselLimit} />
               </div>
               <div className="md:col-span-1">
                  <Market />
               </div>
            </div>
         </div>
      </div>      
   )
}

export default Body