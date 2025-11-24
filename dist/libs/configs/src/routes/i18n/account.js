"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n_ACCOUNT = void 0;
const languages_1 = require("../languages");
const pages_1 = require("../pages");
exports.i18n_ACCOUNT = {
    key: pages_1.PagesKeys.account,
    path: {
        [languages_1.Languages.es]: '/cuenta',
        [languages_1.Languages.en]: '/account',
        [languages_1.Languages.pt]: '/conta',
    },
    label: {
        [languages_1.Languages.es]: 'Cuenta',
        [languages_1.Languages.en]: 'Account',
        [languages_1.Languages.pt]: 'Conta',
    }
};
