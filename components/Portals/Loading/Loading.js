// import React from "react";
import ReactDOM from "react-dom";

export default function Loading() {
  return ReactDOM.createPortal(
    <div className="absolute grid place-items-center inset-0 bg-white z-100">
      <img src="/img/loading.svg" alt="" />
    </div>,
    document.getElementById("portal")
  );
}
