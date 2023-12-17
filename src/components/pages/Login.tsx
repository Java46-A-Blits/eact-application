import React from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../forms/LoginForm";
import LoginData from "../../models/LoginData";
import AuthServiceClient from "../../service/AuthServiceClient";
import { authAction } from "../../redux/actions";
import { ClientData } from "../../models/ClientData";

const authService = new AuthServiceClient();
const Login: React.FC = () => {
   const dispatch =  useDispatch();
   return <LoginForm submitFn={function(loginData: LoginData): void {
      const clientData = authService.login(loginData);
      if (!!clientData) {
         dispatch(authAction(clientData as ClientData));
      }
   }
   } />
}
export default Login