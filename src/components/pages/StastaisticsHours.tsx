import React from "react";
import { getMaxMinAvgByField } from "../../util/functions";
import { coursesService } from "../../config/service-config";
const StatisticsHours: React.FC = () =>
{
    // TODO:
    // the component to  return statistically calculation for the 'hours'
    // field for all the courses in the form of three labels: first to return 
    // the course with maximal hours among all the couress, 
    //second to return the course with minimal hours and 
    //the last to return average hours of all the courses. 
    const statObj = getMaxMinAvgByField (coursesService.get(), 'hours');
    return <div style={{fontSize: 30, display: "flex", justifyContent: "space-evenly" }} >
        <label> Minimal hours = {statObj.min}</label>
        <label> Maximal hours = {statObj.max}</label>
        <label> Average hours = {statObj.avg}</label>
    </div>
}
export default StatisticsHours;