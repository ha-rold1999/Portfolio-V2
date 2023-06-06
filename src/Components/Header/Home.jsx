import logo from "./../../assets/icons/logo.png";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const textIsInView = useInView(textRef, { once: false });
  const imageIsInView = useInView(imageRef, { once: false });
  const textControll = useAnimation();
  const imageControll = useAnimation();

  useEffect(() => {
    if (textIsInView || imageIsInView) {
      textControll.start("visible");
      imageControll.start("visible");
    } else {
      textControll.start("hidden");
      imageControll.start("hidden");
    }
  }, [textIsInView, imageIsInView, textControll, imageControll]);

  return (
    <div className="h-4/5 overflow-hidden items-center flex ">
      <div
        ref={textRef}
        className="w-full flex flex-col  md:justify-start md:w-2/5 lg:w-3/5"
      >
        <motion.div
          variants={{
            hidden: { x: "-100%", scale: 0 },
            visible: { x: 0, scale: 1 },
          }}
          initial="hidden"
          animate={textControll}
          transition={{ duration: 2, type: "spring", bounce: 0.3 }}
        >
          <div className="text-2xl font-bold flex justify-center md:justify-start text-black">
            Software Developer
          </div>
          <div
            className="text-8xl font-semibold flex justify-center md:justify-start text-center md:text-start"
            style={{ color: "#FFFFFF" }}
          >
            Harold Cuico
          </div>
        </motion.div>
      </div>

      {textIsInView && (
        <div
          ref={imageRef}
          className="hidden md:flex w-full h-full justify-center items-center right-0 md:w-3/5 lg:w-2/5"
        >
          <motion.div
            variants={{
              hidden: { x: "100%", scale: 0 },
              visible: { x: 0, scale: 1 },
            }}
            initial="hidden"
            animate={imageControll}
            transition={{
              duration: 2,
              type: "spring",
              bounce: 0.3,
              delay: 0.5,
            }}
          >
            <img
              src={logo}
              className="lg:h-fit lg:w-fit md:w-96 md:h-96"
              alt="Logo"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}
