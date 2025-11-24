"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n_ABOUT_US = void 0;
const languages_1 = require("../languages");
const pages_1 = require("../pages");
exports.i18n_ABOUT_US = {
    key: pages_1.PagesKeys.aboutUs,
    path: {
        [languages_1.Languages.es]: '/nosotros',
        [languages_1.Languages.en]: '/about-us',
        [languages_1.Languages.pt]: '/sobre-nos',
    },
    label: {
        [languages_1.Languages.es]: 'Nosotros',
        [languages_1.Languages.en]: 'About Us',
        [languages_1.Languages.pt]: 'Sobre Nós',
    }
};
