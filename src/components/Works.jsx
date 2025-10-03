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
    <motion.div variants={fadeIn("up", "spring", 0, 0.75)} className="w-full">
      <Tilt
        options={{
          max: 5, // small tilt
          scale: 1, // no zoom
          speed: 300, // slower movement
        }}
        className="bg-tertiary p-6 sm:p-8 rounded-3xl w-full flex flex-col md:flex-row gap-6 md:gap-10 items-center"
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] relative rounded-2xl overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3">
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
          </div>
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <a href={website_link} target="_blank">
            <h3 className="text-white font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] hover:text-blue-400 transition-colors">
              {name}
            </h3>
          </a>

          <ul className="text-secondary text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed list-disc ml-5">
            {description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-[12px] sm:text-[14px] md:text-[16px] ${tag.color} font-medium`}
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
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-secondary text-[15px] sm:text-[16px] md:text-[18px] max-w-4xl leading-[28px] sm:leading-[30px] md:leading-[32px]"
      >
        Here’s a detailed showcase of my work. This project highlights my skills
        in building full-stack applications with the MERN stack, implementing
        core e-commerce functionalities, and crafting a responsive design
        optimized for mobile and desktop devices.
      </motion.p>

      <div className="mt-12 w-full flex justify-center">
        <ProjectCard {...projects[0]} />
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
