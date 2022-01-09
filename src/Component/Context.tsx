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
      textColor: 'text-gray-900',
     },     
     carousel: {
       backgroundColor: 'bg-white',
       textColor: 'text-black',
     },
     list: {
      backgroundColor: 'bg-gray-200', 
      textColor: 'text-black',
     },
     market: {
      labelBackgroundColor: 'bg-gray-300', 
      backgroundColor: 'bg-gray-200', 
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
     carousel: {       
       backgroundColor: 'bg-black',
       textColor: 'text-white',
     },
     body: {
       backgroundColor: 'bg-gray-800', 
       textColor: 'text-gray-100',
     },
     list: {
      backgroundColor: 'bg-gray-900', 
      textColor: 'text-white',
     },
     market: {
      labelBackgroundColor: 'bg-gray-700', 
      backgroundColor: 'bg-gray-900', 
      textColor: 'text-white', 
     }
   }
 }

const ThemeContext = createContext<any>({});

export default ThemeContext