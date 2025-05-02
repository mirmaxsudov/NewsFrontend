import {useEffect, useLayoutEffect} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {logout} from "../../api/requests/auth/auth.api.ts";
import {useDispatch} from "react-redux";
import {clearAuth} from "../../store/auth/authSlice.ts";

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        const logoutApi = async () => {
            await logout();
            dispatch(clearAuth())
            navigate("/")
            toast("You have successfully logged out", {type: "success"})
        };
        logoutApi();
    }, []);

    return (<>
        <section>
            <div className={"container max-w-container mx-auto h-[50dvh] flex justify-center items-center"}>
                <h1 className={"text-center text-[100px] tracking-wider font-medium text-[#3E3232]"}>Logout</h1>
            </div>
        </section>
    </>)
}

export default Logout;