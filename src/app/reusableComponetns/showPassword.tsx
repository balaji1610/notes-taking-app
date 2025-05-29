import { useApplicationContext } from "../context/applicationContext";
export default function ShowPassword() {
  const { isShowPassword, setIsShowPassword } = useApplicationContext();
  return (
    <>
      <input
        type="checkbox"
        checked={isShowPassword}
        onChange={(e) => {
          setIsShowPassword(e.target.checked);
        }}
      />
      Show Password
    </>
  );
}
