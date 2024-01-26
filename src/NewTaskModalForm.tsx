import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaRocket } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import * as z from "zod";
import Modal from "./Modal";
import { useCreateTaskMutation } from "./app/taskSlice";
import { CreateTask } from "./types/Createtask";
import { Status } from "./types/Status";

type NewTaskModalFormProps = {
  status: Status;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
};

const NewTaskModalForm = (props: NewTaskModalFormProps) => {
  const schema = z.object({
    title: z.string().min(1, { message: "Title is mandatory" }),
    description: z.string().optional(),
    statusId: z.number(),
  });
  const form = useForm<CreateTask>({
    defaultValues: {
      title: "",
      description: "",
      statusId: props.status.id,
    },
    resolver: zodResolver(schema),
  });
  const [createTask] = useCreateTaskMutation();
  return (
    <Modal
      title="New task"
      isOpen={props.isModalOpen}
      onClose={() => {
        props.setIsModalOpen(false);
        form.reset();
      }}
    >
      <form
        onSubmit={form.handleSubmit((data) => {
          createTask(data);
          props.setIsModalOpen(false);
          form.reset();
        })}
        className="grid gap-y-4"
      >
        <div>
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-medium dark:text-white"
          >
            Title (mandatory)
          </label>
          <div className="relative">
            <input
              type="text"
              {...form.register("title")}
              className={
                form.formState.errors.title?.message
                  ? "block w-full rounded-lg border border-red-500 px-4 py-3 text-sm focus:border-red-500 focus:ring-red-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                  : "block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
              }
            />
            {form.formState.errors.title?.message && (
              <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3 text-red-600">
                <MdErrorOutline />
              </div>
            )}
          </div>
          {form.formState.errors.title?.message && (
            <p className="mt-2 text-sm text-red-600">
              {form.formState.errors.title?.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="description"
            className="mb-2 block text-sm dark:text-white"
          >
            Description
          </label>
          <input
            type="text"
            {...form.register("description")}
            className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
          />
        </div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          <FaRocket /> Create!
        </button>
      </form>
    </Modal>
  );
};
export default NewTaskModalForm;
