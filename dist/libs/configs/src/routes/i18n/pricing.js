"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n_PRICING = void 0;
const languages_1 = require("../languages");
const pages_1 = require("../pages");
exports.i18n_PRICING = {
    key: pages_1.PagesKeys.pricing,
    path: {
        [languages_1.Languages.es]: '/precios',
        [languages_1.Languages.en]: '/pricing',
        [languages_1.Languages.pt]: '/precos',
    },
    label: {
        es: 'Precios',
        en: 'Pricing',
        pt: 'Preços',
    },
};
