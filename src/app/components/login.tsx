import Input from "../reusableComponetns/input";
import ShowPassword from "../reusableComponetns/showPassword";
import { useApplicationContext } from "../context/applicationContext";
export default function Login() {
  const { loginUser, setLoginUser, isShowPassword } = useApplicationContext();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginUser((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className="login-container">
      <form>
        <div className="login-grid">
          <div>Login</div>
          <div>
            <Input
              type="text"
              name="userName"
              value={loginUser.userName}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div>
            <Input
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
          <div>Register</div>
        </div>
      </form>
    </div>
  );
}
