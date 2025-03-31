import "./AuthLayout.css";
import {Outlet} from "react-router-dom";

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