import { Link } from "react-router-dom";
import InputField from "./InputField";

import { Mail, Lock } from "lucide-react";
import Button from "./Button";

export const Login = () => {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center bg-white">
        <div className="w-full max-w-sm px-6 ">
          <h1 className="text-3xl text-center">Welcome Back </h1>
          <p className="text-center text-md mt-1 text-gray-500 mb-10">
            Let's get you Logged In to <b>Hulion</b>
          </p>
          <div className="space-y-5">
            <InputField icon={<Mail size={18} />} placeholder="Email" />
            <InputField
              mb="5px"
              icon={<Lock size={18} />}
              placeholder="Password"
              type="password"
            />
            <div className="mb-10 px-2 ">
              <Link>Forgotten Password ?</Link>
            </div>
            <Button name="Login" bgColor="rgb(0, 206, 27)" />
            <Button name="Continue with Google" icon={"googleIcon"} />

            <p className="text-center font-semibold font-nunito">
              Don't have an account?{" "}
              <span className="">
                <Link
                  className="text-green-400 font-bold font-nunito"
                  to="/signup"
                >
                  SignUp
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
