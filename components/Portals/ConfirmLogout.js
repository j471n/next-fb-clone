import React from "react";
import ReactDOM  from "react-dom";


export default function ConfirmLogout({setModal , logout}) {
  return ReactDOM.createPortal( (
    <div className="absolute grid place-items-center inset-0 bg-black bg-opacity-60 z-100" onClick={()=>setModal(false)}>
      <div className="flex flex-col w-8/12 h-1/5 md:w-5/12 md:h-40 items-center justify-evenly p-5 bg-white rounded-lg ">
        <p className="text-2xl font-medium mb-2">Confirm the Logout?</p>
        <div className="">
          <button className="px-4 py-2 m-1 bg-gray-100 shadow-md" onClick={()=>setModal(false)}>
            Cancel
          </button>
          <button className="px-4 py-2 m-1 font-medium bg-blue-500 text-white shadow-md" onClick={()=> logout()}>
            Logout
          </button>
        </div>
      </div>
    </div>
  ),document.getElementById("portal"));
}
