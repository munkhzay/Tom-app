import { CV } from "@/component/tom";
import { Tomintroduction, Location, Tomcareer } from "@/component/Para";
import { Code } from "@/component/Tools";
import { Actions } from "@/component/Actions";
import { TOM } from "@/component/location";
import { Kebab } from "@/component/Kebab";
import { Work } from "@/component/Upwork";
import { ProWork } from "@/component/Work";
import { Texts } from "@/component/Text";
import { Connect } from "@/component/Connect";

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
        <Texts text={"About me"}></Texts>
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
          <Texts
            text={"Skills"}
            para={"The skills, tools and technologies I am really good at:"}
          ></Texts>
        </div>
        <div className="mt-4 px-8 lg:mt-12">
          <Code></Code>
        </div>
      </div>
      <div className="bg-gray-50 py-16 px-4 lg:py-24 lg:px-20">
        <div>
          <Texts
            text={"Experience"}
            para={"Here is a quick summary of my most recent experiences:"}
          ></Texts>
        </div>
        <div className="">
          <Work></Work>
        </div>
      </div>
      <div className="py-16 px-4 lg:py-24 lg:px-20">
        <Texts
          text={"Work"}
          para={"Some of the noteworthy projects I have built:"}
        ></Texts>
        <ProWork></ProWork>
      </div>
      <div>
        <Texts
          text={"Get in touch"}
          para={
            "What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
          }
        ></Texts>
        <div>
          <Connect></Connect>
        </div>

        <p className=" text-center font-normal text-gray-600 text-lg">
          You may also find me on these platforms!
        </p>
        <div className="flex justify-center">
          <Actions></Actions>
        </div>
      </div>
    </div>
  );
};
export default Home;
