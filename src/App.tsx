import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NotFound from "./errors/NotFound";
import HomeLayout from "./layouts/HomeLayout";
import {lazy, Suspense, useState, useEffect} from "react";
import LoadingScreen from "./@core/components/loading/LoadingScreen";
import {AnimatePresence, motion} from "framer-motion";
import Contact from "./pages/contact/Contact";
import ProfileEdit from "./components/profile/profileEdit/ProfileEdit.tsx";
import ProfileLayout from "./layouts/profile/ProfileLayout.tsx";
import ProfilePostLayout from "./layouts/profile/ProfilePostLayout.tsx";
import ProfilePosts from "./components/profile/profilePosts/ProfilePosts.tsx";
import ProfileSendPost from "./components/profile/ProfileSendPost.tsx";
import ProfileSendVideo from "./components/profile/video/ProfileSendVideo.tsx";
import AuthLayout from "./layouts/auth/AuthLayout.tsx";
import Login from "./pages/auth/Login.tsx";
import Register from "./pages/auth/Register.tsx";
import ForgotPassword from "./pages/auth/ForgotPassword.tsx";
import ProfileMarkedLayout from "./layouts/profile/ProfileMarkedLayout.tsx";
import ProfileMarkedSendPosts from "./components/profile/profilePosts/ProfileMarkedSendPosts.tsx";
import ProfileMarkedSendVideos from "./components/profile/profilePosts/ProfileMarkedSendVideos.tsx";
import PostDetail from "./pages/post/PostDetail.tsx";
import {ToastContainer} from "react-toastify";
import PostsByCategory from "./pages/category/PostsByCategory.tsx";
import Basket from "./pages/basket/Basket.tsx";
import Logout from "./pages/auth/Logout.tsx";
import AuthChecker from "./components/auth/AuthChecker.tsx";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/about-us/AboutUs.tsx"));

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
        <>
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
                                <Route
                                    path={"/category/:category"}
                                    element={<PostsByCategory/>}
                                />
                                <Route path="/about-us" element={<AboutUs/>}/>
                                <Route path="/contact" element={<Contact/>}/>
                                <Route path={"/basket"} element={<Basket/>}/>
                                <Route path={"/post/:id"} element={<PostDetail/>}/>
                                <Route path={"/profile"} element={<AuthChecker><ProfileLayout/></AuthChecker>}>
                                    <Route
                                        index={true}
                                        element={<Navigate to={"marked"} replace={true}/>}
                                    />
                                    <Route path={"marked"} element={<ProfileMarkedLayout/>}>
                                        <Route
                                            index={true}
                                            element={<Navigate to={"send-posts"} replace={true}/>}
                                        />
                                        <Route
                                            path={"send-posts"}
                                            element={<ProfileMarkedSendPosts/>}
                                        />
                                        <Route
                                            path={"send-videos"}
                                            element={<ProfileMarkedSendVideos/>}
                                        />
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
                                <Route path={"/profile-edit"} element={<AuthChecker><ProfileEdit/></AuthChecker>}/>
                                <Route path="/404" element={<NotFound/>}/>
                                <Route path={"/forbidden"} element={<h1>Forbidden</h1>}/>
                                <Route path={"logout"} element={<Logout/>}/>
                                <Route path="*" element={<NotFound/>}/>
                            </Route>
                            <Route path={"/auth"} element={<AuthLayout/>}>
                                <Route
                                    index={true}
                                    element={<Navigate to={"login"} replace={true}/>}
                                />
                                <Route path={"login"} element={<Login/>}/>
                                <Route path={"register"} element={<Register/>}/>
                                <Route path={"forgot"} element={<ForgotPassword/>}/>
                                <Route path="*" element={<NotFound/>}/>
                            </Route>
                        </Routes>
                    </Suspense>
                    {/*)}*/}
                </AnimatePresence>
            </BrowserRouter>
            <ToastContainer/>
        </>
    );
};

export default App;