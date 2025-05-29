"use client";
import { useRouter } from "next/navigation";
import { useApplicationContext } from "../context/applicationContext";
import { RiLogoutCircleFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
export default function Header() {
  const router = useRouter();
  const { currentUserId, credentials } = useApplicationContext();

  const getUserName = credentials.filter((el) => {
    return el.userId === currentUserId;
  });

  const handleLogout = () => {
    toast.success("Logout SuccessFully");
    router.push("./");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div>
          <h1>Hello ,{getUserName[0]?.userName}</h1>
        </div>
        <div onClick={handleLogout} title="Logout">
          <RiLogoutCircleFill className="logoutIcon" />
          <ToastContainer />
        </div>
      </div>
      <hr />
    </>
  );
}
