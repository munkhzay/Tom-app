import styles from "@/component/tomSty.module.css";

export const Actions = () => {
  return (
    <div>
      <img src={"/component/photos/Icon Button.png"}></img>
      <img src={"/component/photos/Icon Icon.png"}></img>
    </div>
  );
};
export const Tom = () => {
  return (
    <img
      className={styles.tom}
      src={"src/component/photos/Pic Container.png"}
    ></img>
  );
};
export const Tom2 = () => {
  return (
    <img
      src={"src/component/photos/Pic Container.png"}
      className={styles.tom}
    />
  );
};
