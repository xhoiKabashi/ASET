import React from "react" 
import LoginForm from "./components/Loginform";
import RegisterForm from "./components/RegisterForm";
import Landing from "./components/Landing";

export default function App() {
  return (
       <div>
        <Landing />
        <LoginForm />
        <RegisterForm />
       </div>
  )
}
