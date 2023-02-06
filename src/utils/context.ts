import React, { createContext } from "react";

interface UserType {
  user: boolean;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const user: UserType = {
  user: false,
  setUser: () => {},
};

export const userContext = createContext(user);
