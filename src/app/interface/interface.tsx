import React from "react";

export interface Iinput {
  type: "text" | "password";
  name: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ILoginUser {
  userName: string;
  passWord: string;
}
