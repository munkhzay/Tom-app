import styles from "@/component/tomSty.module.css";
import { Shadow } from "@/component/Icon";

let heads = ["About", "Work", "Testimonials", "Contact"];

const Headtext = (props) => {
  const { text } = props;
  return <div className={styles.headtext}>{text}</div>;
};

export const CV = () => {
  return (
    <div className="sm: hidden lg:block">
      <div className="flex flex-row gap-5 sm:max-hidden ">
        {heads.map((head) => {
          return <Headtext text={head}></Headtext>;
        })}{" "}
        <Shadow className={styles.headshadow}> </Shadow>
        <p className={styles.down}>Downloud CV</p>
      </div>
    </div>
  );
};
