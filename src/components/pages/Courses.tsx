import React from "react";
import { coursesService } from "../../config/service-config";
const Courses: React.FC = () =>
{
    //TODO:
    // using method 'get' of coursesService return <ul> 
    // with courses listed as <li> items to contain JSON for each single course
    
    return <ul>
        {coursesService.get().map(c => <li key={c.id}>{JSON.stringify(c)}</li>)}
    </ul>
}
export default Courses;