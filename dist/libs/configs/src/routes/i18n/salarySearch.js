"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n_SALARY_SEARCH = void 0;
const languages_1 = require("../languages");
const pages_1 = require("../pages");
exports.i18n_SALARY_SEARCH = {
    key: pages_1.PagesKeys.salarySearch,
    path: {
        [languages_1.Languages.es]: '/buscador-salarios',
        [languages_1.Languages.en]: '/salary-search',
        [languages_1.Languages.pt]: '/pesquisa-salarios',
    },
    label: {
        [languages_1.Languages.es]: 'Salarios',
        [languages_1.Languages.en]: 'Salary Search',
        [languages_1.Languages.pt]: 'Pesquisa Salários',
    }
};
