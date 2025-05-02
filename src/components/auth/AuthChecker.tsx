import {useAppSelector} from "../../hooks/hooks.ts";
import {useNavigate} from "react-router-dom";

const AuthChecker = ({children}: { children: React.ReactNode }) => {
    const auth = useAppSelector(state => state.auth);
    const navigate = useNavigate();

    if (auth.token === "") {
        navigate("/auth/login");
    } else
        return (
            <div>
                {children}
            </div>
        )
}

export default AuthChecker;