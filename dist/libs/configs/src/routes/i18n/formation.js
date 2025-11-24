"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n_FORMATION = void 0;
const languages_1 = require("../languages");
const pages_1 = require("../pages");
exports.i18n_FORMATION = {
    key: pages_1.PagesKeys.formation,
    path: {
        [languages_1.Languages.es]: '/formacion',
        [languages_1.Languages.en]: '/formation',
        [languages_1.Languages.pt]: '/formacao',
    },
    label: {
        [languages_1.Languages.es]: 'Formación',
        [languages_1.Languages.en]: 'Formation',
        [languages_1.Languages.pt]: 'Formação',
    }
};
