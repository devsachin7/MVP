import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl", // large size
  };

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title = '', children, size = "xl", }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div  className={`w-full rounded-xl bg-white p-6 shadow-xl relative ${sizeMap[size]}`}>
                <button onClick={onClose} className="absolute top-2 right-3 text-xl text-gray-500 hover:text-red-500">
                    ×
                </button>
                {/* <div className="w-full"> */}
                <Card title={title}>
                    {children}

                </Card>
                {/* </div> */}
            </div>
        </div>
        ,
        document.body
    );
};

export default Modal;
