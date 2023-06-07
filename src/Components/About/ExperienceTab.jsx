import { AnimatePresence, motion } from "framer-motion";

export default function ExperienceTab() {
  return (
    <AnimatePresence>
      <motion.div
        className="bg-grey px-5 py-2 rounded-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <div className="text-xl font-medium">Full Scale Intern</div>
        <div className="text-white text-lg">
          Learn alot about C# programming, ASP.NET, JavaScript, and ReactJS
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
