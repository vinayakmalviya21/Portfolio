import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am <span className="text-white font-semibold">Vinayak Malviya</span>,
        an{" "}
        <span className="text-white font-semibold">
          Information Technology graduate from UIT, RGPV
        </span>{" "}
        with a strong interest in{" "}
        <span className="text-white font-semibold">
          Full Stack Web Development
        </span>{" "}
        and scalable application building.
        <br />
        <br />I have hands-on experience working with{" "}
        <span className="text-white font-semibold">
          React, Angular, JavaScript, TypeScript, Node.js, Express.js, Spring
          Boot, MongoDB, MySQL
        </span>
        , HTML, CSS, and REST APIs, along with solid fundamentals in{" "}
        <span className="text-white font-semibold">
          DSA, OOPs, DBMS, Operating Systems, and SQL
        </span>
        .
        <br />
        <br />
        Currently working as an{" "}
        <span className="text-white font-semibold">
          Assistant System Engineer Trainee at TCS, Pune
        </span>
        , and previously completed a{" "}
        <span className="text-white font-semibold">
          10-month SDE Internship at WanderMeWell
        </span>
        , where I contributed to backend development, API integrations,
        debugging, and application optimization.
        <br />
        <br />
        Beyond technical development, I have held leadership positions including{" "}
        <span className="text-white font-semibold">
          Executive Head at CodeAdept
        </span>{" "}
        and{" "}
        <span className="text-white font-semibold">
          Co-Head of the Web Department at ASPER
        </span>
        , where I worked on team collaboration, technical events, and community
        initiatives.
        <br />
        <br />I enjoy building impactful products, solving real-world problems,
        and continuously improving my development skills.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
