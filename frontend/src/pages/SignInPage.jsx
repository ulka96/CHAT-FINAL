// Icons
import Profile from "../icons/Profile";
import CloseEye from "../icons/CloseEye";
// import OpenEye from "../icons/OpenEye";

// Link
import { Link, useNavigate } from "react-router-dom";

// Hooks
import { useRef } from "react";

const SignInPage = () => {

const userNameRef = useRef();
const passwordRef = useRef();
const navigate = useNavigate();

// Sign In Handler function

const signInHandler = async(event) => {
event.preventDefault();

const userName = userNameRef.current.value.trim();
const password = passwordRef.current.value.trim();


const response = await fetch("/auth/sign-in", {
  method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userName, password}),
});

const data = await response.json();

if(!response.ok) {
  console.log(data.message);
}

if(response.ok) {
  console.log(data.data);
}


navigate("/");

}


  return (
    <div className="h-[600px] mx-auto w-1/4 flex items-center justify-center flex-col">
      <div className="text-center mb-5">
        <h1 className="text-3xl text-bold">Welcome Back</h1>
        <h5 className="text-xs text-neutral-500 ">Login in to your account</h5>
      </div>
      <form onSubmit={signInHandler}  className="w-full space-y-5">
        {/* userName */}
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="userName">
            Username
          </label>
          <div className="relative h-10">
            <input
              ref = {userNameRef}
              type="userName"
              id="userName"
              placeholder="hsynmrzyv"
              className="absolute w-full h-full text-sm py-3 top-0 left-0 focus:outline-none bg-transparent border-b-2 border-gray-300 focus:border-lightOrange "
            />
            <Profile
              color="gray"
              className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-0"
            />
          </div>
        </div>

        {/* Password */}
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="password">
            password
          </label>
          <div className="relative h-10">
            <input
              ref={passwordRef}
              type="password"
              id="password"
              placeholder="6+ strong character"
              className="absolute w-full h-full text-sm py-3 top-0 left-0 focus:outline-none bg-transparent border-b-2 border-gray-300 focus:border-lightOrange"
            />
            <span className="absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer">
              <CloseEye color="gray" className="w-5 h-5 " />
            </span>
          </div>
        </div>

        <button className="w-full bg-lightOrange text-white p-2 rounded-xl hover:scale-95 transition-all duration-200">
          Sign In
        </button>
        <p className="text-center text-xs">
          Don't you have an account?{" "}
          <Link className="text-lightOrange" to="/sign-up">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignInPage;
