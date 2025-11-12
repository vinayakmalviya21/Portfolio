import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0, 0.75)}>
      <Tilt
        options={{
          max: 10,
          scale: 1.05,
          speed: 400,
        }}
        className="bg-[#1e1e2f]/70 backdrop-blur-md border border-gray-700/30 
        p-6 sm:p-7 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 
        transition-all duration-500 flex flex-col justify-between h-full min-h-[550px]"
      >
        {/* Image Section */}
        <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px] rounded-2xl overflow-hidden bg-[#151520] group flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="max-w-full max-h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay actions */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-between items-start p-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 sm:w-12 h-10 sm:h-12 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            {website_link && (
              <button
                onClick={() => window.open(website_link, "_blank")}
                className="bg-white/10 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-500/30 transition-all"
              >
                Live →
              </button>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-between flex-grow mt-5">
          <div>
            <h3 className="text-white font-bold text-[22px] sm:text-[24px] md:text-[26px] hover:text-blue-400 transition-colors">
              {name}
            </h3>

            <ul className="text-gray-300 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed list-disc ml-5 space-y-1 mt-2">
              {description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-[13px] sm:text-[14px] md:text-[15px] ${tag.color} bg-white/5 px-2 py-1 rounded-md`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center mb-10">
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects 🚀</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-2 text-secondary text-[15px] sm:text-[16px] md:text-[18px] max-w-3xl mx-auto text-center leading-relaxed"
      >
        A curated selection of projects I’ve built — blending full-stack
        development, performance, and design to create meaningful user
        experiences.
      </motion.p>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
