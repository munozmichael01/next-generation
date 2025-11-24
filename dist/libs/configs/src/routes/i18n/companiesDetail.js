"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n_COMPANY_DETAIL = void 0;
const languages_1 = require("../languages");
const pages_1 = require("../pages");
exports.i18n_COMPANY_DETAIL = {
    key: pages_1.PagesKeys.companiesDetail,
    path: {
        [languages_1.Languages.es]: '/empresas/:slug',
        [languages_1.Languages.en]: '/companies/:slug',
        [languages_1.Languages.pt]: '/empresas/:slug',
    },
    label: {
        [languages_1.Languages.es]: 'Empresa',
        [languages_1.Languages.en]: 'Company',
        [languages_1.Languages.pt]: 'Empresa',
    }
};
