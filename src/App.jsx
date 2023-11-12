import React from "react" 
import LoginForm from "./components/loginform";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';
import RegisterForm from "./components/RegisterForm";

export default function App() {
  return (
       <div>
                {/* <LoginForm /> */}
        <RegisterForm />
       </div>
  )
}
