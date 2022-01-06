import { createContext } from "react";

export const themes = { 
   light: { 
     navigator: {
       icon: 'light_mode', 
       backgroundColor: 'bg-gray-200', 
       textColor: 'text-gray-700',
       borderColor: 'border-gray-600'
     },
     body: {
       backgroundColor: 'bg-gray-100', 
       backgroundTextColor: 'bg-white',
       textColor: 'text-black',
     }
   }, 
   dark: { 
     navigator: {
       icon: 'dark_mode',
       backgroundColor: 'bg-gray-700', 
       textColor: 'text-gray-200',
       borderColor: 'border-gray-400' 
     },
     body: {
       backgroundColor: 'bg-gray-800', 
       backgroundTextColor: 'bg-black',
       textColor: 'text-white',
     }
   }
 }

const ThemeContext = createContext<any>({});

export default ThemeContext