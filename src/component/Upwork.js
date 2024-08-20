import { Upwork } from "@/component/Icon";
let datas = [
  {
    // head: <Upwork />,
    date: "Nov 2021 - Present",
    experience: "Sr. Frontend Developer",
    skills: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    // head: <Upwork />,
    date: "Jul 2017 - Oct 2021",
    experience: "Team Lead",
    skills: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    // head: <Upwork />,
    date: "Dec 2015 - May 2017",
    experience: "Full Stack Developer",
    skills: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

const List = (props) => {
  let { skill } = props;
  return <li>{skill}</li>;
};
const Name = (props) => {
  const { head, date, experience, skills } = props;
  return (
    <div>
      {/* <h1>{head}</h1> */}
      <p>{date}</p>
      <h1>{experience}</h1>
      <li>{skills}</li>
      {/* {skills.map((skill) => {
        return <List skill={datas.skills.skill}></List>;
      })} */}
    </div>
  );
};
export const Work = () => {
  return (
    <div>
      {datas.map((data) => {
        return (
          <div>
            <Name
              // head={data.head}
              date={data.date}
              experience={data.experience}
              skills={data.skills}
            ></Name>
            {data.skills.map((skill) => {
              return <List skill={data.skills}></List>;
            })}
          </div>
        );
      })}
    </div>
  );
};
