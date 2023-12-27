import React from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../../redux/actions";
import { emptyClientData } from "../../models/ClientData";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { authService } from "../../config/service-config";
import { LOGIN_PATH } from "../../config/routes-config";
const  Logout: React.FC = () =>
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function onLogout() {
        if (authService.logout()){
            dispatch(authAction(emptyClientData));
            navigate(LOGIN_PATH);
        }
    }
    return <Button onClick={onLogout}>Logout</Button>
}
export default Logout;