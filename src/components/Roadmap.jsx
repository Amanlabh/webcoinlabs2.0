import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { check2, loading1, grid } from "../assets"; // Ensure these are the correct imports
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="GameFi,Advisor and more"  />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {/* Custom Content for Roadmap Items */}
        <div className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-n-6">
          <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
            <div className="absolute top-0 left-0 max-w-full">
              <img className="w-full" src={grid} width={550} height={550} alt="Grid" />
            </div>
            <div className="relative z-1">
              <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                <Tagline> Since 2024</Tagline>
                <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                <img className="mr-2.5" src={loading1} width={16} height={16} alt="In Progress" />
                  <div className="tagline">In Progress</div>
                </div>
              </div>
              <h4 className="h4 mb-4">GameFi Project Partnership</h4>
              <p className="body-2 text-n-4">
              Partnering with new and innovative GameFi Projects also including Gaming guild & eSports.
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-n-6">
          <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
            <div className="absolute top-0 left-0 max-w-full">
              <img className="w-full" src={grid} width={550} height={550} alt="Grid" />
            </div>
            <div className="relative z-1">
              <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                <Tagline> Since 2024</Tagline>
                <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                  <img className="mr-2.5" src={loading1} width={16} height={16} alt="In Progress" />
                  <div className="tagline">In Progress</div>
                </div>
              </div>
              <h4 className="h4 mb-4">Advisory Board</h4>
              <p className="body-2 text-n-4">
              Providing industry insights and support with member of Advisord Board.
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-n-6">
          <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
            <div className="absolute top-0 left-0 max-w-full">
              <img className="w-full" src={grid} width={550} height={550} alt="Grid" />
            </div>
            <div className="relative z-1">
              <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                <Tagline>Since 2024</Tagline>
                <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                  <img className="mr-2.5" src={loading1} width={16} height={16} alt="In Progress" />
                  <div className="tagline">In Progress</div>
                </div>
              </div>
              <h4 className="h4 mb-4">DEX & Liquidity Pools (LPs)</h4>
              <p className="body-2 text-n-4">
              Collaborating with decentralized exchanges and establishing liquidity pools for project.
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-n-6">
          <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
            <div className="absolute top-0 left-0 max-w-full">
              <img className="w-full" src={grid} width={550} height={550} alt="Grid" />
            </div>
            <div className="relative z-1">
              <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                <Tagline>Since 2024</Tagline>
                <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                <img className="mr-2.5" src={check2} width={16} height={16} alt="Done" />
                  <div className="tagline">Done</div>
                </div>
              </div>
              <h4 className="h4 mb-4">INO launchpad & Staking</h4>
              <p className="body-2 text-n-4">
              Dedicated platform for Initial NFT Offerings (INOs) and staking platform to stake tokens and earn rewards.
              </p>
            </div>
          </div>
        </div>

        <Gradient /> {/* Gradient background effect */}
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Contact us</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
