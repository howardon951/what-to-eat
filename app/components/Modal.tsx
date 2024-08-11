import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  winner: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, winner }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg text-black">
        <h2 className="text-2xl font-bold mb-4">Your restaurant is:</h2>
        <p className="text-xl mb-4">{winner}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
