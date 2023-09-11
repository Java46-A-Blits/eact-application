import { AppBar, Drawer, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { RouteType } from "../../models/RouteType";
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react';
import { blue } from "@mui/material/colors";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { getRouteIndex } from "../../util/functions";

    // TODO:  write a "Drawer" implementation for mobile 

const NavigatorMobile: React.FC<{items: RouteType[]}> = ({items}) => {
    const[flOpen, setOpen] = React.useState<boolean>(false);
    const location = useLocation();
    const getRouteIndexCallback = React.useCallback(getRouteIndex, [items, location])
    const index = getRouteIndexCallback(items, location.pathname);
    function toggleOpen(){
        setOpen (!flOpen)
    }
    function getListItems(): React.ReactNode {
        return items.map(i => <ListItem onClick={toggleOpen} component={RouterLink} to={i.path} key={i.path}> {i.label } </ListItem> )
    }

return <AppBar position="fixed">
    <Toolbar>
        <IconButton onClick={toggleOpen} style={{color: 'red' }}>
            <MenuIcon/>
        </IconButton>
        <Typography> {items[index].label} </Typography>
        <Drawer open ={flOpen} onClose={toggleOpen} anchor="left">
            <List>
                {getListItems()}
            </List>
        </Drawer>
    </Toolbar>
</AppBar>
}
export default NavigatorMobile;