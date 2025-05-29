import Input from "../reusableComponetns/input";
import ShowPassword from "../reusableComponetns/showPassword";
import { useApplicationContext } from "../context/applicationContext";
import { useRouter } from "next/navigation";
import { MdAccountCircle } from "react-icons/md";
import Button from "@/app/reusableComponetns/button";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const router = useRouter();
  const {
    loginUser,
    setLoginUser,
    isShowPassword,
    credentials,
    setCurrentUserId,
  } = useApplicationContext();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginUser((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleOnLogin = () => {
    if (!loginUser.userEmail || !loginUser.password) {
      return toast.error("Username and password are required.");
    }
    const findUser = credentials.find(
      (el) =>
        el.userEmail === loginUser.userEmail &&
        el.password === loginUser.password
    );

    if (findUser) {
      toast.success("Login Success");
      setCurrentUserId(findUser.userId);
      router.push("./home");
    } else {
      toast.error("Invalid username or password");
    }
  };
  return (
    <div className="login-container">
      <div className="login-grid">
        <div className="login-icon">
          <MdAccountCircle className="icon" />
        </div>
        <div>
          <Input
            type="email"
            name="userEmail"
            placeholder="Enter Your Email"
            value={loginUser.userEmail}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <Input
            placeholder="Enter Your Password"
            type={isShowPassword ? "password" : "text"}
            name="password"
            value={loginUser.password}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <ShowPassword />
        </div>
        <div className="login-icon">
          <Button text="Login" onClick={handleOnLogin} bgColor="#4300FF" />
          <ToastContainer />
        </div>
        <div>
          <span>
            You Have Don`&apos;t Account Yet ?{" "}
            <Button
              text="Register"
              onClick={() => router.push("./registerPage")}
              bgColor="#212121"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
