import heroImgUrl from "./home_page_col_2.png";
import GarunSpan from "../reusables/GarunSpan";
import {
  UserCircleIcon,
  EnvelopeIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

const Login = () => {
  const inputDivStyles =
    "text-start border-b-2 focus-within:text-crimson focus-within:border-crimson";
  const iconStyles = "w-6 inline translate-y-[-5%]";
  return (
    <main className="grid md:grid-cols-2 gap-y-10 grid-cols-1 min-h-svh font-bold place-items-center text-center">
      <section>
        <h2 className="text-2xl font-exbold my-4">
          <GarunSpan />
        </h2>
        <p>Log in to your account</p>
        <form className="mt-10 mb-4 grid gap-8">
          <div className={inputDivStyles}>
            <EnvelopeIcon className={`${iconStyles} opacity-50`} />
            <input
              type="email"
              placeholder={"Email Address"}
              className="p-2 outline-none text-bloo"
            />
          </div>
          <div className={inputDivStyles}>
            <LockClosedIcon className={`${iconStyles} opacity-50`} />
            <input
              type="password"
              placeholder={"Password"}
              className="p-2 outline-none text-bloo"
            />
          </div>
          <div className="grid grid-cols-2 w-[44ch]">
            <label className="text-start">
              <input type="checkbox" className="mr-2 scale-[1.4] accent-navy" />
              Remember me
            </label>
            <a href="#" className="text-crimson hover:underline">
              Forgot Password ?
            </a>
          </div>
          <button
            type="submit"
            className="bg-navy border-4 border-transparent text-ice p-3 rounded-md hover:bg-bloo transition-all">
            Log In
          </button>
        </form>
        <a
          href="#"
          className="text-crimson hover:text-purple-900 hover:border-b-4">
          <UserCircleIcon className={iconStyles} /> Create Account
        </a>
      </section>
      <section className="p-12 bg-[#EFF3FF] h-full grid gap-y-4">
        <h2 className="text-2xl font-exbold">
          Welcome to <GarunSpan />
        </h2>
        <h3>Boost your customer satisfaction and business reputation</h3>
        <img src={heroImgUrl} alt="People having a meeting about issues" />
        <p>
          Track and manage issues in your businesses. Allow your customers to
          report issues and your business to prioritize, assign and troubleshoot
          those issues
        </p>
      </section>
    </main>
  );
};

export default Login;
