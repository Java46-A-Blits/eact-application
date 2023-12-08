import AddCourse from "../components/pages/AddCourse";
import Courses from "../components/pages/Courses";
import Generate from "../components/pages/Generation";
import Login from "../components/pages/Login";
import Logout from "../components/pages/Logout";
import StatisticHours from "../components/pages/StastaisticsHours";
import StatisticsCost from "../components/pages/StatisticCost";
import { RouteType } from "../models/RouteType";

export const COURSES_PATH = '/';
export const ADD_COURSE_PATH = '/course/add';
export const STATISTIC_HOURS_PATH = '/statistic/hours';
export const STATISTIC_COST_PATH = '/statistic/cost';
export const LOGIN_PATH = '/login';
export const LOGOUT_PATH = '/logout';
export const GENERATION_PATH = '/generation';
export const ROUTES: RouteType[] = [
    {path: COURSES_PATH, label: 'Courses', element: <Courses/>, authenticated: true},
    {path: ADD_COURSE_PATH, label: 'New Course', element:<AddCourse/>, authenticated: true},
    {path: STATISTIC_HOURS_PATH, label:'Stataistics Hours', element: <StatisticHours/>, authenticated: true},
    {path: STATISTIC_COST_PATH, label: 'Statistics Cost', element: <StatisticsCost/>, authenticated: true},
    {path: LOGIN_PATH, label: 'Login', element:<Login/>},
    {path: LOGOUT_PATH, label: 'Logout', element: <Logout/>, authenticated: true},
    {path: GENERATION_PATH, label: 'Generation', element: <Generate/>, authenticated: true}    
]
