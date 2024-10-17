// Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode; // Define children as React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md" style={{ zIndex: 10 }}>
        <div className="flex justify-between items-center p-3 bg-blue-500 text-white rounded-t-2xl">
          <button onClick={onClose} className="text-white">
            <i className="fas fa-angle-left"></i>
          </button>
          <p className="mb-0 font-bold">Live chat</p>
          <button onClick={onClose} className="text-white">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="p-4" style={{ maxHeight: "400px", overflowY: "auto" }}>
          {children} {}
        </div>
      </div>
    </div>
  );
};

export default Modal;