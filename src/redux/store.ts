import { combineReducers } from "redux";
import { Course } from "../models/Course";
import { clientDataReducer, coursesReducer } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import { ClientData } from "../models/ClientData";

export type StateType = {
    courses: Course[],
    clientData: ClientData
}
const reducer = combineReducers<StateType> ({
    courses : coursesReducer as any,
    clientData: clientDataReducer as any
})
export const store = configureStore({reducer})
