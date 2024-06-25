"use client";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { it } from "node:test";

const about = {
  title: "About me",
  describtion:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem reiciendis repellat error qui. Fuga, illo.",
  info: [
    { fieldName: "Name", fieldValue: "Luke Coleman" },
    { fieldName: "Phone", fieldValue: "+40 321 123 123" },
    { fieldName: "Experience", fieldValue: "12+ Years" },
    { fieldName: "Skype", fieldValue: "luke.01" },
    { fieldName: "Nationality", fieldValue: "American" },
    { fieldName: "Email", fieldValue: "luke.coleman@mail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Spanish" },
  ],
};
const experience = {
  icon: "assets/icons/experience.svg",
  title: "My Experience",
  describtion:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem reiciendis repellat error qui. Fuga, illo.",
  items: [
    {
      company: "Tech Solutions",
      position: "Full Stack Developer",
      duration: "2022 - present",
    },
    {
      company: "Web Design Company",
      position: "Freelance Developer",
      duration: "2021 - 2022",
    },
    {
      company: "E-Commerce Company",
      position: "Front-End Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Solutions",
      position: "Full Stack Developer",
      duration: "2022 - present",
    },
    {
      company: "Innovative StartUp",
      position: "Backend Developer",
      duration: "2019 - 2020",
    },
    {
      company: "Global Tech Firm",
      position: "Software Engineer",
      duration: "2018 - 2019",
    },
    {
      company: "Digital Agency",
      position: "Web Developer",
      duration: "2017 - 2018",
    },
    {
      company: "Software Solutions",
      position: "Junior Developer",
      duration: "2016 - 2017",
    },
    {
      company: "Creative Studio",
      position: "Intern Developer",
      duration: "2015 - 2016",
    },
  ],
};
const education = {
  icon: "assets/icons/education.svg",
  title: "My Education",
  description:
    "A brief overview of my educational background, highlighting my academic achievements and the institutions I've attended.",
  items: [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      duration: "2018 - 2022",
    },
    {
      institution: "Tech Academy",
      degree: "Diploma in Software Development",
      duration: "2016 - 2018",
    },
    {
      institution: "Online Courses",
      degree: "Various Certifications",
      duration: "Ongoing",
      details: [
        "Advanced JavaScript Course",
        "Full Stack Web Development",
        "Python for Data Science",
      ],
    },
    {
      institution: "High School",
      degree: "High School Diploma",
      duration: "2012 - 2016",
    },
  ],
};
const skills = {
  title: "Skills",
  describtion:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem reiciendis repellat error qui. Fuga, illo.",
  skillList: [
    { fieldName: "HTML5", icon: <FaHtml5 /> },
    { fieldName: "CSS3", icon: <FaCss3 /> },
    { fieldName: "JavaScript", icon: <FaJs /> },
    { fieldName: "React", icon: <FaReact /> },
    { fieldName: "Tailwind", icon: <SiTailwindcss /> },
    { fieldName: "Next.js", icon: <SiNextdotjs /> },
    { fieldName: "Node.js", icon: <FaNodeJs /> },
    { fieldName: "Figma", icon: <FaFigma /> },
  ],
};
const Resume = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="about"
            className="flex flex-col xl:flex-row gap-6"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-5">
              <TabsTrigger value={"experience"}>Experience</TabsTrigger>
              <TabsTrigger value={"education"}>Education</TabsTrigger>
              <TabsTrigger value={"skills"}>Skills</TabsTrigger>
              <TabsTrigger value={"about"}>About</TabsTrigger>
            </TabsList>

            {/* content */}
            <div className="min-h[70vh] w-full">
              {/* experience */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.describtion}
                  </p>
                </div>
              </TabsContent>
              {/* education */}
              <TabsContent value="education" className="w-full">
                education
              </TabsContent>
              {/* skills */}
              <TabsContent value="skills" className="w-full">
                skills
              </TabsContent>
              {/* about */}
              <TabsContent value="about" className="w-full">
                about
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </>
  );
};

export default Resume;
