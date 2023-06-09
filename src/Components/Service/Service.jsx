import ServiceList from "./ServiceList";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatePresence } from "framer-motion";

export default function Service() {
  const serviceRef = useRef(null);
  const serviceIsInView = useInView(serviceRef, { once: true });

  return (
    <div
      className="max-w-screen-2xl h-auto xl:h-screen  py-2  md:px-20 overflow-hidden flex flex-col px-4"
      id="specialty"
      style={{ backgroundColor: "#706C61" }}
    >
      <div className="text-4xl md:text-6xl font-bold text-white mb-5">
        My Services
      </div>
      <div ref={serviceRef}>
        <AnimatePresence>
          {serviceIsInView && (
            <motion.div
              variants={{
                hidden: { y: "-100%" },
                visible: { y: 0 },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
              className="w-full h-full"
            >
              <ServiceList />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
