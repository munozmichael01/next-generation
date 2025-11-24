"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n_FAQS = void 0;
const languages_1 = require("../languages");
const pages_1 = require("../pages");
exports.i18n_FAQS = {
    key: pages_1.PagesKeys.faqs,
    path: {
        [languages_1.Languages.es]: '/preguntas-frecuentes',
        [languages_1.Languages.en]: '/faqs',
        [languages_1.Languages.pt]: '/perguntas-frequentes',
    },
    label: {
        [languages_1.Languages.es]: 'Preguntas Frecuentes',
        [languages_1.Languages.en]: 'FAQs',
        [languages_1.Languages.pt]: 'Perguntas Frequentes',
    }
};
