import React, { useContext, useState } from "react";
import ThemeContext from "./Context";

const maxLimit = 7
const List = ({contents, skip}: { contents: any, skip: number}) => {
   const theme = useContext(ThemeContext)
   
   const [listLimit, setListLimit] = useState(maxLimit)
   const list = contents.filter((data: any, i: number) => i >= skip && i < listLimit)

   const handleShowMoreList = () => { setListLimit((prev) => (prev+2 < maxLimit) ? prev+2 : maxLimit) }


   return (
      <div className="grid gap-2">
         {  list.map((data: any, i: number) => 
               <div key={`list-${i}`} className={`${theme.list.backgroundColor} text-left rounded-lg flex h-28`}>
                  <img className="rounded-l-lg w-40" src={data.imageUrl} alt="" />
                  <div className="p-3 grid">
                     <div className={`font-semibold ${theme.list.textColor} truncate `}> {data.title} </div>
                     <div className="flex gap-1 text-xs items-center">
                        <div className={`rounded-full border border-gray-500 px-2`}> {data.category} </div>
                        <div className={`italic ${theme.list.textColor}/70 px-1 truncate`}> {data.datetime} </div>
                     </div>
                                                
                     <div className={`py-2 text-sm ${theme.list.textColor} truncate-m`}> {data.content} </div>
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