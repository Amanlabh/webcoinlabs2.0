import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
          Work smarter,not harder. 
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
     
          <p className="body-2 mb-[2rem] text-n-3 flex items-center">
  <img src={check} width={24} height={24} alt="check" />
  <span className="ml-2">
 <h6 className="h6 mb-6">Digital Agency & Marketing:</h6>
We are Data Driven Agency believe in Analytical Results with maximum customer acquisition. </span>
</p>

<p className="body-2 mb-[2rem] text-n-3 flex items-center">
  <img src={check} width={24} height={24} alt="check" />
  <span className="ml-2">
 <h6 className="h6 mb-6">Planning To Startup: </h6>
Starting a business can require a
 lot of work, time and money. Follow this
  guide to start your business plan off on the right foot. </span>
</p>

<p className="body-2 mb-[2rem] text-n-3 flex items-center">
  <img src={check} width={24} height={24} alt="check" />
  <span className="ml-2">
  <h6 className="h6 mb-6">  Content Management: </h6>
Having a content management system for your website allows you to have control of your content.</span>
</p>
          </ul>

          <Button>Try it now</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
