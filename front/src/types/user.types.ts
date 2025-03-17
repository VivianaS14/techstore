export type UserType = {
  id: number;
  name: string;
  email: string;
  role: "user" | "admin";
};

export type LoginResponse = {
  message: string;
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
    role: "user" | "admin";
  };
};
