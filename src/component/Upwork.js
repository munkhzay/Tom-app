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
  let { skill, experience } = props;
  return (
    <div>
      <div className=" mb-4 text-lg font-semibold text-gray-900 lg:text-center ">
        {experience}
      </div>
      <li className="px-8 dark:text-gray-300 text-base font-normal text-gray-700 mb-1 lg:text-center">
        {skill}
      </li>
    </div>
  );
};
const Name = (props) => {
  const { head, date, experience, data, skills } = props;
  return (
    <div className="lg:flex justify-between ">
      <div>{head}</div>
      <div className="lg:flex lg:flex-row-reverse gap-52 ">
        <div className="mb-4 text-base font-normal text-gray-700  dark:text-gray-300">
          {date}
        </div>
        <div className="mb-4 text-lg font-semibold text-gray-900  dark:text-gray-200 lg:text-center ">
          {experience}
        </div>
        {/* {data.skills.map((skill) => {
          return <List skill={skill}></List>;
        })} */}
      </div>
    </div>
  );
};
export const Work = () => {
  return (
    <div className="lg:px-8">
      {datas.map((data) => {
        return (
          <div className="p-8 bg-white rounded-xl mb-6 ,  dark:bg-gray-800 lg:mb-12 lg:mx-8 ">
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
