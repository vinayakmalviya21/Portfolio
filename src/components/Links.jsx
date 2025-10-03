import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { links } from "../constants"; 
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const LinkCard = ({ index, title, icon, url }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="bg-gray-900 rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col">
            {icon && (
              <img
                src={icon}
                alt={title}
                className="w-16 h-16 object-contain mb-3"
              />
            )}
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </a>
      </motion.div>
    </Tilt>
  );
};

const Links = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Links</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {links.map((link, index) => (
          <LinkCard key={link.title} index={index} {...link} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Links, "links"); 
