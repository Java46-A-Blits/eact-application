import React from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../forms/LoginForm";
import LoginData from "../../models/LoginData";
import { authAction } from "../../redux/actions";
import { ClientData } from "../../models/ClientData";
import { authService } from "../../config/service-config";
import { useNavigate } from "react-router-dom";
import { COURSES_PATH } from "../../config/routes-config";

const Login: React.FC = () => {
   const dispatch =  useDispatch();
   const navigate = useNavigate();
   return <LoginForm submitFn={function(loginData: LoginData): boolean {
      const clientData = authService.login(loginData);
      if (!!clientData) {
         dispatch(authAction(clientData as ClientData));
         navigate(COURSES_PATH)
         return true;
      }
      return false; // used for wrong log in alert
   }
   } />
}
export default Login