import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

const HomeLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
