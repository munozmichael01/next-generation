"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n_OFFER_DETAIL = void 0;
const languages_1 = require("../languages");
const pages_1 = require("../pages");
exports.i18n_OFFER_DETAIL = {
    key: pages_1.PagesKeys.offerDetail,
    path: {
        [languages_1.Languages.es]: '/oferta/:parent/:slug',
        [languages_1.Languages.en]: '/offer/:parent/:slug',
        [languages_1.Languages.pt]: '/oferta/:parent/:slug',
    },
    label: {
        [languages_1.Languages.es]: 'Detalle de Oferta',
        [languages_1.Languages.en]: 'Offer Detail',
        [languages_1.Languages.pt]: 'Detalhe da Oferta',
    }
};
