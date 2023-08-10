import React from "react";
import { coursesService } from "../../config/service-config";
import { getMaxMinAvgByField } from "../../util/functions";
const StatisticCost: React.FC = () =>
{
    // TODO:
    // the component to  return statistically calculation for the 'cost'
    // field for all the courses in the form of three labels: first to return 
    // the course with maximal cost among all the couress, second to return 
    // the course with the minimal cost and the last to return average cost 
    // of all the courses. 
    const statObj = getMaxMinAvgByField (coursesService.get(),'cost');
    return <div>{statObj.min == 0 ? <label style={{fontSize: "2em"}}>No Data</label> :
    <div style={{ fontSize: "1.5em", display: 'flex', justifyContent: 'space-evenly' }}>
    <label>min cost = {statObj.min}</label>
    <label>max cost = {statObj.max}</label>
    <label>avg cost = {statObj.avg}</label>
</div>}
</div>
}
export default StatisticCost;