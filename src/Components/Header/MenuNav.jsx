import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
export default function MenuNav({ setIsOpen }) {
  return (
    <motion.div
      className="w-2/5 fixed top-0 right-0 z-40 h-screen bg-black"
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", duration: 0.5, damping: 20 }}
    >
      <FontAwesomeIcon
        onClick={() => {
          setIsOpen(false);
        }}
        icon={faXmark}
        className="w-10 h-10 text-white md:hidden"
      />
      <div className="flex justify-center flex-col space-y-4">
        <motion.div
          whileHover={{ backgroundColor: "#706C61" }}
          whileTap={{ scale: 0.8 }}
          className="text-xl text-white cursor-pointer flex justify-center px-2 py-1 rounded-lg"
        >
          <a href="#home">Home</a>
        </motion.div>
        <motion.div
          whileHover={{ backgroundColor: "#706C61" }}
          whileTap={{ scale: 0.8 }}
          className="text-xl text-white cursor-pointer flex justify-center px-2 py-1 rounded-lg"
        >
          <a href="#about">About</a>
        </motion.div>
        <motion.div
          whileHover={{ backgroundColor: "#706C61" }}
          whileTap={{ scale: 0.8 }}
          className="text-xl text-white cursor-pointer flex justify-center  px-2 py-1 rounded-lg"
        >
          <a href="#specialty">Service</a>
        </motion.div>
        <motion.div
          whileHover={{ backgroundColor: "#706C61" }}
          whileTap={{ scale: 0.8 }}
          className="text-xl text-white cursor-pointer flex justify-center px-2 py-1 rounded-lg"
        >
          <a href="#portfolio">Portfolio</a>
        </motion.div>
        <motion.div
          whileHover={{ backgroundColor: "#706C61" }}
          whileTap={{ scale: 0.8 }}
          className="text-xl text-white cursor-pointer flex justify-center  px-2 py-1 rounded-lg"
        >
          <a href="#contact">Contact</a>
        </motion.div>
      </div>
    </motion.div>
  );
}
