import { useDispatch } from "react-redux";
import { createTask } from "./taskSlice";
import { useState } from "react";

function NewTask() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  function addTask(e) {
    e?.preventDefault();
    console.log();
    if (task.length <= 1) return;
    const id = Math.ceil(Math.random() * 1000000);
    const newTask = {
      id,
      task,
      isComleted: false,
    };
    dispatch(createTask(newTask));
    setTask("");
  }

  return (
    <form
      onSubmit={(e) => addTask(e)}
      className="flex items-center gap-4 bg-LT_lightGray dark:bg-DT_darkDesaturatedBlue w-[75vw] py-[0.7rem] sm:py-[1rem]  px-[5vw] rounded-lg -translate-y-[60%] lg:w-[45vw] lg:px-[2vw] text-sm sm:text-base"
    >
      <label
        onClick={addTask}
        htmlFor="newTask"
        className="dark:text-white cursor-pointer block min-w-[35px] min-h-[35px] rounded-full border-2  dark:border-DT_darkGrayishBlue duration-500 hover:border-linearBackground_from dark:hover:border-DT_lightGrayishBlue_Hover"
      />
      <input
        className="bg-transparent outline-none 
        placeholder:text-LT_darkGrayishBlue_100 
        dark:placeholder:text-DT_darkGrayishBlue_100 dark:text-DT_lightGrayishBlue text-sm sm:text-[1rem] w-[90%]"
        id="newTask"
        type="text"
        placeholder="Create a new Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
    </form>
  );
}

export default NewTask;
