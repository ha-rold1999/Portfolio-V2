import arduino from "./../../assets/icons/arduino.png";
import apsnet from "./../../assets/icons/asp.net.png";
import csharp from "./../../assets/icons/csharp.png";
import css from "./../../assets/icons/css.png";
import flask from "./../../assets/icons/flask.png";
import html from "./../../assets/icons/html.png";
import java from "./../../assets/icons/java.png";
import js from "./../../assets/icons/js.png";
import mysql from "./../../assets/icons/mysql.png";
import node from "./../../assets/icons/node.png";
import php from "./../../assets/icons/php.png";
import postgres from "./../../assets/icons/postgres.png";
import pyhton from "./../../assets/icons/python.png";
import reactNative from "./../../assets/icons/react native.png";
import react from "./../../assets/icons/react.png";
import tailwind from "./../../assets/icons/tailwind.png";
import vite from "./../../assets/icons/vite.png";
import { AnimatePresence, motion } from "framer-motion";

export default function SkillTab() {
  const skills = [
    react,
    reactNative,
    csharp,
    apsnet,
    tailwind,
    vite,
    pyhton,
    php,
    java,
    js,
    node,
    flask,
    mysql,
    postgres,
    arduino,
    css,
    html,
  ];
  return (
    <AnimatePresence>
      <motion.div
        className="grid grid-cols-4 lg:grid-cols-10 xl:grid-cols-9 sm:grid-cols-6 md:grid-cols-7"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        {skills.map((skill, index) => {
          return (
            <motion.div
              key={index}
              className="w-20 h-20 md:w-12 md:h-12 lg:w-18 lg:h-18 rounded-lg xl:w-20 xl:h-20 flex justify-center items-center my-1 hover:border-2 border-white"
              style={{ backgroundColor: "#333333" }}
              layout
            >
              <motion.img
                src={skill}
                className="w-fit h-fit p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}
