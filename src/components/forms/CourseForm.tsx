import React from "react";
import { Course, createCourse } from "../../models/Course";
import courseData from  "../../config/courseData.json"
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";

type Props = {
    submitFn: (course: Course) => void;
}
const initialCourse: Course = createCourse(0, "", "Haim", 0, 5000, new Date());
const CourseForm: React.FC<Props> = ({submitFn}) => {
    const {courses, minHours, maxHours} = courseData;
    const [course, setCourse] = React.useState (initialCourse);
    function onSubmit(event: any){
        event.preventDefault();
        console.log(course);
        submitFn(course);
    }
    function handlerCourse(event: any): void {
        const courseCopy = {...course};
        courseCopy.name = event.target.value;
        setCourse(courseCopy);
    }
    function handlerHours(event: any): void {
        const courseCopy ={...course};
        courseCopy.hours = +event.target.value;
        setCourse(courseCopy);
    }
 
return <form onSubmit={onSubmit}> 
    <Grid container>
        <Grid item xs={12} sm={6} >
            <FormControl fullWidth required >
                <InputLabel id='course-select-label' > Course Name </InputLabel>
                <Select
                    labelId="course-select-label"
                    id="demo-simple-select"
                    label="Course Name"
                    value={course.name}
                    onChange={handlerCourse}
                    >
                        <MenuItem value="" > None </MenuItem>
                        {getCourseItems(courses)}
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField type="number" label="hours" fullWidth required value={course.hours || ""}
            onChange={handlerHours}
            inputProps={{
                min: `${minHours}`,
                max: `${maxHours}`
            }} />
        </Grid>
        <Grid container justifyContent={"center"}>
            <Grid item xs={5}>
                <Button type="submit"> Submit </Button>
            </Grid>
            <Grid item xs={5}>
               <Button type="reset"> Reset </Button>
            </Grid>
        </Grid>

    </Grid>
    </form>
}
export default CourseForm;

function getCourseItems(courses: string[]): React.ReactNode {
    return courses.map(c => <MenuItem value={c} key={c}> {c} </MenuItem>);
}
