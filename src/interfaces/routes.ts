import { IconType } from "react-icons/lib";

export interface Breadcrumb {
    labelKey: string; 
    parent?: string; 
    render: boolean; 
    meta?: {
        descriptionKey?: string; 
        keywordsKey?: string[]; 
    };
}

export interface AppRoute {
    path: string; 
    breadcrumb: Breadcrumb; 
    component: React.FC;
    isVisible: boolean;
    icon?: IconType;
}
