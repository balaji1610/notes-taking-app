"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { ILoginUser } from "@/app/interface/interface";

interface ApplicationContextType {
  loginUser: ILoginUser;
  setLoginUser: Dispatch<SetStateAction<ILoginUser>>;
  isShowPassword: boolean;
  setIsShowPassword: Dispatch<SetStateAction<boolean>>;
  singleLogin: ILoginUser;
  users: ILoginUser[];
  setUsers: Dispatch<SetStateAction<ILoginUser[]>>;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(
  undefined
);

interface ContextProps {
  children: ReactNode;
}

const ApplicationProvider: React.FC<ContextProps> = ({ children }) => {
  const singleLogin: ILoginUser = {
    userName: "",
    passWord: "",
  };
  const [loginUser, setLoginUser] = useState<ILoginUser>(singleLogin);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [users, setUsers] = useState<ILoginUser[]>([]);
  return (
    <ApplicationContext.Provider
      value={{
        loginUser,
        setLoginUser,
        isShowPassword,
        setIsShowPassword,
        singleLogin,
        users,
        setUsers,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export { ApplicationProvider, ApplicationContext };

export const useApplicationContext = (): ApplicationContextType => {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error(
      "useApplicationContext must be used within an ApplicationProvider"
    );
  }
  return context;
};
