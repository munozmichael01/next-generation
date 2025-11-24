"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n_OFFER_APPLY = void 0;
const languages_1 = require("../languages");
const pages_1 = require("../pages");
exports.i18n_OFFER_APPLY = {
    key: pages_1.PagesKeys.offerApply,
    path: {
        [languages_1.Languages.es]: '/oferta/:parent/:slug/aplicar',
        [languages_1.Languages.en]: '/offer/:parent/:slug/apply',
        [languages_1.Languages.pt]: '/oferta/:parent/:slug/aplicar',
    },
    label: {
        [languages_1.Languages.es]: 'Aplicar a Oferta',
        [languages_1.Languages.en]: 'Apply to Offer',
        [languages_1.Languages.pt]: 'Postular a Oferta',
    }
};
