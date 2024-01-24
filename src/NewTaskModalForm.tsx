import Modal from "./Modal";

type NewTaskModalFormProps = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
};

const NewTaskModalForm = (props: NewTaskModalFormProps) => {
  return (
    <Modal
      title="New task"
      isOpen={props.isModalOpen}
      onClose={() => props.setIsModalOpen(false)}
    >
      <h1>Hello, World!</h1>
    </Modal>
  );
};
export default NewTaskModalForm;
