import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./errors/NotFound";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index={true} element={<Home />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
