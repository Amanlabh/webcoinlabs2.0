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
          title="What we provide?"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          <div
            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
            style={{
              backgroundImage: `url('/images/benefit-1-bg.png')`,
            }}
          >
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
              <h5 className="h5 mb-5">Content and Social Media Management</h5>
              <p className="body-2 mb-6 text-n-3">
              Providing Full team of content writers including social media manager (Currently We are overbooked ).
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
              <h5 className="h5 mb-5">Token Launch Services</h5>
              <p className="body-2 mb-6 text-n-3">
              Offering exclusive services for launching a memecoin, RWA, or other tokens. Also providing team to handle every aspect of the token launch.
              
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
              <h5 className="h5 mb-5">Exclusive Alpha Group</h5>
              <p className="body-2 mb-6 text-n-3">
              Providing access to an exclusive alpha group for privileged insights and early information. (More details available upon private discussion)
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
              <h5 className="h5 mb-5">Deal Flow Exchange</h5>
              <p className="body-2 mb-6 text-n-3">
              Partner with a deal flow exchange plat-
form to promote within their community.
Offer exclusive entries for their members
or co-host the giveaway.
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
              <h5 className="h5 mb-5">Technical Support</h5>
              <p className="body-2 mb-6 text-n-3">
              Collaboration with market makers, also
keep close withtechnical experts for
project development.
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
              <h5 className="h5 mb-5">Big Collaborative Giveaway</h5>
              <p className="body-2 mb-6 text-n-3">
              Organizing a massive giveaway on our
100k+ Twitter and Telegram channels
using Gleam including fun quiz to boost
user interaction and engagement.
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