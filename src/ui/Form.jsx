import NewTask from "../task/NewTask";
import TaskOperations from "../task/TaskOperations";
import TasksList from "./TasksList";

function Form() {
  return (
    <div className="md:-translate-y-[7%]">
      <NewTask />

      <TasksList />

      <TaskOperations />
    </div>
  );
}

export default Form;
