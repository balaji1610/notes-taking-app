import React from "react";

export interface Iinput {
  type: "text" | "password" | "email";
  name: string;
  value: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ILoginUser {
  userEmail: string;
  password: string;
}
export interface Itasks {
  taskId: string;
  title: string;
  description: string;
}
export interface IRegister {
  userId: string;
  userName: string;
  userEmail: string;
  password: string;
  confirmPassword: string;
  tasks: Itasks[];
}
