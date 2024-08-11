import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "./taskSlice";

function TaskItem({ item }) {
  const { isCompleted, task, id } = item;

  const dispatch = useDispatch();

  function completedTask() {
    dispatch(completeTask(id));
  }
  function handelDelete() {
    dispatch(deleteTask(id));
  }
  return (
    <li className="flex items-center justify-between  list-none w-[75vw] py-[0.6rem] sm:py-[1rem] px-[5vw] border-b-2 dark:border-y-DT_darkGrayishBlue lg:w-full lg:px-7 ">
      <div className="flex items-center gap-4">
        <span
          onClick={completedTask}
          htmlFor="newTask"
          className={`dark:text-white cursor-pointer block w-[35px] h-[35px] rounded-full border-2 dark:border-DT_darkGrayishBlue duration-500 hover:border-linearBackground_from dark:hover:border-DT_lightGrayishBlue_Hover ${
            isCompleted ? "complete" : ""
          }`}
        >
          {isCompleted ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="9"
              className="scale-[2]"
            >
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="2"
                d="M1 4.304L3.696 7l6-6"
              />
            </svg>
          ) : (
            ""
          )}
        </span>
        <p
          className={`leading-[5px] text-sm sm:text-[1rem] text-center capitalize ${
            isCompleted
              ? "line-through text-LT_darkGrayishBlue_100 dark:text-DT_darkGrayishBlue_500"
              : "text-LT_darkGrayishBlue dark:text-DT_lightGrayishBlue "
          } `}
        >
          {task}
        </p>
      </div>
      <button
        onClick={() => handelDelete()}
        className="dark:text-DT_darkGrayishBlue_100 text-[1.2rem] duration-500 dark:hover:text-DT_lightGrayishBlue_Hover"
      >
        &#10005;
      </button>
    </li>
  );
}

export default TaskItem;
