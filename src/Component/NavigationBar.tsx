import React, { useContext, useEffect, useState } from "react";
import ThemeContext from './Context'

import { firebaseApp } from './Firebase'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);



const NavigationBar = ({ handleSwitchTheme, setShowNewBlogModal }: { handleSwitchTheme: any, setShowNewBlogModal: any }) => {
   const theme = useContext(ThemeContext)
   const handleSignOut = () => { signOut(auth) }
   const handleSignIn = () => { signInWithEmailAndPassword(auth, 'pipob.piya@gmail.com', '123456') }
   const handleShowNewBlogModal = (event: any) => { setShowNewBlogModal((value: any) => !value) }

   const [user, setUser] = useState(auth.currentUser)
   useEffect(() => { onAuthStateChanged(auth, (user) => { setUser(user) }) }, [])

   return (
      <div className={`${theme.navigator.backgroundColor} px-3 py-2`}>
         <div className={`flex justify-between items-center ${theme.navigator.textColor} font-semibold`}>
            <div>
               <div>ETC. Blog</div>
            </div>
            <div className="flex gap-3">
               { user && <button className={`border rounded py-1 px-2 flex gap-1 items-center ${theme.navigator.borderColor}`} 
                     onClick={handleShowNewBlogModal}>
                     <div className="material-icons text-sm">add_box</div> <div className="text-sm">Blog</div>
                  </button> 
               }
               { user
                  ? <button className={`border rounded py-1 px-2 flex gap-1 items-center ${theme.navigator.borderColor}`}
                        onClick={handleSignOut}>
                         <div className="text-sm">SignOut</div> <div className="material-icons text-sm">logout</div> 
                     </button>
                  : <button className={`border rounded py-1 px-2 flex gap-1 items-center ${theme.navigator.borderColor}`}
                        onClick={handleSignIn}> 
                        <div className="material-icons text-sm">login</div> <div className="text-sm">SignIn</div> 
                     </button>
               }
               <button className="px-1 material-icons" onClick={handleSwitchTheme}> {theme.navigator.icon} </button>                 
            </div>
            
          
         </div>
      </div>      
   )
}

export default NavigationBar