"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n_SEARCH_OFFER = void 0;
const languages_1 = require("../languages");
const pages_1 = require("../pages");
exports.i18n_SEARCH_OFFER = {
    key: pages_1.PagesKeys.searchOffer,
    path: {
        [languages_1.Languages.es]: '/ofertas-trabajo/:slug*',
        [languages_1.Languages.en]: '/search-offer/:slug*',
        [languages_1.Languages.pt]: '/pesquisa-ofertas/:slug*',
    },
    label: {
        [languages_1.Languages.es]: 'Ofertas de Trabajo',
        [languages_1.Languages.en]: 'Search Offer',
        [languages_1.Languages.pt]: 'Pesquisa Ofertas',
    }
};
