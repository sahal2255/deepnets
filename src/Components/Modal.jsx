import React from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full p-6"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-all"
          onClick={onClose}
        >
          <IoClose size={24} />
        </button>

        {children}

       
      </div>
    </div>
  );
};

export default Modal;
