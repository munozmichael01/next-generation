"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n_LEGAL_NOTICE = void 0;
const languages_1 = require("../languages");
const pages_1 = require("../pages");
exports.i18n_LEGAL_NOTICE = {
    key: pages_1.PagesKeys.legalNotice,
    path: {
        [languages_1.Languages.es]: '/aviso-legal',
        [languages_1.Languages.en]: '/legal-notice',
        [languages_1.Languages.pt]: '/aviso-legal',
    },
    label: {
        [languages_1.Languages.es]: 'Aviso legal',
        [languages_1.Languages.en]: 'Legal notice',
        [languages_1.Languages.pt]: 'Aviso legal',
    }
};
