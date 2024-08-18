import { CV } from "@/component/tom";
import styles from "@/component/tomSty.module.css";
import { Tomintroduction, Location, Tomcareer } from "@/component/Para";
import { Actions, Tom, Tom2 } from "@/component/icons";
import { Code } from "@/component/Tools";

const Home = () => {
  return (
    <div className={styles.tomcv}>
      <div className={styles.headcontaint}>
        <h2>Tom</h2>
        <CV></CV>
      </div>
      <div className={styles.tomcontent}>
        <div className={styles.tomContainer}>
          <Tomintroduction></Tomintroduction>
          <Location></Location>
          <Actions></Actions>
        </div>
        <div>
          <Tom></Tom>
        </div>
      </div>
      <div className={styles.cv2}>
        <a className={styles.part2}>About me</a>
        <div className={styles.part2content}>
          <Tom2></Tom2>
          <Tomcareer></Tomcareer>
        </div>
      </div>
      <div>
        <Code></Code>
      </div>
    </div>
  );
};
export default Home;
