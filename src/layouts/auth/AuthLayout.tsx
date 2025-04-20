import {Outlet} from "react-router-dom";
import "./AuthLayout.css";

const AuthLayout = () => {
    return (
        <>
            <section className={"auth-layout"}>
                <Outlet/>
            </section>
        </>
    )
}

export default AuthLayout;