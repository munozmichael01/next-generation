"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n_COMPANY = void 0;
const languages_1 = require("../languages");
const pages_1 = require("../pages");
exports.i18n_COMPANY = {
    key: pages_1.PagesKeys.company,
    path: {
        [languages_1.Languages.es]: '/empresa',
        [languages_1.Languages.en]: '/company',
        [languages_1.Languages.pt]: '/empresa',
    },
    label: {
        [languages_1.Languages.es]: 'Empresa',
        [languages_1.Languages.en]: 'Company',
        [languages_1.Languages.pt]: 'Empresa',
    }
};
