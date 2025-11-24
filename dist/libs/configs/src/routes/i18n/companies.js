"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n_COMPANIES = void 0;
const languages_1 = require("../languages");
const pages_1 = require("../pages");
exports.i18n_COMPANIES = {
    key: pages_1.PagesKeys.companies,
    path: {
        [languages_1.Languages.es]: '/empresas',
        [languages_1.Languages.en]: '/companies',
        [languages_1.Languages.pt]: '/empresas',
    },
    label: {
        [languages_1.Languages.es]: 'Empresas',
        [languages_1.Languages.en]: 'Companies',
        [languages_1.Languages.pt]: 'Empresas',
    }
};
