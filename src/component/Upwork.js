import { Upwork } from "./Upworksvg";
let datas = [
  {
    head: <Upwork />,
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
    head: <Upwork />,
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
    head: <Upwork />,
    date: "Dec 2015 - May 2017",
    experience: "Full Stack Developer",
    skills: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

// const Cvs=[{  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//   "Ut pretium arcu et massa semper, id fringilla leo semper."
//   "Sed quis justo ac magna.",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",},]

const List = (props) => {
  let { skill } = props;
  return (
    <li className="px-8 text-base font-normal text-gray-700 mb-1 lg:text-center">
      {skill}
    </li>
  );
};
const Name = (props) => {
  const { head, date, experience } = props;
  return (
    <div className="lg:flex justify-between">
      <div>{head}</div>
      <div className="lg:flex lg:flex-row-reverse ">
        <div className="mb-4 text-base font-normal text-gray-700">{date}</div>
        <div className="mb-4 text-lg font-semibold text-gray-900">
          {experience}
        </div>
      </div>
    </div>
  );
};
export const Work = () => {
  return (
    <div className="lg:px-8">
      {datas.map((data) => {
        return (
          <div className="p-8 bg-white rounded-xl mb-6 lg:mb-12 lg:mx-8 ">
            <Name
              head={data.head}
              date={data.date}
              experience={data.experience}
            ></Name>
            {data.skills.map((skill) => {
              return <List skill={skill}></List>;
            })}
          </div>
        );
      })}
    </div>
  );
};
