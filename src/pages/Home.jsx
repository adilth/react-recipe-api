import Popular from "../components/Popular";
import Picker from "../components/Picker";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Popular />
      <Picker />
    </motion.div>
  );
};

export default Home;
