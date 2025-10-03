import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { categories } from "../constants";

const Skills = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Skills & Expertise
        </h2>

        <div className="grid gap-10 md:gap-16">
          {categories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8"
            >
              <h3 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {category.skills.map((skill, idx) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center space-y-2 hover:scale-105 transition-transform duration-200"
                    >
                      <div className="text-4xl">
                        <SkillIcon className={skill.color} />
                      </div>
                      <p className="text-sm font-medium">{skill.name}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Skills, "skills");
