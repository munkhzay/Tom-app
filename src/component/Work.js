import { Wsvg } from "./Icons/Worksvg";

const projectDatas = [
  {
    photo: "Picture.png",
    title: "Ubcab",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skills: [
      "React",
      "Next.js",
      "tpescript",
      "Nest.js",
      "Postgre SQL",
      "TailwindCss",
      "Figma",
      "Cypress",
      "Storybook",
      "git",
    ],
    svg: <Wsvg />,
  },
  {
    photo: "mentor.png",
    title: "Mentor Hub",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skills: [
      "React",
      "Next.js",
      "tpescript",
      "Nest.js",
      "Postgre SQL",
      "TailwindCss",
      "Figma",
      "Cypress",
      "Storybook",
      "git",
    ],
    svg: <Wsvg />,
  },
  {
    photo: "Itiom.png",
    title: "iToim",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skills: [
      "React",
      "Next.js",
      "tpescript",
      "Nest.js",
      "Postgre SQL",
      "TailwindCss",
      "Figma",
      "Cypress",
      "Storybook",
      "git",
    ],
    svg: <Wsvg />,
  },
];

const Content = (props) => {
  const { photo, title, para, skills, svg, index } = props;
  console.log(index);
  return (
    <>
      {index === 1 ? (
        <div className="grid grid-2  mb-12 border-slate-300 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col gap-6 p-8 rounded-lg  border border-dashed-200 border-slate-100 lg:p-12  dark:bg-gray-800">
            <h1 className="text-lg font-semibold text-gray-900  dark:text-gray-100">
              {title}
            </h1>

            <p className="text-base font-normal text-gray-700  dark:text-gray-400">
              {para}
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => {
                return <Codesapp skill={skill}></Codesapp>;
              })}
            </div>
            <p>{svg}</p>
          </div>
          <div className="bg-gray-100 flex  justify-center items-center dark:bg-gray-600">
            <img
              className="p-8 lg:p-12 w-120 h-96 rounded-lg  dark:bg-gray-600 "
              src={photo}
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-2  mb-12 border-slate-300 lg:grid-cols-2 lg:px-8">
          <div className="bg-gray-100 flex  justify-center items-center dark:bg-gray-600">
            <img
              className="p-8 dark:bg-gray-600 lg:p-12 w-120 h-96 rounded-lg "
              src={photo}
            />
          </div>
          <div className="flex flex-col gap-6 p-8 rounded-lg  border border-dashed-200 border-slate-100 lg:p-12 dark:bg-gray-800">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {title}
            </h1>

            <p className="text-base font-normal text-gray-700 dark:text-gray-400">
              {para}
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => {
                return <Codesapp skill={skill}></Codesapp>;
              })}
            </div>
            <p>{svg}</p>
          </div>
        </div>
      )}
    </>
  );
};
const Codesapp = (props) => {
  const { skill } = props;
  return (
    <div className="text-sm font-medium rounded-xl border-inherit px-5 py-1 bg-gray-200 dark:text-gray-300 dark:bg-gray-600">
      {skill}
    </div>
  );
};
export const ProWork = () => {
  return (
    <div className="mb-4">
      {projectDatas.map((projectData, index) => {
        return (
          <Content
            index={index}
            photo={projectData.photo}
            title={projectData.title}
            para={projectData.para}
            svg={projectData.svg}
            skills={projectData.skills}
          ></Content>
        );
      })}
    </div>
  );
};
