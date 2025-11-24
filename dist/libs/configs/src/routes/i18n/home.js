"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n_HOME = void 0;
const languages_1 = require("../languages");
const pages_1 = require("../pages");
exports.i18n_HOME = {
    key: pages_1.PagesKeys.home,
    path: {
        [languages_1.Languages.es]: '/es',
        [languages_1.Languages.en]: '/en',
        [languages_1.Languages.pt]: '/pt',
    },
    label: {
        [languages_1.Languages.es]: 'Inicio',
        [languages_1.Languages.en]: 'Home',
        [languages_1.Languages.pt]: 'Início',
    }
};
