import React from "react";
import { Course, createCourse } from "../../models/Course";
import courseData from  "../../config/courseData.json"
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

type Props = {
    submitFn: (course: Course) => void;
    courseUpdate?: Course;
}
const initialCourse: Course = createCourse(0, "", "", 0, 0, new Date("0000-00-00"));
const CourseForm: React.FC<Props> = ({submitFn, courseUpdate}) => {
    const {courses, minHours, maxHours, minCost, maxCost, minYear, maxYear, lectors} = courseData;
    const [course, setCourse] = React.useState ( courseUpdate || initialCourse);

    function onSubmit(event: any){
        event.preventDefault();
        submitFn(course);
        document.querySelector('form')!.reset(); // to reset all the fields after 'submit'
        // '!' - means to assure form is an HTML element, '?' means may form may be NULL 
    }
    function handlerCourse(event: any): void {
        const courseCopy = {...course};
        courseCopy.name = event.target.value;
        setCourse(courseCopy);
    }
    function handlerLecturer(event: any): void{
        const courseCopy = {...course};
        courseCopy.lecturer = event.target.value;
        setCourse(courseCopy);
    }
    function handlerHours(event: any): void {
        const courseCopy ={...course};
        courseCopy.hours = +event.target.value;
        setCourse(courseCopy);
    }
    function handlerCost(event: any): void{
        const courseCopy = {...course};
        courseCopy.cost = +event.target.value;
        setCourse(courseCopy);
    }
 
    function handlerOpeningDate(event: any): void {
        const courseCopy = {...course};                            // *****
        courseCopy.openingDate = new Date(event.target.value);     // *****
        setCourse(courseCopy);
    }
    function onReset() {
        setCourse(courseUpdate || initialCourse);
    }


return<Box>
    <Typography gutterBottom variant={'h4'}
     sx={{fontSize: {xs: '1.3em', sm: '1em', md: '2em'}, textAlign: 'center', fontWeight: 'bold'}}>
        {!!courseUpdate ? `Updating course with id: ${courseUpdate.id}` : 'Adding a new course'}
    </Typography>
     <form onSubmit={onSubmit} onReset={onReset}>  {/* added 'onReset' to resolve a bug */}
     <Grid container spacing={{xs:5, sm: 2, md: 8}} justifyContent={"center"}>
        <Grid item xs={10} sm={5} >
            <FormControl fullWidth required >
                <InputLabel id='course-select-label' > Course Name </InputLabel>
                <Select
                    labelId="course-select-label"
                    id="demo-simple-select"
                    label="Course Name"
                    value={course.name}                             // *****
                    onChange={handlerCourse}
                    inputProps={
                        {readOnly: !!courseUpdate}
                    }
                    >
                        <MenuItem value="" > None </MenuItem>
                        {getCourseItems(courses)}
                </Select>
            </FormControl>           
        </Grid>
        <Grid item xs={10} sm={5}>
            <FormControl fullWidth required>
                <InputLabel id='lecturer-select-label'> Lecturer </InputLabel>
                <Select
                    labelId='lecturer-select-label'
                    id='demo-simple-select'
                    label="Lecturer"
                    value={course.lecturer}
                    onChange={handlerLecturer}
                    >
                        <MenuItem value=""> None </MenuItem>
                        {getCourseItems(lectors)}
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={10} sm={5}>
            <TextField type="number" label="Hours" fullWidth required 
            onChange={handlerHours} helperText={`enter hours in range [${minHours}-${maxHours}]`}
            value={course.hours || ''}
            inputProps={{
                min: `${minHours}`,
                max: `${maxHours}`
            }} />
        </Grid>
        <Grid item xs={10} sm={5}>
            <TextField type="number" label="Cost" fullWidth required
            onChange={handlerCost} helperText={`enter cost in range [${minCost}-${maxCost}]`}
            value={course.cost || ''}
            inputProps={{
                min: `${minCost}`,
                max: `${maxCost}`
            }}/>
        </Grid>
        <Grid item xs={10} sm={5}>
            <TextField type="date" label="Opening Date" fullWidth required
            onChange={handlerOpeningDate}
            value={!!course.openingDate.getFullYear() ? getIsoDate(course.openingDate) : ''}
            inputProps={{
                min: `${minYear}-01-01`,
                max: `${maxYear}-31-12`
            }}
            InputLabelProps={{
                shrink: true
            }}/>
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
    </Box>
}
export default CourseForm;

function getCourseItems(items: string[]): React.ReactNode {
    return items.map(i => <MenuItem value={i} key={i}> {i} </MenuItem>);
}
function getIsoDate(dateValue: Date): string {
    const day = dateValue.getDate() + 1;
    const month = dateValue.getMonth();
    const year = dateValue.getFullYear();
    const dateUTC = new Date(year, month, day);
    return dateUTC.toISOString().substring(0,10);
}