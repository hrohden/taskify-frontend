import { MdClose } from "react-icons/md";

type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ title, isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 top-0 z-50 bg-black bg-opacity-50 backdrop-blur"
      onClick={onClose}
    >
      <div className="relative left-2/4 top-2/4 w-1/3 -translate-x-2/4 -translate-y-2/4 rounded-xl bg-white shadow-lg">
        <div className="flex items-center justify-between border-b px-4 py-3 dark:border-gray-700">
          <h3 className="font-bold text-gray-800 dark:text-gray-200">
            {title}
          </h3>
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            onClick={onClose}
          >
            <MdClose />
          </button>
        </div>
        <div className="p-4">{children}</div>
        <div className="p-4">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
