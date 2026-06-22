import { Link } from "react-router-dom";
import InputField from "./InputField";
import MyPhoneInput from "./PhoneInput";
import { User, Mail, Lock } from "lucide-react";
import Button from "./Button";
const SignUp = () => {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center bg-white">
        <div className="w-full max-w-sm px-6 ">
          <h1 className="text-3xl text-center">
            Welcome to{" "}
            <span className="font-semibold font-poppins">Hulion</span>
          </h1>
          <p className="text-center text-md mt-1 text-gray-500 mb-10">
            Let's get you started
          </p>
          <div className="space-y-5">
            <InputField icon={<User size={18} />} placeholder="Full Name" />
            <InputField icon={<Mail size={18} />} placeholder="Email" />
            <MyPhoneInput />
            <InputField
              mb="60px"
              icon={<Lock size={18} />}
              placeholder="Password"
              type="password"
            />
            <Button name="Continue with Google" icon={"googleIcon"} />
            <Button name="Next" bgColor="rgb(0, 206, 27)" />
            <p className="text-center font-semibold font-nunito">
              Already have an account?{" "}
              <span className="">
                <Link className="text-green-400 font-bold font-nunito" to="/">
                  Login
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
