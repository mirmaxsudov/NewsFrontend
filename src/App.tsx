import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./errors/NotFound";
import HomeLayout from "./layouts/HomeLayout";
import { lazy, Suspense, useState, useEffect } from "react";
import LoadingScreen from "./components/loading/LoadingScreen";
import { AnimatePresence, motion } from "framer-motion";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./components/aboutUs/AboutUs"));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500); // Small delay for smooth transition
          return 100;
        }
        return prev + Math.random() * 20; // Simulate network speed
      });
    }, 500); // Adjust frequency based on your preference

    return () => clearInterval(interval);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          >
            <LoadingScreen progress={loadingProgress} />
          </motion.div>
        ) : (
          <Suspense fallback={<LoadingScreen progress={loadingProgress} />}>
            <Routes>
              <Route path="/" element={<HomeLayout />}>
                <Route index={true} element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;