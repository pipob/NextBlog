import React, { useContext } from "react";
import ThemeContext from "./Context";

const marketInfo = [
   { symbol: 'SET', value: '1600.0' },
   { symbol: 'SET50', value: '980.0' },
   { symbol: 'HSK', value: '1600.0' },
   { symbol: 'Nikei', value: '1600.0' },
   { symbol: 'Dowjone', value: '1600.0' },
   { symbol: 'Nasdaq', value: '1600.0' },
   { symbol: 'SET', value: '1600.0' },
   { symbol: 'SET', value: '1600.0' },

]


const Market = () => {
   const theme = useContext(ThemeContext)

   return (
      <div className={`rounded-lg ${theme.market.labelBackgroundColor}`}>
         <div className="py-1"> Market Info.</div>
         <div className={`grid grid-cols-2 sm:grid-cols-1 ${theme.market.backgroundColor}`}>
            {  marketInfo.map((info, i) => 
                  <div key={`market-${i}`} className={`grid grid-cols-2 py-1 px-3 text-sm ${theme.market.textColor}`}>
                     <div className="text-left">{info.symbol}</div>
                     <div>
                        <div>{info.value}</div>
                        <div></div>
                     </div>
                  </div>
               )
            }
         </div>
      </div>
   )
}

export default Market