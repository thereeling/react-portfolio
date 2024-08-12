"use client";


import { ToastContainer } from "react-toastify";
import toast from "react-hot-toast";

export default function ToastProvider({ children }) {
  return (
    <>
      {children}
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </>
  );
}
