import { Course } from "../models/Course";
import { getRandomNumber } from "../util/random";
import CourcesService from "./CourcesService";

export default class CoursesServiceArray implements CourcesService{
    courses: Course[] = [];
    async add(course: Course): Promise<void> {
        const id = getRandomNumber(100000, 999000);
        course.id = id;
        this.courses.push(course);
    }
    async remove(id: number): Promise<void> {
        const index = this.getIndex(id);
        this.courses.splice(index,1);
    }
    getIndex(id: number): number {
        const index = this.courses.findIndex(c => c.id === id);
        if (index < 0 ){
            throw `course with ${id} doesn't exist`
        }
        return index;
    }
    async update(id: number, course: Course): Promise<void> {
        const index = this.getIndex(id);
        if (course.id !== id){
            throw `id ${id} doesn't match the course id ${course.id}` 
        }
        this.courses[index] = course;
    }
    async get(): Promise<Course[]> {
        return this.courses.slice();
    }
    
}
