import styles from "@/component/tomSty.module.css";
import { Shadow, Locationsvg, Actions, hi } from "@/component/Icon";
export const Tomintroduction = () => {
  return (
    <div>
      <h1>Hi, Im Tom </h1>
      <p className={styles.headtext}>
        I specialize in full stack development, particulary with React.js and
        Node .js. My main goal is to create exceptional dijital experiences that
        are fast, visusally appealing, and accessible to everyone. With over
        7years of experience in web development, I continue to find joy in
        crafting innovative solutions and designs.
      </p>
    </div>
  );
};
export const Location = () => {
  return (
    <div>
      <div className={styles.flex}>
        <Locationsvg></Locationsvg>
        <p className={styles.headtext}>Ulaanbaatar Mongolia</p>
      </div>
      <div className={styles.flex}>
        <Shadow></Shadow>
        <p className={styles.headtext}>Available for new project</p>
      </div>
    </div>
  );
};
export const Tomcareer = () => {
  return (
    <div className={styles.part2para}>
      <h1>Curious about me? Here you have it:</h1>
      <p>
        I'm a designer turned full stack developer, passionate about React.js
        and Node.js. I excel in blending technical and visual aspects to craft
        exceptional digital products, prioritizing user experience, precise
        design, and optimized code.
      </p>
      <p>
        Since starting my web development journey in 2015, I've embraced
        challenges and kept up with the latest tech trends. Now in my early
        thirties, seven years in, I'm building cutting-edge web apps using
        Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
      </p>
      <p>
        With a progressive mindset, I enjoy the entire product development
        process, from ideation to execution. Off duty, you'll find me on
        Twitter, tracking startup journeys, or unwinding. Follow me for tech
        insights and public project updates on Twitter or GitHub.
      </p>
      <p>Finally, some quick bits about me.</p>
      <div className={styles.list}>
        <div>
          <li>B.E. in Computer Engineering</li>
          <li>Full time freelancer</li>
        </div>
        <div>
          <li>Avid learner</li>
        </div>
      </div>
      <p>
        One last thing, I'm available for freelance work, so feel free to reach
        out and say hello! I promise I don't bite 😉
      </p>
    </div>
  );
};
