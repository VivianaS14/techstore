import { create } from "zustand";
import { LoginResponse } from "../types/user.types";

type UserStoreType = {
  user: {
    id: number;
    name: string;
    email: string;
    role: "user" | "admin";
    token: string;
  } | null;
  updateUser: (newUser: LoginResponse) => void;
};

export const userStore = create<UserStoreType>()((set) => ({
  user: null,
  updateUser: (newUser: LoginResponse) =>
    set(() => ({
      user: {
        id: newUser.user.id,
        name: newUser.user.name,
        email: newUser.user.email,
        role: newUser.user.role,
        token: newUser.token,
      },
    })),
}));
