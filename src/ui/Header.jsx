import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../task/taskSlice";

function Header() {
  const { theme } = useSelector((store) => store.tasks);
  const dispatch = useDispatch();
  return (
    <header
      className="flex items-center justify-between px-[3rem] py-[1rem]  
    bg-Mobile_Light dark:bg-Mobile_dark bg-no-repeat bg-cover min-h-[30vh] w-full lg:bg-desktop_Light lg:dark:bg-desktop_dark md:px-[8rem] lg:px-[30vw] lg:min-h-[35vh]"
    >
      <span className="tracking-[0.5em] font-bold text-LT_lightGray dark:text-white text-[2rem] cursor-default">
        TODO
      </span>
      <button onClick={() => dispatch(changeTheme(theme === "dark"))}>
        <img
          src={
            theme === "dark" ? "/images/icon-sun.svg" : "/images/icon-moon.svg"
          }
          alt="sun"
        />
      </button>
    </header>
  );
}

export default Header;
