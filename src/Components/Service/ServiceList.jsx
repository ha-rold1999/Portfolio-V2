/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faGlobe, faLaptop, faMobile } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
export default function ServiceList() {
  const services = [
    {
      service: "Web Application",
      desciption:
        "I have experience in building web applications that encompass both the frontend and backend.",
    },
    {
      service: "Mobile Application",
      desciption:
        "I possess expertise in developing cross-platform mobile applications that are compatible with both Android and iOS platforms.",
    },
    {
      service: "Desktop Application",
      desciption:
        "I have hands-on experience in developing desktop applications that offer accounting functionalities and integrate with Internet of Things (IoT) devices.",
    },
  ];
  const icons = [faGlobe, faMobile, faLaptop];
  return (
    <div className="flex flex-col xl:flex-row h-full w-full xl:space-x-5 py-10 ">
      {services.map((service, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ y: -10, backgroundColor: "black" }}
            transition={{ duration: 0.5 }}
            className=" w-full xl:w-1/3 bg-grey mb-5 rounded-lg p-10 cursor-pointer
            transition-colors  duration-300 "
          >
            <div className="w-full h-full text-white space-y-5  pr-18 pl-2">
              <FontAwesomeIcon
                icon={icons[index]}
                className=" w-14 h-14 pt-2"
              />
              <div className="text-5xl">{service.service}</div>
              <div className="text-xl">{service.desciption}</div>
            </div>
            {/* <div className="text-white px-2  hover:bg-grey w-fit rounded-lg ">
              Learn More
            </div> */}
          </motion.div>
        );
      })}
    </div>
  );
}
