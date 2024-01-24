type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 top-0 z-50 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div className="relative left-2/4 top-2/4 w-1/3 -translate-x-2/4 -translate-y-2/4 rounded-lg bg-white p-8">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
