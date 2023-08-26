import { useDispatch, useSelector } from "react-redux"; 
import { getRandomNumber } from "./random";
import { ImitatorAction, imitatorActions } from "../config/imitator-config";
import { addCourse, removeCourse, updateCourse } from "../redux/actions";
import { getRandomCourse } from "./randomCourse";
import { coursesReducer } from "../redux/reducers";
import courseData from '../config/courseData.json';
import { useEffect } from "react";
import { Course } from "../models/Course";
import { StateType } from "../redux/store"; 

let courses: Course[];
export function useImitator(){
    courses = useSelector<StateType, Course[]>(state => state.courses)
    const dispatch = useDispatch();

    useEffect(() => {
        const intervalId = setInterval(action, 2000);
        return () => clearInterval(intervalId);
    }, []);

    function action(){
        const number = getRandomNumber(0, 100);
        const imitatorAction: ImitatorAction = getAction(number);
        switch(imitatorAction.action){
            case 'add' : dispatchAdd(); break;
            case 'remove': dispatchRemove(); break;
            case 'update' : dispatchUpdate(); break;
            default: break;
        }
        function dispatchAdd(){
            return dispatch(addCourse(getRandomCourse(courseData)));
        }
        function dispatchRemove(){
            console.log('removing')
            if (courses.length !== 0){
                const index = getRandomNumber(0, courses.length - 1);
                dispatch(removeCourse(courses[index].id));
                console.log(`removed course with id ${courses[index].id}`);
            }            
        }
        function dispatchUpdate(){ 
            console.log('updating');
            if (courses.length !== 0){
                const index = getRandomNumber(0, courses.length - 1);
                const course = getRandomCourse(courseData);
                course.id = courses[index].id; // the replaced couse id has to equal the new (generated 'course') id
                dispatch(updateCourse(course))
                console.log(`updated course with ID : ${courses[index].id}`)

            }            
        }
    }    
}

// function getAction(number: any): ImitatorAction {
//     for (let i = 0; i < imitatorActions.length; i++) {
//         if (number < imitatorActions[i].prob) {
//             return imitatorActions[i];
//         }
//     }
//     return imitatorActions[imitatorActions.length - 1];
// }
function getAction(num: number): ImitatorAction {
    return imitatorActions.find(ia => num <= ia.prob) ?? imitatorActions[imitatorActions.length -1];
  
}

