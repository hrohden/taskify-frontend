import { useForm } from "react-hook-form";
import Modal from "./Modal";
import { useCreateTaskMutation } from "./app/taskSlice";
import { Task } from "./types/Task";

type NewTaskModalFormProps = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
};

const NewTaskModalForm = (props: NewTaskModalFormProps) => {
  const form = useForm<Task>({
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const [createTask] = useCreateTaskMutation();
  return (
    <Modal
      title="New task"
      isOpen={props.isModalOpen}
      onClose={() => props.setIsModalOpen(false)}
    >
      <form
        onSubmit={form.handleSubmit((data) => {
          console.log(data);
          // createTask({ id: task.id, ...data });
        })}
      >
        <input type="text" {...form.register("title")} />
        <input type="text" {...form.register("description")} />
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};
export default NewTaskModalForm;
