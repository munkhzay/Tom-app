import { CV } from "@/component/tom";
import styles from "@/component/tomSty.module.css";
import { Tomintroduction, Location, Tomcareer } from "@/component/Para";
// import { Actions } from "@/component/Icon";
import { Code } from "@/component/Tools";
import { Actions, TOM, Kebab } from "@/component/Icon";

const Home = () => {
  return (
    <div>
      <div className="flex space-x-64 p-4">
        <TOM></TOM>
        <Kebab></Kebab>
      </div>
      <div>
        <img className={styles.tom} src="Tom.png" />
        <div className="flex flex-col">
          <Tomintroduction></Tomintroduction>
          <Location></Location>
          <Actions></Actions>
        </div>
      </div>
    </div>
    // <div className={styles.tomcv}>
    //   <div className={styles.headcontent}>
    //
    //     <TOM></TOM>
    //     <CV></CV>
    //   </div>
    //   <div className={styles.tomcontent}>
    //     <div className={styles.tomContainer}>
    //       <Tomintroduction></Tomintroduction>
    //       <Location></Location>
    //       <Actions></Actions>
    //     </div>
    //     <div>
    //       <img className={styles.tom} src="Tom.png" />
    //     </div>
    //   </div>
    //   <div className={styles.cv2}>
    //     <a className={styles.part2}>About me</a>
    //     <div className={styles.part2content}>
    //       <div>
    //         <img className={styles.tom2} src="Tom2.png" />
    //       </div>
    //       <Tomcareer></Tomcareer>
    //     </div>
    //   </div>
    //   {/* <div>
    //     <Code></Code>
    //   </div> */}
    // </div>
  );
};
export default Home;
