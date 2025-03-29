import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "./errors/NotFound";
import HomeLayout from "./layouts/HomeLayout";
import {lazy, Suspense, useState, useEffect} from "react";
import LoadingScreen from "./components/loading/LoadingScreen";
import {AnimatePresence, motion} from "framer-motion";
import Contact from "./components/contact/Contact";
import Editor from "./Editor.tsx";

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
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + Math.random() * 20;
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <BrowserRouter>
            <AnimatePresence mode="wait">
                {/*{isLoading ? (*/}
                {/*    <motion.div*/}
                {/*        key="loading"*/}
                {/*        initial={{opacity: 1}}*/}
                {/*        animate={{opacity: 1}}*/}
                {/*        exit={{opacity: 0, scale: 0.9}}*/}
                {/*        transition={{duration: 0.8}}*/}
                {/*    >*/}
                {/*        <LoadingScreen progress={loadingProgress}/>*/}
                {/*    </motion.div>*/}
                {/*) : (*/}
                <Suspense fallback={<LoadingScreen progress={loadingProgress}/>}>
                    <Routes>
                        <Route path="/" element={<HomeLayout/>}>
                            <Route index={true} element={<Home/>}/>
                            <Route path="/about-us" element={<AboutUs/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                            <Route path={"/editor"} element={<Editor/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Route>
                    </Routes>
                </Suspense>
                {/*)}*/}
            </AnimatePresence>
        </BrowserRouter>
    );
};

export default App;
