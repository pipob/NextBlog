import React, { useEffect } from "react";

import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebaseApp } from './Firebase'
const db = getFirestore(firebaseApp);

const NewBlogModal = ({ setShowNewBlogModal }: { setShowNewBlogModal: any }) => {
   const handleHideNewBlogModal = (event: any) => { 
      if(event.currentTarget === event.target ) setShowNewBlogModal((value: any) => !value) 
    }


   const handleAddBlog = async () => {
      const docRef = await addDoc(collection(db, "blogs"), {
         first: "Ada",
         last: "Lovelace",
         born: 1815
      }).then((result: any) => console.log(result))
   }
   useEffect(() => { console.log(firebaseApp);
    }, [])

   return (
      <div className="absolute bg-black/70 w-full z-10" >
         <div className="h-screen flex" onClick={handleHideNewBlogModal}> 
            <div className="m-auto bg-white w-96 rounded-xl p-4">
               <div> Add New Blog </div>
               <div className="grid gap-2">
                  <div className="w-48">
                     <div>Upload Image</div>
                     <input type='file'/>
                  </div>

                  <div className="flex gap-2">
                     <label> Title </label>
                     <input className="border w-full" />
                  </div> 
                  <div className="flex gap-2">
                     <label> Text </label>
                     <input className="border w-full" />
                  </div>  
                  <div className="flex">
                     <button className="ml-auto py-1 px-2 border rounded"
                        onClick={handleAddBlog}>Add
                     </button>
                  </div>                   

               </div>
            </div>
         </div> 

      </div>
   )
}

export default NewBlogModal