import { resume } from "src/static/social";
import { BriefcaseIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import { handleHoverEffect } from "@utils/hoverCardEffect";
import { useMediaQuery } from "react-responsive";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const ComputersCanvas = dynamic(() => import("@components/canvas/Computers"), {
  ssr: false,
});

const cards = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="1.25"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="12" cy="9" r="6"></circle>
        <path d="M12.002 15.003l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889"></path>
        <path d="M6.802 12.003l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889"></path>
      </svg>
    ),
    name: "Experience",
    value: "13 + Years",
  },
  {
    icon: <BriefcaseIcon strokeWidth={1.25} />,
    name: "Completed",
    value: "13 + Projects",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="1.25"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <rect x="4" y="13" rx="2" width="4" height="6"></rect>
        <rect x="16" y="13" rx="2" width="4" height="6"></rect>
        <path d="M4 15v-3a8 8 0 0 1 16 0v3"></path>
        <path d="M18 19a6 3 0 0 1 -6 3"></path>
      </svg>
    ),
    name: "Available",
    value: "40 hours a week",
  },
];

const About = () => {
  const [showIt, setShowIt] = useState(false);
  const isMatch = useMediaQuery({ maxWidth: 1280 });
  useEffect(() => {
    setShowIt(isMatch);
  }, [isMatch]);
  return (
    <section className="section container max-w-[1208px] !pt-0 xl:mt-36">
      <div>
        {/* <Title title="About Me" desc="My introduction" /> */}
        {/* <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-20"> */}
        {/* <div className="bb flex items-center justify-center rounded-2xl p-10">
            <Image className="object-contain" src={Anim} alt="" />
          </div> */}
        <div>
          {showIt && (
            <div className="aspect-[9/4.7] w-full md:-mt-10">
              <ComputersCanvas />
            </div>
          )}
          <div
            id="hover-cards"
            onMouseMove={handleHoverEffect}
            className="mt-2 flex flex-wrap gap-4"
          >
            {cards.map((card, i) => (
              <div
                id="hover-card"
                key={i}
                className="flex min-w-[150px] flex-1 flex-col items-center justify-center rounded-lg p-5"
              >
                <span id="hover-card-overlay" />
                <div className="mb-1 h-7 w-7">{card.icon}</div>
                <p className="my-2 text-center text-lg">{card.name}</p>
                <p className="c-secondary text-center text-sm">{card.value}</p>
              </div>
            ))}
          </div>
          <div className="text-gray-800 dark:text-gray-200 my-10 text-justify text-xl leading-loose tracking-wide">
          My journey into programming began{" "}
          <b className="text-gray-700 dark:text-gray-300">in 4th grade of elementary school</b> 
          when I became fascinated with games like <b className="text-orange-500">Point Blank</b> 
          and <b className="text-yellow-500">Lost Saga</b>. Spending time in internet cafes, 
          I was drawn to how online game cheats were made, which led me to create my own using 
          <b className="text-blue-500">C</b> and tools like <b className="text-green-500">Dev C++</b> 
          and <b className="text-indigo-500">Visual Studio</b>.
          <div className="h-7" />
          Shortly after, I got involved in <b className="text-cyan-500">Pentesting</b>, 
          joining communities both locally and internationally. However, an unfortunate event 
          led me to step away from this world until I graduated elementary school.
          <div className="h-7" />
          <b className="text-gray-700 dark:text-gray-300">In middle school</b>, I started 
          learning <b className="text-blue-500">HTML</b>, <b className="text-blue-400">CSS</b>, 
          <b className="text-yellow-500">JavaScript</b>, and <b className="text-purple-500">PHP</b>. 
          I then transitioned into using the <b className="text-red-500">CodeIgniter</b> 
          PHP framework.
          <div className="h-7" />
          During <b className="text-gray-700 dark:text-gray-300">vocational school</b>, 
          I explored more modern languages like <b className="text-green-500">NodeJS</b> 
          and worked with databases like <b className="text-blue-600">PostgreSQL</b> alongside 
          <b className="text-teal-500">MySQL</b>. I also gained skills in networking and earned a 
          <b className="text-pink-500">Mikrotik Basic Certification</b>, though it may now be expired.
          <div className="h-7" />
          <b className="text-gray-700 dark:text-gray-300">In college</b>, I revisited 
          programming fundamentals with <b className="text-blue-500">C++</b> and started exploring 
          modern technologies like <b className="text-green-400">VueJS</b>, 
          <b className="text-orange-500">Svelte</b>, <b className="text-blue-500">React</b>, 
          <b className="text-indigo-500">NextJS</b>, <b className="text-green-500">Python</b>, 
          and <b className="text-purple-500">AI</b>.
          <div className="h-7" />
          I also enjoy working with the <b className="text-cyan-600">MERN stack</b> and am 
          continually expanding my knowledge in various other technologies.
        </div>
          <div className="flex justify-start">
            <a href={resume} target="_blank" rel="noreferrer" className="w-fit">
              <button className="btn btn-darker flex items-center space-x-3 rounded-2xl py-6 px-8 font-medium">
                <span className="whitespace-nowrap">View Resume</span>
                <DocumentTextIcon className="w-6 -translate-y-1" />
              </button>
            </a>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default About;
