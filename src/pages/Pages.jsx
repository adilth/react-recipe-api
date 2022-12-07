import Home from "./Home";
import Cuisine from "./Cuisine";
import { Route, Routes, useLocation } from "react-router-dom";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";
import Loader from "../components/Loader";
import { useEffect, useState, Suspense } from "react";

const Pages = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, 4000);
  }, []);
  const location = useLocation();
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Suspense fallback={<Loader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/recipe/:name" element={<Recipe />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </div>
  );
};

export default Pages;
