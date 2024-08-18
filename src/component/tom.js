import styles from "@/component/tomSty.module.css";
let heads = ["About", "Work", "Testimonials", "Contact", "Downloud CV"];
const Headtext = (props) => {
  const { text } = props;
  return <div>{text}</div>;
};
export const CV = () => {
  return (
    <div className={styles.head}>
      {heads.map((head) => {
        return <Headtext text={head}></Headtext>;
      })}
    </div>
  );
};
