"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n_PRACTICE = void 0;
const languages_1 = require("../languages");
const pages_1 = require("../pages");
exports.i18n_PRACTICE = {
    key: pages_1.PagesKeys.practice,
    path: {
        [languages_1.Languages.es]: '/practicas',
        [languages_1.Languages.en]: '/practice',
        [languages_1.Languages.pt]: '/praticas',
    },
    label: {
        [languages_1.Languages.es]: 'Prácticas',
        [languages_1.Languages.en]: 'Practice',
        [languages_1.Languages.pt]: 'Práticas',
    }
};
