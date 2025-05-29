"use client";
import Input from "../reusableComponetns/input";
import ShowPassword from "../reusableComponetns/showPassword";
import { useApplicationContext } from "../context/applicationContext";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { IoMdLogIn } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import Button from "@/app/reusableComponetns/button";

export default function Register() {
  const router = useRouter();
  const {
    registerUser,
    isShowPassword,
    setRegisterUser,
    setCredentials,
    register,
  } = useApplicationContext();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleOnRegister = () => {
    const { userName, userEmail, password, confirmPassword } = registerUser;

    if (!userName || !userEmail || !password || !confirmPassword) {
      return toast.error(
        "username & Email & password & confirmPassword is required"
      );
    }

    if (password != confirmPassword) {
      return toast.error(" password & confirmPassword not matched");
    }

    if (userName && userEmail && password && confirmPassword) {
      setCredentials((prev) => {
        return [
          ...prev,
          { ...registerUser, userId: `User-${uuidv4().slice(0, 4)}` },
        ];
      });
      setRegisterUser(register);
      return toast.success("Successfully Is Registered");
    }
  };

  return (
    <div className="register-container">
      <div className="register-grid">
        <div className="login-icon">
          <IoMdLogIn className="icon" />
        </div>
        <div>
          <Input
            name="userName"
            type="text"
            value={registerUser.userName}
            placeholder="UserName"
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          {" "}
          <Input
            type="email"
            name="userEmail"
            value={registerUser.userEmail}
            placeholder="Enter Your Email"
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <Input
            type={isShowPassword ? "password" : "text"}
            name="password"
            value={registerUser.password}
            placeholder="password"
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <Input
            type={isShowPassword ? "password" : "text"}
            name="confirmPassword"
            value={registerUser.confirmPassword}
            placeholder="confirmPassword"
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <ShowPassword />
        </div>
        <div>
          <Button
            text="Register"
            onClick={handleOnRegister}
            bgColor="#4300FF"
          />

          <ToastContainer />
        </div>
        <div>
          You Have Account ?
          <Button
            text="Login"
            onClick={() => router.push("./")}
            bgColor="#212121"
          />
        </div>
      </div>
    </div>
  );
}
