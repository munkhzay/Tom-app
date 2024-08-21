import { Wsvg } from "./Icons/Worksvg";
const projectDatas = [
  {
    photo: "",
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
    photo: "ub",
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
    photo: "<Ubcab />",
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
  const { photo, title, para, skills, svg } = props;
  return (
    <div className="lg:flex ">
      <p>{photo}</p>
      <div className="flex flex-col gap-6 p-8 ">
        <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
        <p className="text-base font-normal text-gray-700">{para}</p>
        <p>{svg}</p>
      </div>
    </div>
  );
};
const Codesapp = (props) => {
  const { skill } = props;
  return (
    <a className="text-sm font-medium rounded-xl px-5 py-1 bg-gray-200">
      {skill}
    </a>
  );
};
export const ProWork = () => {
  return (
    <div>
      {projectDatas.map((projectData) => {
        return (
          <Content
            photo={projectData.photo}
            title={projectData.title}
            para={projectData.para}
            svg={projectData.svg}
          ></Content>
        );
      })}
    </div>
  );
};

// {projectData.skills.map((skill) => {
//               return <Codesapp skill={skill}></Codesapp>;
//             })}
