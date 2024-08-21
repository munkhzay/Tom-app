import { CV } from "@/component/tom";
import styles from "@/component/tomSty.module.css";
import { Tomintroduction, Location, Tomcareer } from "@/component/Para";
// import { Actions } from "@/component/Icon";
import { Code } from "@/component/Tools";
import { Actions, TOM, Kebab } from "@/component/Icon";

import { Work } from "@/component/Upwork";

const Home = () => {
  return (
    <div className="">
      <div className="flex justify-between lg:px-20 lg:py-4">
        <TOM></TOM>
        <Kebab></Kebab>
        <CV></CV>
      </div>
      <div className="flex flex-col  my-16 gap-y-12 px-4 lg:flex-row-reverse lg:gap-x-12 lg:py-24 lg:px-20 lg:my-0">
        <div className=" flex justify-center lg:w-1/2 lg:flex lg:justify-end lg:pr-8">
          {" "}
          <img src="Tom.png" className="w-auto h-auto " />
        </div>
        <div className="flex flex-col space-y-12 lg:grid-rows-2 lg:w-1/2 lg:pl-8">
          <Tomintroduction></Tomintroduction>
          <Location></Location>
          <Actions></Actions>
        </div>
      </div>
      <div className="bg-gray-50 text-center  py-16 px-4 lg:py-24 lg:px-20">
        <div className="mb-6 lg:mb-12">
          <a className="text-sm font-medium text-gray-600 p-2 rounded-xl border-gray-200 bg-gray-200 border-2 ">
            About me
          </a>
        </div>
        <div className="gap-y-12 lg:flex lg:">
          <div className="flex justify-center lg:w-1/2 lg:pl-8 lg:justify-start">
            <img className="w-auto h-auto mb-12 " src="Tom2.png" />
          </div>
          <div className="lg:w-1/2 lg:pr-8">
            <Tomcareer></Tomcareer>
          </div>
        </div>
      </div>
      <div className="py-16 px-4 lg:py-24 lg:px-20">
        <div className="gap-y-4 px-8">
          <div className="mb-4 text-center gap-y-6 ">
            <a className="text-sm font-medium text-gray-600 py-1 px-5 rounded-xl border-gray-200 bg-gray-200 border-2 ">
              Skills
            </a>
          </div>
          <div className=" text-center font-normal text-gray-600 text-lg">
            The skills, tools and technologies I am really good at:
          </div>
        </div>
        <div className="mt-4 px-8 lg:mt-12">
          <Code></Code>
        </div>
      </div>
      <div className="bg-gray-50 py-16 px-4 lg:py-24 lg:px-20">
        <div>
          <div className="mb-6 text-center lg:mb-12">
            <a className="text-sm font-medium text-gray-600 p-2 rounded-xl border-gray-200 bg-gray-200 border-2 ">
              Experience
            </a>
          </div>
          <div className="mb-6 text-center font-normal text-gray-600 text-lg lg:mb-12">
            Here is a quick summary of my most recent experiences:
          </div>
        </div>
        <div className="">
          <Work></Work>
        </div>
      </div>
    </div>
  );
};
export default Home;
