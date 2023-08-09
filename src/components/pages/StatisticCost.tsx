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
    return <div style={{fontSize: 30, display: "flex", justifyContent: "space-evenly"}}>
        <label>Minimal cost = {statObj.min} </label>
        <label>Maximal cost = {statObj.max} </label>
        <label>Average = {statObj.avg} </label>
    </div>
}
export default StatisticCost;