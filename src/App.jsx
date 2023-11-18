import React from "react" 
import LoginForm from "./components/Loginform";
import RegisterForm from "./components/RegisterForm";
import Lading from "./components/Landing";

export default function App() {
  return (
       <div>
        <Lading />
        <LoginForm />
        <RegisterForm />
       </div>
  )
}
