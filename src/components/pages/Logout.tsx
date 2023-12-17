import React from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../../redux/actions";
import { emptyClientData } from "../../models/ClientData";
import { Button } from "@mui/material";
const  Logout: React.FC = () =>
{
    const dispatch = useDispatch();
    return <Button onClick={() => dispatch(authAction(emptyClientData))}>Logout</Button>
}
export default Logout;