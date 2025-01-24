import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full p-6"
        onClick={(e) => e.stopPropagation()} 
      >
        {children}
        <button
          className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
