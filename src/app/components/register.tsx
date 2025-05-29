"use client";
import Input from "../reusableComponetns/input";
import ShowPassword from "../reusableComponetns/showPassword";
import { useApplicationContext } from "../context/applicationContext";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
export default function Register() {
  const router = useRouter();
  const { registerUser, isShowPassword, setRegisterUser, setCredentials } =
    useApplicationContext();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleOnRegister = () => {
    setCredentials((prev) => {
      return [
        ...prev,
        { ...registerUser, userId: `User-${uuidv4().slice(0, 4)}` },
      ];
    });
  };

  return (
    <div className="register-container">
      <div className="register-grid">
        <div>Register</div>
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
          <button onClick={handleOnRegister}>Register</button>
        </div>
        <div>
          You Have Account ?
          <button onClick={() => router.push("./")}>Login</button>
        </div>
      </div>
    </div>
  );
}
