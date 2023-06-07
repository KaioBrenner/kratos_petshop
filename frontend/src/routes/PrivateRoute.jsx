import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { MyContextProvider, MyContext } from "../MyContext";

export function PrivateRoute({ children }) {

  const { contextValue, updateContextValue } = useContext(MyContext);


  return contextValue ? children : <Navigate to="/" />;
}
