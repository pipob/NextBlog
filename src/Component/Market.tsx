import React from "react";

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
   return (
      <div className="border rounded-lg bg-gray-300">
         <div> Market Info.</div>
         <div className="bg-gray-200">
            <div>SET</div>
            <div>SET50</div>
            <div>HSK</div>
            <div>Nikei</div>
            <div>Dowjone</div>
            <div>Nasdaq</div>
            <div>S&P500</div>
            <div>HSK</div>
         </div>
      </div>
   )
}

export default Market