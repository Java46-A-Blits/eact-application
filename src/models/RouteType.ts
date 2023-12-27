import { ReactNode } from "react";

export type RouteType = {
    path: string;
    label: string;
    element: ReactNode;
    authenticated?: boolean; // if true - route item will be shown if client authenticated
    administrator?: boolean;
}