import { ClientData } from "../models/ClientData";
import LoginData from "../models/LoginData";
import AuthService from "./AuthService";

const accounts: any[] = [
    {email: "user@gmail.com", password: "user12", role: "USER"},
    {email: "admin@gmail.com", password: "admin12",  role: "ADMIN"}
]

export default class AuthServiceClient implements AuthService {
    login(loginData: LoginData): boolean | ClientData {
        const account = accounts.find(a => loginData.email === a.email && loginData.password === a.password);
        return !!account ? {email: loginData.email, displayName: loginData.email, isAdmin: account.role === 'ADMIN'} : false ;
    }
    logout(): boolean {
        return true
    }
}