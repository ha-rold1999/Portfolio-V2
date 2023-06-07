import logo from "./../../assets/icons/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import MenuNav from "./MenuNav";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="w-full h-1/5 flex flex-row items-center px-5 md:px-0 top-0 "
      id="home"
    >
      <div className="w-2/5 h-full md:w-1/5 flex items-center">
        <img src={logo} className="w-24 h-24 " />
      </div>
      <div className="hidden md:flex w-4/5  justify-end md:space-x-3 lg:space-x-5 top-0 left-0">
        <motion.div
          whileHover={{ backgroundColor: "#706C61" }}
          whileTap={{ scale: 0.8 }}
          whileFocus={{ backgroundColor: "#706C61" }}
          className="text-xl text-white cursor-pointer flex items-center px-2 py-1 rounded-lg"
        >
          <a href="#home">Home</a>
        </motion.div>
        <motion.div
          whileHover={{ backgroundColor: "#706C61" }}
          whileTap={{ scale: 0.8 }}
          className="text-xl text-white cursor-pointer flex items-center px-2 py-1 rounded-lg"
        >
          <a href="#about">About</a>
        </motion.div>
        <motion.div
          whileHover={{ backgroundColor: "#706C61" }}
          whileTap={{ scale: 0.8 }}
          className="text-xl text-white cursor-pointer flex items-center  px-2 py-1 rounded-lg"
        >
          <a href="#specialty">Specialty</a>
        </motion.div>
        <motion.div
          whileHover={{ backgroundColor: "#706C61" }}
          whileTap={{ scale: 0.8 }}
          className="text-xl text-white cursor-pointer flex items-center px-2 py-1 rounded-lg"
        >
          Portfolio
        </motion.div>
        <motion.div
          whileHover={{ backgroundColor: "#706C61" }}
          whileTap={{ scale: 0.8 }}
          className="text-xl text-white cursor-pointer flex items-center  px-2 py-1 rounded-lg"
        >
          Contact
        </motion.div>
      </div>
      {!isOpen && (
        <div
          className="flex justify-end w-3/5 md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="w-10 h-10 text-white md:hidden"
          />
        </div>
      )}

      {isOpen && <MenuNav setIsOpen={setIsOpen} className="" />}
    </div>
  );
}
