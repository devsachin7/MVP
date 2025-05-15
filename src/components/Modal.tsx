import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

interface ModalProps {
    isOpen: boolean;
    title?: string;
    children: React.ReactNode;
    size?: "sm" | "md" | "lg" | "xl" | "xxl";
}

const sizeMap = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl", // large size
    xxl: "max-w-[1200px] md:max-w-[1400px] lg:max-w-[1600px]", // extra large size
  };

const Modal: React.FC<ModalProps> = ({ isOpen,  title = '', children, size = "xl", }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div  className={`w-full mx-4 sm:mx-8 rounded-xl bg-white p-6 shadow-xl relative ${sizeMap[size]} max-h-[90vh] overflow-y-auto`}>
              
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
