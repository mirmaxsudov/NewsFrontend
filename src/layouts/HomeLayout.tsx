import { Outlet } from "react-router-dom";
import Nav from "../@core/components/nav/Nav";
import Footer from "../@core/components/footer/Footer";

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
