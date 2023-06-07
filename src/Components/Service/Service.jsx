import ServiceList from "./ServiceList";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { faGlobe, faLaptop, faMobile } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence } from "framer-motion";

export default function Service() {
  const serviceRef = useRef(null);
  const serviceIsInView = useInView(serviceRef, { once: false });
  const serviceControll = useAnimation();

  const services = [
    {
      service: "Web Application",
      desciption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      service: "Mobile Application",
      desciption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      service: "Desktop Application",
      desciption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const icons = [faGlobe, faLaptop, faMobile];

  useEffect(() => {
    if (serviceIsInView) {
      serviceControll.start("visible");
      console.log("visible");
    } else {
      serviceControll.start("hidden");
    }
  }, [serviceIsInView, serviceControll]);

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
            >
              <ServiceList services={services} icons={icons} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
