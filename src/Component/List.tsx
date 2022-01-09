import React, { useContext, useState } from "react";
import ThemeContext from "./Context";

const maxLimit = 6
const List = ({contents, skip}: { contents: any, skip: number}) => {
   const theme = useContext(ThemeContext)
   
   const [listLimit, setListLimit] = useState(maxLimit)
   const list = contents.filter((data: any, i: number) => i >= skip && i < listLimit)

   const handleShowMoreList = () => { setListLimit((prev) => (prev+2 < maxLimit) ? prev+2 : maxLimit) }


   return (
      <div className="grid gap-2">
         {  list.map((data: any, i: number) => 
               <div className={`${theme.list.backgroundColor} text-left rounded-lg flex h-24 sm:h-28`}>
                  <img className="rounded-l-lg" src={data.imageUrl} alt="" />
                  <div className="p-3 ">
                     <div className={`flex justify-between `}>
                        <div className={`font-semibold ${theme.list.textColor}`}> {data.title} </div>
                        <div className={`text-xs italic ${theme.list.textColor}/70`}> {data.datetime} </div>
                     </div>                              
                     <div className={`text-sm ${theme.list.textColor} truncate-m`}> {data.content} </div>
                  </div> 
               </div>
            ) 
         }   
         { listLimit < contents.length && listLimit < maxLimit && 
            <button className={`${theme.list.backgroundColor} rounded-lg text-sm py-1`}
               onClick={handleShowMoreList}>
               Show More..
            </button>                     
         }

      </div>

   )
}

export default List