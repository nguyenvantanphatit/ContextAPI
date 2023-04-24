import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ClassComponents from "./views/LifeCycle/ClassComponents";
import FunctionComponents from "./views/LifeCycle/FunctionComponents";
import { UserProvider } from "./components/ContextAPI/UserContext";
import { UserStatusIndicator } from "./components/ContextAPI/UserStatusIndicator";
import {LoginButton} from "./components/ContextAPI/LoginButton";
import {LogoutButton} from "./components/ContextAPI/LogoutButton";
import "./App.css";
import React from "react";
function App() {
  return (
    <UserProvider>
      <UserStatusIndicator />
      <LoginButton />
      <LogoutButton />
    </UserProvider>
  );
}

export default App;
