'use client';
import Socials from '@/components/Socials';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
const Homepage = () => {
  return (
    <div className="h-full w-3/4 mx-auto">
      <div className="mb-4">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 ">
          {/* text */}
          <div className="text-center lg-text-left order-2 lg:order-none">
            <span className="text-xl">Full Stack Developer</span>
            <h1 className="mb-6">
              Hello I'm <br />
              <span className="text-accent">Saurav Gurung</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting digital experiences and I am proficient in
              various programming languages and technologies.
            </p>
            {/* buttons and socials */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 ">
              <button className="">Download CV</button>
              <div className="mb-8 lg:mb-0">
                <Socials />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 lg:order-none lg:mb-8 mb-2">
            <Photo />
          </div>
        </div>
      </div>
      {/* stats */}
      <Stats />
    </div>
  );
};

export default Homepage;
