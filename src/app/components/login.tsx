import Input from "../reusableComponetns/input";
import ShowPassword from "../reusableComponetns/showPassword";
import { useApplicationContext } from "../context/applicationContext";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const { loginUser, setLoginUser, isShowPassword } = useApplicationContext();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginUser((prev) => {
      return { ...prev, [name]: value };
    });
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
            name="passWord"
            value={loginUser.passWord}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <ShowPassword />
        </div>
        <div>
          <button>Login</button>
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
