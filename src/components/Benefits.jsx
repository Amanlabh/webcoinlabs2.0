import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="We provide the best digital services."
        />

        <div className="flex flex-wrap gap-10 mb-10">
          <div
            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
            style={{
              backgroundImage: `url('/images/benefit-1-bg.png')`,
            }}
          >
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
              <h5 className="h5 mb-5">Data Analytics</h5>
              <p className="body-2 mb-6 text-n-3">
              Data analytics have been automated into mechanical processes and
               algorithms that work over raw data for human consumption. .
              </p>

              <div className="flex items-center mt-auto">
               
                <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                  Explore more
                </p>
                <Arrow />
              </div>
            </div>

            <GradientLight />

            <div
              className="absolute inset-0.5 bg-n-8"
              style={{ clipPath: "url(#benefits)" }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                
              </div>
            </div>

            <ClipPath />
          </div>

          <div
            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
            style={{
              backgroundImage: `url('/images/benefit-2-bg.png')`,
            }}
          >
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
              <h5 className="h5 mb-5">Website Growth</h5>
              <p className="body-2 mb-6 text-n-3">
              Your website can help establish your business as a going concern, 
              communicate your brand value proposition and it can convey professionalism.
              </p>

              <div className="flex items-center mt-auto">
                
                <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                  Explore more
                </p>
                <Arrow />
              </div>
            </div>

            <GradientLight />

            <div
              className="absolute inset-0.5 bg-n-8"
              style={{ clipPath: "url(#benefits)" }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
              
              </div>
            </div>

            <ClipPath />
          </div>
          <div
            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
            style={{
              backgroundImage: `url('/images/benefit-2-bg.png')`,
            }}
          >
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
              <h5 className="h5 mb-5">Seo Ranking</h5>
              <p className="body-2 mb-6 text-n-3">
              A good score indicates that your website 
              is meeting the top quality standards for 
              search engine optimization in the areas of technical SEO. 
              </p>

              <div className="flex items-center mt-auto">
               
                <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                  Explore more
                </p>
                <Arrow />
              </div>
            </div>

            <GradientLight />

            <div
              className="absolute inset-0.5 bg-n-8"
              style={{ clipPath: "url(#benefits)" }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                
              </div>
            </div>

            <ClipPath />
          </div>
          <div
            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
            style={{
              backgroundImage: `url('/images/benefit-2-bg.png')`,
            }}
          >
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
              <h5 className="h5 mb-5">Web Development</h5>
              <p className="body-2 mb-6 text-n-3">
              Web development is the implementation of 
              software and hardware to design, build and maintain a website. 
              </p>

              <div className="flex items-center mt-auto">
               
                <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                  Explore more
                </p>
                <Arrow />
              </div>
            </div>

            <GradientLight />

            <div
              className="absolute inset-0.5 bg-n-8"
              style={{ clipPath: "url(#benefits)" }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                
              </div>
            </div>

            <ClipPath />
          </div>
          <div
            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
            style={{
              backgroundImage: `url('/images/benefit-2-bg.png')`,
            }}
          >
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
              <h5 className="h5 mb-5">Email Marketing</h5>
              <p className="body-2 mb-6 text-n-3">
              Promoting your business through email marketing
               gives your audience the chance to make a purchase
                right from their phone or laptop. 
              </p>

              <div className="flex items-center mt-auto">
              
                <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                  Explore more
                </p>
                <Arrow />
              </div>
            </div>

            <GradientLight />

            <div
              className="absolute inset-0.5 bg-n-8"
              style={{ clipPath: "url(#benefits)" }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
               
              </div>
            </div>

            <ClipPath />
          </div>

          <div
            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
            style={{
              backgroundImage: `url('/images/benefit-3-bg.png')`,
            }}

            
          >
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
              <h5 className="h5 mb-5">Affiliate Marketing</h5>
              <p className="body-2 mb-6 text-n-3">
              Affiliate marketing involves referring a product or service by
               sharing it on a blog, social media platforms, or website.
              </p>

              <div className="flex items-center mt-auto">
               
                <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                  Explore more
                </p>
                <Arrow />
              </div>
            </div>

            <GradientLight />

            <div
              className="absolute inset-0.5 bg-n-8"
              style={{ clipPath: "url(#benefits)" }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
               
              </div>
            </div>

            <ClipPath />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;