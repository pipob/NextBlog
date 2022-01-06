import React, { useContext } from "react";
import ThemeContext from './Context'

const NavigationBar = ({ SwitchTheme }: { SwitchTheme: any }) => {
   const theme = useContext(ThemeContext)

   return (
      <div className={`${theme.navigator.backgroundColor} px-3 py-2`}>
         <div className={`flex justify-between items-center ${theme.navigator.textColor} font-semibold`}>
            <div>
               <div>ETC. Blog</div>
            </div>
            <div className="flex gap-3">
               <button className={`border rounded py-1 px-2 ${theme.navigator.borderColor}`}> Sign In </button>
               <button className="material-icons" onClick={SwitchTheme}> {theme.navigator.icon} </button>                 
            </div>
            
          
         </div>
      </div>      
   )
}

export default NavigationBar