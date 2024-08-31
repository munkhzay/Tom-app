import { Upwork } from "./Upworksvg";
let datas = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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

// const List = (props) => {
//   let { skill, experience } = props;
//   return (
//     <div>
//       <div className=" mb-4 text-lg font-semibold text-gray-900 lg:text-center ">
//         {experience}
//       </div>
//       <li className="px-8 dark:text-gray-300 text-base font-normal text-gray-700 mb-1 lg:text-center">
//         {skill}
//       </li>
//     </div>
//   );
// };
// const Name = (props) => {
//   const { head, date, experience, data, skills } = props;
//   return (
//     <div className="lg:flex justify-between ">
//       <div>{head}</div>

//       <div className="lg:flex lg:flex-row-reverse gap-52 ">
//         <div className="mb-4 text-base font-normal text-gray-700  dark:text-gray-300">
//           {date}
//         </div>
//         <div className="mb-4 text-lg font-semibold text-gray-900  dark:text-gray-200 lg:text-center ">
//           {experience}
//         </div>{" "}
//       </div>
//     </div>
//   );
// };
// const Date = (props) => {
//   const { date } = props;
//   return (
//     <div className="mb-4 text-base font-normal text-gray-700  dark:text-gray-300">
//       {date}
//     </div>
//   );
// };
// export const Work = () => {
//   return (
//     <div className="lg:px-8">
//       {datas.map((data) => {
//         return (
//           <div className="p-8 bg-white rounded-xl mb-6 ,  dark:bg-gray-800  lg:mb-12 lg:mx-8 ">
//             <Name
//               key={data.id}
//               head={data.head}
//               date={data.date}
//               experience={data.experience}
//             ></Name>
//             {/* <Date date={data.date}></Date>
//             <List experience={data.experience}></List> */}
//             {data.skills.map((skill) => {
//               return <List skill={skill}></List>;
//             })}
//           </div>
//         );
//       })}
//     </div>
//   );
// };
export const Work = () => {
  return (
    <div className="">
      {datas.map((data, index) => {
        const { head, date, experience } = data;
        return (
          <div
            key={index}
            className="p-8 bg-white rounded-xl mb-6 ,  dark:bg-gray-800  lg:mb-12 lg:mx-8 lg:flex lg:justify-center items-center"
          >
            <div className="lg:flex lg:gap-12 ">
              <div>{head}</div>
              <div className="lg:flex lg:flex-row-reverse ">
                <div className="mb-4 text-base font-normal text-gray-700  dark:text-gray-300">
                  {date}
                </div>

                <div className="mb-4 text-lg font-semibold text-gray-900  dark:text-gray-200 lg:text-start">
                  {experience}
                  {data.skills.map((skill, index) => {
                    return (
                      <url key={index}>
                        <li className="px-8 dark:text-gray-300 text-base font-normal text-gray-700 mb-1 lg:w-[492px]">
                          {skill}
                        </li>
                      </url>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
