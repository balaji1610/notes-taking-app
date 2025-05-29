"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

import { ILoginUser, IRegister, Itasks } from "@/app/interface/interface";
import useLocalStorage from "../hooks/useLocalStorage";

interface ApplicationContextType {
  loginUser: ILoginUser;
  setLoginUser: Dispatch<SetStateAction<ILoginUser>>;
  isShowPassword: boolean;
  setIsShowPassword: Dispatch<SetStateAction<boolean>>;
  singleLogin: ILoginUser;
  users: ILoginUser[];
  setUsers: Dispatch<SetStateAction<ILoginUser[]>>;
  credentials: IRegister[];
  setCredentials: Dispatch<SetStateAction<IRegister[]>>;
  registerUser: IRegister;
  setRegisterUser: Dispatch<SetStateAction<IRegister>>;
  currentUserId: string;
  setCurrentUserId: Dispatch<SetStateAction<string>>;
  task: Itasks;
  setTask: Dispatch<SetStateAction<Itasks>>;
  taksList: Itasks;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  editId: string;
  setEditId: Dispatch<SetStateAction<string>>;
  register: IRegister;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(
  undefined
);

interface ContextProps {
  children: ReactNode;
}

const ApplicationProvider: React.FC<ContextProps> = ({ children }) => {
  const singleLogin: ILoginUser = {
    userEmail: "",
    password: "",
  };
  const taksList: Itasks = {
    taskId: "",
    title: "",
    description: "",
  };
  const register: IRegister = {
    userId: "",
    userName: "",
    userEmail: "",
    password: "",
    confirmPassword: "",
    tasks: [],
  };

  const [loginUser, setLoginUser] = useState<ILoginUser>(singleLogin);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [users, setUsers] = useState<ILoginUser[]>([]);
  const [credentials, setCredentials] = useLocalStorage<IRegister[]>(
    "credentials",
    []
  );
  const [registerUser, setRegisterUser] = useState<IRegister>(register);
  const [currentUserId, setCurrentUserId] = useState<string>("");
  const [task, setTask] = useState<Itasks>(taksList);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editId, setEditId] = useState<string>("");
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
        credentials,
        setCredentials,
        registerUser,
        setRegisterUser,
        currentUserId,
        setCurrentUserId,
        task,
        setTask,
        taksList,
        isEdit,
        setIsEdit,
        editId,
        setEditId,
        register,
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
