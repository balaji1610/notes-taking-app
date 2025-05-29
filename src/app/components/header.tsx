"use client";
import { useRouter } from "next/navigation";
import { useApplicationContext } from "../context/applicationContext";
export default function Header() {
  const router = useRouter();
  const { currentUserId } = useApplicationContext();
  return (
    <div>
      <h1>Hello {currentUserId?.userName}</h1>
      <button onClick={() => router.push("./")}>Logout</button>
    </div>
  );
}
