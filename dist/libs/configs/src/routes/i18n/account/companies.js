"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n_ACCOUNT_COMPANIES = void 0;
const languages_1 = require("../../languages");
const pages_1 = require("../../pages");
exports.i18n_ACCOUNT_COMPANIES = {
    key: pages_1.PagesKeys.accountCompanies,
    path: {
        [languages_1.Languages.es]: '/cuenta/empresas',
        [languages_1.Languages.en]: '/account/companies',
        [languages_1.Languages.pt]: '/conta/empresas',
    },
    label: {
        [languages_1.Languages.es]: 'Seguir empresas',
        [languages_1.Languages.en]: 'Follow companies',
        [languages_1.Languages.pt]: 'Seguir empresas',
    }
};
