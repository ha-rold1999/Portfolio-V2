/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export default function TabButtons({
  setSkill,
  setExperience,
  setEducation,
  setCertification,
  skill,
  experience,
  education,
  certification,
}) {
  return (
    <div className="flex flex-row md:space-x-3 lg:space-x-7 text-mg space-x-2 md:text-lg text-white font-semibold pb-2">
      <motion.div whileTap={{ scale: 0.8 }}>
        <div
          onClick={() => {
            setSkill(true);
            setExperience(false);
            setEducation(false);
            setCertification(false);
          }}
          className={`cursor-pointer px-1 lg:px-5 rounded-lg hover:bg-grey focus:bg-grey ${
            skill && "bg-grey"
          }`}
        >
          Skills
        </div>
      </motion.div>
      <motion.div whileTap={{ scale: 0.8 }}>
        <div
          onClick={() => {
            setSkill(false);
            setExperience(true);
            setEducation(false);
            setCertification(false);
          }}
          className={`cursor-pointer px-1  lg:px-5 rounded-lg hover:bg-grey focus:bg-grey ${
            experience && "bg-grey"
          }`}
        >
          Experience
        </div>
      </motion.div>

      <motion.div whileTap={{ scale: 0.8 }}>
        <div
          onClick={() => {
            setSkill(false);
            setExperience(false);
            setEducation(false);
            setCertification(true);
          }}
          className={`cursor-pointer px-1 lg:px-5 rounded-lg hover:bg-grey focus:bg-grey ${
            certification && "bg-grey"
          }`}
        >
          Certification
        </div>
      </motion.div>
      <motion.div whileTap={{ scale: 0.8 }}>
        <div
          onClick={() => {
            setSkill(false);
            setExperience(false);
            setEducation(true);
            setCertification(false);
          }}
          className={`cursor-pointer px-1 lg:px-5  rounded-lg hover:bg-grey focus:bg-grey ${
            education && "bg-grey"
          }`}
        >
          Education
        </div>
      </motion.div>
    </div>
  );
}
