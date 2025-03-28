import { motion } from "framer-motion";

const LoadingScreen = ({ progress }: { progress: number }) => {
  if (progress >= 100) progress = 100;

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8 }}
    >
      <motion.span
        className="text-orange-600 font-bold text-xl"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        MEGA.news
      </motion.span>

      <div className="w-56 h-1 bg-gray-200 mt-3 relative overflow-hidden rounded-lg">
        <motion.div
          className="h-full bg-orange-600 absolute left-0 top-0"
          style={{ width: `${progress}%` }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        />
      </div>

      <motion.span
        className="text-gray-600 text-sm mt-2"
        animate={{ opacity: [0, 1], y: [5, 0] }}
        transition={{ duration: 0.5 }}
      >
        {Math.floor(progress)}%
      </motion.span>
    </motion.div>
  );
};

export default LoadingScreen;
