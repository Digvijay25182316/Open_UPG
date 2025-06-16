import React, { useEffect } from "react";

const FullScreenModal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const handleEsc = (e: any) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleOutsideClick = (e: any) => {
    if (e.target.id === "modal-backdrop") onClose();
  };

  return (
    <div
      id="modal-backdrop"
      onClick={handleOutsideClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
    >
      <div className="relative w-full h-full bg-white p-6 overflow-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="w-full h-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FullScreenModal;
