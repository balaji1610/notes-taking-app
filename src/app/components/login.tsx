import Input from "../reusableComponetns/input";
import ShowPassword from "../reusableComponetns/showPassword";
import { useApplicationContext } from "../context/applicationContext";
import { useRouter } from "next/navigation";

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
    const findUser = credentials.find(
      (el) =>
        el.userEmail === loginUser.userEmail &&
        el.password === loginUser.password
    );

    if (findUser) {
      alert("Login Success");
      setCurrentUserId(findUser);
      router.push("./home");
    } else {
      alert("UserName Or Password Wrong");
    }
  };
  return (
    <div className="login-container">
      <div className="login-grid">
        <div>Login</div>
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
        <div>
          <button onClick={handleOnLogin}>Login</button>
        </div>
        <div>
          <button onClick={() => router.push("./registerPage")}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
