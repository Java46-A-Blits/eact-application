import React from "react";
import { AppBar, Tab, Tabs } from "@mui/material";
import { RouteType } from "../../models/RouteType";
import { Link as RouterLink} from "react-router-dom";

const NavigatorDesktop: React.FC<{items: RouteType[]}> = ({items}) => {
    const[tabNumber, setTabNumber] = React.useState<number>(0);

    function changeTab( event: any, tabNumber: number) {
        setTabNumber(tabNumber);
    }
    function getTabs(): React.ReactNode {
        return items.map(item => <Tab style={{color: 'white'}} key={item.path} 
        component={RouterLink} to={item.path} label={item.label} />)  // RouterLink named individually and 
        // entered manualy just for the case we have more links for the same "react-router-dom"
    }    
    return <AppBar position={"fixed"}>
                <Tabs indicatorColor="secondary" value={tabNumber} onChange={changeTab}> 
                    {getTabs()}
                </Tabs>
            </AppBar>
}
export default NavigatorDesktop;