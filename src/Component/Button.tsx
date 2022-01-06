import React from "react";

const Button = ({ label, onClick }: { label: string, onClick: any }) => {

   return (
      <button className="border rounded shadow px-2 py-1"
         onClick={onClick}>
         {label}
      </button>
   )
}

export default Button