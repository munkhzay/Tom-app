import styles from "@/component/tomSty.module.css";
let apps = [
  { text: "JavaScript", img: "jhbfhv" },
  { text: "JavaScript", img: "jhbfhv" },
  { text: "JavaScript", img: "jhbfhv" },
];
const Tool = (props) => {
  const { text, src } = props;
  return (
    <div>
      <img src={src}></img>
      <p>{text}</p>
    </div>
  );
};
export const Code = () => {
  return (
    <div className={styles.code}>
      {apps.map((app) => {
        return <Tool src={app.img} text={app.text}></Tool>;
      })}
    </div>
  );
};
