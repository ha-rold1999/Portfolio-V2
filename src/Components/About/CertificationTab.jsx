import { AnimatePresence, motion } from "framer-motion";

export default function CertificationTab() {
  return (
    <AnimatePresence>
      <div>
        <ul>
          <motion.li
            className="flex flex-row items-center space-x-3 bg-grey px-5 py-2 rounded-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div>
              <div className="text-xl font-medium">
                IT Passport Certification
              </div>
              <div className="text-white text-lg">April 30,2023</div>
            </div>
          </motion.li>
        </ul>
      </div>
    </AnimatePresence>
  );
}
