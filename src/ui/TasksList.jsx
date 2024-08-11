import TaskItem from "../task/TaskItem";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";
import { clearCompleted } from "../task/taskSlice";

function TasksList() {
  const { tasks, status, length, completeTasks, activeTasks } = useSelector(
    (store) => store.tasks
  );

  const dispatch = useDispatch();

  function clearAllTasks() {
    dispatch(clearCompleted());
  }

  if (status === "loading") return <Spinner />;

  if (tasks.length === 0)
    return (
      <span className="flex flex-col gap-3 bg-LT_lightGray dark:bg-DT_darkDesaturatedBlue rounded-lg py-7 items-center  sm:text-[1.5rem] font-bold dark:text-DT_darkGrayishBlue_100 ">
        Add new Task to Start ⭐
      </span>
    );

  if (activeTasks.length === 0 && status === "active")
    return (
      <span className="flex flex-col gap-3 bg-LT_lightGray dark:bg-DT_darkDesaturatedBlue rounded-lg py-7 items-center  sm:text-[1.5rem] font-bold dark:text-DT_darkGrayishBlue_100">
        No active Task founded 😢 <span>Let's create one 🙌</span>
      </span>
    );
  if (completeTasks.length === 0 && status === "completed")
    return (
      <span className="flex flex-col gap-3 bg-LT_lightGray dark:bg-DT_darkDesaturatedBlue rounded-lg py-7 items-center  sm:text-[1.5rem] font-bold dark:text-DT_darkGrayishBlue_100">
        No Completed Task founded 😢 <span>Let's complete one 🏆</span>
      </span>
    );

  return (
    <>
      <ul className="flex flex-col gap-3 bg-LT_lightGray dark:bg-DT_darkDesaturatedBlue rounded-t-lg py-3 overflow-y-scroll lg:w-[45vw] h-[35vh] lg:py-2">
        {status === "all"
          ? tasks.map((item) => <TaskItem item={item} key={item.id} />)
          : status === "active"
          ? activeTasks.map((item) => <TaskItem item={item} key={item.id} />)
          : completeTasks.map((item) => <TaskItem item={item} key={item.id} />)}
      </ul>
      <span className="flex item-center justify-between px-[5vw] text-DT_darkGrayishBlue_100 py-[0.9rem] sm:py-[1.2rem] bg-LT_lightGray  dark:bg-DT_darkDesaturatedBlue rounded-b-lg lg:mt-5 text-sm sm:text-base">
        <span>{length} items Left</span>
        <span className="flex items-center gap-2">
          <button
            className="hover:text-LT_darkGrayishBlue dark:hover:text-DT_lightGrayishBlue_Hover"
            onClick={clearAllTasks}
          >
            Clear Completed
          </button>
        </span>
      </span>
    </>
  );
}

export default TasksList;
