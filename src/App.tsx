import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NotFound from "./errors/NotFound";
import HomeLayout from "./layouts/HomeLayout";
import {lazy, Suspense, useState, useEffect} from "react";
import LoadingScreen from "./components/loading/LoadingScreen";
import {AnimatePresence, motion} from "framer-motion";
import Contact from "./components/contact/Contact";
import ProfileEdit from "./components/profile/ProfileEdit.tsx";
import ProfileLayout from "./layouts/profile/ProfileLayout.tsx";
import ProfilePostLayout from "./layouts/profile/ProfilePostLayout.tsx";
import ProfilePosts from "./components/profile/profilePosts/ProfilePosts.tsx";
import ProfileSendPost from "./components/profile/ProfileSendPost.tsx";
import ProfileSendVideo from "./components/profile/ProfileSendVideo.tsx";
import AuthLayout from "./layouts/auth/AuthLayout.tsx";
import Login from "./pages/auth/Login.tsx";
import Register from "./pages/auth/Register.tsx";
import ForgotPassword from "./pages/auth/ForgotPassword.tsx";
import ProfileMarkedLayout from "./layouts/profile/ProfileMarkedLayout.tsx";
import ProfileMarkedSendPosts from "./components/profile/profilePosts/ProfileMarkedSendPosts.tsx";
import ProfileMarkedSendVideos from "./components/profile/profilePosts/ProfileMarkedSendVideos.tsx";
import PostDetail from "./pages/post/PostDetail.tsx";

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
                            <Route path={"/post/:id"} element={<PostDetail/>}/>
                            <Route path={"/profile"} element={<ProfileLayout/>}>
                                <Route
                                    index={true}
                                    element={<Navigate to={"marked"} replace={true}/>}
                                />
                                <Route path={"marked"} element={<ProfileMarkedLayout/>}>
                                    <Route index={true} element={<Navigate to={"send-posts"} replace={true}/>}/>
                                    <Route path={"send-posts"} element={<ProfileMarkedSendPosts/>}/>
                                    <Route path={"send-videos"} element={<ProfileMarkedSendVideos/>}/>
                                </Route>
                                <Route path={"send"} element={<ProfilePostLayout/>}>
                                    <Route
                                        index={true}
                                        element={<Navigate to={"post"} replace={true}/>}
                                    />
                                    <Route path={"post"} element={<ProfileSendPost/>}/>
                                    <Route path={"video"} element={<ProfileSendVideo/>}/>
                                </Route>
                                <Route path={"posts"} element={<ProfilePosts/>}/>
                            </Route>
                            <Route path={"/profile-edit"} element={<ProfileEdit/>}/>
                            <Route path="/404" element={<NotFound/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Route>
                        <Route path={"/auth"} element={<AuthLayout/>}>
                            <Route index={true} element={<Navigate to={"login"} replace={true}/>}/>
                            <Route path={"login"} element={<Login/>}/>
                            <Route path={"register"} element={<Register/>}/>
                            <Route path={"forgot"} element={<ForgotPassword/>}/>
                        </Route>
                    </Routes>
                </Suspense>
                {/*)}*/}
            </AnimatePresence>
        </BrowserRouter>
    );
};

export default App;