import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./errors/NotFound";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import AboutUs from "./components/aboutUs/AboutUs";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index={true} element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
