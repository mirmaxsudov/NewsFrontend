import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="flex items-center w-[500px] justify-center">
      <div className="w-full max-w-md backdrop-blur-sm bg-[#0F0F13]/80 rounded-2xl py-[48px] px-[78px] shadow-lg">
        <h1 className="text-center text-2xl font-bold text-white mb-6">
          ForgotPassword
        </h1>

        <div className="flex justify-between gap-4 mb-6">
          <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#1C1C22] text-white rounded-md hover:bg-[#2b2b33] transition">
            <FaGoogle />
            Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#1C1C22] text-white rounded-md hover:bg-[#2b2b33] transition">
            <FaFacebookF />
            Facebook
          </button>
        </div>

        <div className="text-center text-[#666] mb-6">Or</div>

        <div className="mb-4">
          <label className="block text-white mb-1">Telegram Username</label>
          <input
            type="text"
            placeholder="mirmaxsudov"
            className="w-full p-3 rounded-md border border-[#2A2A31] bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="w-full bg-[#246BFD] hover:bg-blue-600 transition text-white py-3 rounded-md font-semibold mb-4">
          Create account
        </button>

        <p className="text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/auth/login"
            className="text-white underline hover:text-blue-400"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
