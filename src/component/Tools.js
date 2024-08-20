import styles from "@/component/tomSty.module.css";
import { JsIcon, Typesc } from "./Icons/JsIcon";
let apps = [
  { text: "JavaScript", img: <JsIcon /> },
  { text: "Typescript", img: <Typesc /> },
  { text: "React", img: "jhbfhv" },
  { text: "Next.js", img: "jhbfhv" },
  { text: "Node.js", img: "jhbfhv" },
  { text: "Express.js", img: "jhbfhv" },
  { text: "Nest.js", img: "jhbfhv" },
  { text: "Socket.io", img: "jhbfhv" },
  { text: "PostgreSQL", img: "jhbfhv" },
  { text: "MongoDB", img: "jhbfhv" },
  { text: "Sass/Scss", img: "jhbfhv" },
  { text: "Tailwindcss", img: "jhbfhv" },
  { text: "ReFigmaact", img: "jhbfhv" },
  { text: "Cypress", img: "jhbfhv" },
  { text: "Tailwindcss", img: "jhbfhv" },
  { text: "ReFigmaact", img: "jhbfhv" },
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
    <div className="flex flex-wrap gap-6">
      {apps.map((app) => {
        return <Tool src={app.img} text={app.text}></Tool>;
      })}
    </div>
  );
};
