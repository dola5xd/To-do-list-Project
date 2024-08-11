import Header from "./Header";
import Form from "./Form";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Applayout() {
  const { theme } = useSelector((store) => store.tasks);

  useEffect(
    () =>
      theme === "dark"
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark"),
    [theme]
  );

  return (
    <main className="flex flex-col items-center bg-LT_lightGrayishBlue_100 dark:bg-DT_darkBlue min-h-[100vh] text-LT_darkGrayishBlue dark:text-white">
      <Header />
      <Form />
    </main>
  );
}

export default Applayout;
