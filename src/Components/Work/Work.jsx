import WorkList from "./WorkList";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";

export default function Work() {
  const workRef = useRef(null);
  const workIsInView = useInView(workRef, { once: false });
  const workControll = useAnimation();

  useEffect(() => {
    if (workIsInView) {
      workControll.start("visible");
    } else {
      workControll.start("hidden");
    }
  }, [workIsInView, workControll]);

  return (
    <div className="max-w-screen-2xl h-auto xl:h-screen  py-2  md:px-20 overflow-hidden flex flex-col px-4 bg-lightGrey">
      <div className="text-4xl md:text-6xl font-bold text-white mb-5">
        My Work
      </div>
      <div ref={workRef}>
        <AnimatePresence>
          {workIsInView && (
            <motion.div
              variants={{
                hidden: { y: "-100%" },
                visible: { y: 0 },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
            >
              <WorkList />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
