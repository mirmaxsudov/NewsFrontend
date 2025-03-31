import {useState} from "react";
import {FaGoogle, FaFacebookF, FaEye, FaEyeSlash} from "react-icons/fa";
import {Link} from "react-router-dom";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex items-center w-[500px] justify-center">
            <div className="w-full max-w-md backdrop-blur-sm bg-[#0F0F13]/80 rounded-2xl py-[48px] px-[78px] shadow-lg">
                <h1 className="text-center text-2xl font-bold text-white mb-6">
                    Create an account
                </h1>

                <div className="flex justify-between gap-4 mb-6">
                    <button
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#1C1C22] text-white rounded-md hover:bg-[#2b2b33] transition">
                        <FaGoogle/>
                        Google
                    </button>
                    <button
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#1C1C22] text-white rounded-md hover:bg-[#2b2b33] transition">
                        <FaFacebookF/>
                        Facebook
                    </button>
                </div>

                <div className="text-center text-[#666] mb-6">Or</div>

                <div className="mb-4">
                    <label className="block text-white mb-1">Telegram Code</label>
                    <input
                        type="text"
                        placeholder="1111"
                        className="w-full p-3 rounded-md border border-[#2A2A31] bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <div className="flex justify-between items-center mb-1">
                        <label className="text-white">Password</label>
                        <Link to={"/auth/forgot"} className="text-sm text-gray-400 hover:text-white transition">Forgot
                            ?</Link>
                    </div>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="w-full p-3 rounded-md border border-[#2A2A31] bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        />
                        <span
                            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
              {showPassword ? <FaEyeSlash/> : <FaEye/>}
            </span>
                    </div>
                </div>

                <button
                    className="w-full bg-[#246BFD] hover:bg-blue-600 transition text-white py-3 rounded-md font-semibold mb-4">
                    Create account
                </button>

                <p className="text-center text-sm text-gray-400">
                    Already Have An Account?{" "}
                    <Link to="/auth/login" className="text-white underline hover:text-blue-400">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
