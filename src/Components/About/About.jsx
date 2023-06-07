import Profile from "./Profile";
import Description from "./Description";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function About() {
  const profileRef = useRef(null);
  const descriptionRef = useRef(null);
  const profileIsInView = useInView(profileRef, { once: false });
  const descriptioIsInView = useInView(descriptionRef, { once: false });
  const profileControll = useAnimation();
  const descriptionControll = useAnimation();

  useEffect(() => {
    if (profileIsInView || descriptioIsInView) {
      profileControll.start("visible");
      descriptionControll.start("visible");
    } else {
      profileControll.start("hidden");
      descriptionControll.start("hidden");
    }
  }, [
    profileIsInView,
    descriptioIsInView,
    profileControll,
    descriptionControll,
  ]);

  return (
    <div
      className="max-w-screen-2xl h-auto  py-2  md:px-20 overflow-hidden flex flex-row px-4"
      id="about"
      style={{ backgroundColor: "#706C61" }}
    >
      <div className="flex flex-col md:flex-row w-full h-full pt-20 md:space-x-10 items-center md:items-start">
        <div
          ref={profileRef}
          className="w-full md:w-2/5 h-full flex justify-center "
        >
          <motion.div
            variants={{
              hidden: { x: "-100%", scale: 0 },
              visible: { x: 0, scale: 1 },
            }}
            initial="hidden"
            animate={profileControll}
            transition={{ duration: 2, type: "spring", bounce: 0.3 }}
          >
            <Profile />
          </motion.div>
        </div>
        <div ref={descriptionRef} className="w-full md:w-3/5 h-full ">
          <motion.div
            variants={{
              hidden: { x: "100%", scale: 0 },
              visible: { x: 0, scale: 1 },
            }}
            initial="hidden"
            animate={profileControll}
            transition={{ duration: 2, type: "spring", bounce: 0.3 }}
          >
            <Description />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
