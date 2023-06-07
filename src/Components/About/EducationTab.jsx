import { AnimatePresence, motion } from "framer-motion";

export default function EducationTab() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <div className="text-xl bg-grey px-5 py-2 rounded-lg mb-2">
          <div className="text-white pb-0">2019-2023</div>
          <div className="text-black font-bold pb-0">University of Cebu</div>
          <div className="text-white">BSIT</div>
        </div>
        <div className="text-xl bg-grey px-5 py-2 rounded-lg mb-2">
          <div className="text-white">2017-2019</div>
          <div className="text-black font-bold">
            St. Loiuse de Marillac College of Bogo
          </div>
          <div className="text-white">TVL-ICT</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
