"use client";
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("./")}>Logout</button>
    </div>
  );
}
