import styles from "@/component/tomSty.module.css";
import { Shadow } from "./Shadow";

let heads = ["About", "Work", "Testimonials", "Contact"];

const Headtext = (props) => {
  const { text } = props;
  return (
    <div className="text-base text-gray-600 dark:text-gray-400 content-center">
      {text}
    </div>
  );
};

const toggleMode = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
};

export const CV = () => {
  return (
    <div className="sm: hidden lg:block">
      <div className="flex flex-row gap-5 sm:max-hidden ">
        {heads.map((head) => {
          return <Headtext text={head}></Headtext>;
        })}

        <Shadow className={styles.headshadow} />

        <div>
          <button className="flex items-center text-white px-4 py-1 text-base bg-gray-950 rounded-2xl dark:bg-gray-100 dark:text-gray-950 ">
            Downloud CV
          </button>
        </div>
      </div>
    </div>
  );
};
