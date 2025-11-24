import { Languages } from "./languages";
export interface I18nRoutes {
    key: string;
    path: {
        [key in Languages]: string;
    };
    label: {
        [key in Languages]: string;
    };
}
