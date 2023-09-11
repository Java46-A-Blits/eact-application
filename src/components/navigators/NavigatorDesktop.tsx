import React from "react";
import { AppBar, Tab, Tabs } from "@mui/material";
import { RouteType } from "../../models/RouteType";
import { Link as RouterLink, useLocation} from "react-router-dom";
import { getRouteIndex } from "../../util/functions";

const NavigatorDesktop: React.FC<{items: RouteType[]}> = ({items}) => {
    const location = useLocation();
    console.log(location);

    const getRouteIndexCallback = React.useCallback(getRouteIndex, [items, location]);
    const tabNumber = getRouteIndexCallback(items, location.pathname );

    function getTabs(): React.ReactNode {
        return items.map(item => <Tab style={{color: 'white'}} key={item.path} 
        component={RouterLink} to={item.path} label={item.label} />)  // RouterLink named individually and 
        // entered manualy just for the case we have more links for the same "react-router-dom"
    }    
    return <AppBar position={"fixed"}>
                <Tabs indicatorColor="secondary" value={tabNumber}> 
                    {getTabs()}
                </Tabs>
            </AppBar>
}
export default NavigatorDesktop;