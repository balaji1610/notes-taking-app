"use client";
import { useRouter } from "next/navigation";
import { useApplicationContext } from "../context/applicationContext";
export default function Header() {
  const router = useRouter();
  const { currentUserId, credentials } = useApplicationContext();

  const getUserName = credentials.filter((el) => {
    return el.userId === currentUserId;
  });

  return (
    <div>
      <h1>Hello {getUserName[0]?.userName}</h1>
      <button onClick={() => router.push("./")}>Logout</button>
    </div>
  );
}
