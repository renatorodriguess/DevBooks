import React from "react";
import Form from './Form'
import { IoCloseOutline } from "react-icons/io5";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1>Escolha do Livro!</h1>
            </div>
            <div>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={onClose}
              />
            </div>
          </div>
          <Form />
        </div>
      </div>
      <ToastContainer />
    </>
  );

};

export default Modal;