import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NotFound from "./errors/NotFound";
import HomeLayout from "./layouts/HomeLayout";
import {lazy, Suspense, useState, useEffect} from "react";
import LoadingScreen from "./components/loading/LoadingScreen";
import {AnimatePresence, motion} from "framer-motion";
import Contact from "./components/contact/Contact";
import ProfileEdit from "./components/profile/ProfileEdit.tsx";
import ProfileLayout from "./layouts/profile/ProfileLayout.tsx";
import ProfileMarked from "./components/profile/ProfileMarked.tsx";
import ProfilePostLayout from "./layouts/profile/ProfilePostLayout.tsx";
import ProfilePosts from "./components/profile/ProfilePosts.tsx";
import ProfileSendPost from "./components/profile/ProfileSendPost.tsx";
import ProfileSendVideo from "./components/profile/ProfileSendVideo.tsx";

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
                            <Route path={"/profile"} element={<ProfileLayout/>}>
                                <Route index={true} element={<Navigate to={"marked"} replace={true}/>}/>
                                <Route path={"marked"} element={<ProfileMarked/>}/>
                                <Route path={"send"} element={<ProfilePostLayout/>}>
                                    <Route index={true} element={<Navigate to={"post"} replace={true}/>}/>
                                    <Route path={"post"} element={<ProfileSendPost/>}/>
                                    <Route path={"video"} element={<ProfileSendVideo/>}/>
                                </Route>
                                <Route path={"posts"} element={<ProfilePosts/>}/>
                            </Route>
                            <Route path={"/profile-edit"} element={<ProfileEdit/>}/>
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
