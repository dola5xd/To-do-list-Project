import { useDispatch, useSelector } from "react-redux";
import { operationsTasks } from "./taskSlice";

function TaskOperations() {
  const { status } = useSelector((store) => store.tasks);

  const dispatch = useDispatch();
  function handelClick(type) {
    dispatch(operationsTasks(type));
  }

  return (
    <div className="flex items-center justify-center mt-[4vh] gap-3 bg-LT_lightGray dark:bg-DT_darkDesaturatedBlue  dark:text-DT_darkGrayishBlue_100 rounded-lg py-3 px-[5vw] lg:mt-[2vh] text-sm sm:text-base">
      <button
        onClick={() => handelClick("all")}
        className={`hover:text-LT_darkGrayishBlue dark:hover:text-DT_lightGrayishBlue_Hover ${
          status === "all" ? "text-brightBlue" : ""
        }`}
      >
        All
      </button>
      <button
        onClick={() => handelClick("active")}
        className={`hover:text-LT_darkGrayishBlue dark:hover:text-DT_lightGrayishBlue_Hover ${
          status === "active" ? "text-brightBlue" : ""
        }`}
      >
        Active
      </button>
      <button
        onClick={() => handelClick("completed")}
        className={`hover:text-LT_darkGrayishBlue dark:hover:text-DT_lightGrayishBlue_Hover ${
          status === "completed" ? "text-brightBlue" : ""
        }`}
      >
        Completed
      </button>
    </div>
  );
}

export default TaskOperations;
