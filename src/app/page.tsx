"use client";
import styles from "./page.module.css";
import { useApplicationContext } from "@/app/context/applicationContext";
export default function Home() {
  const { loginUser } = useApplicationContext();
  return <div className={styles.page}>{loginUser}</div>;
}
