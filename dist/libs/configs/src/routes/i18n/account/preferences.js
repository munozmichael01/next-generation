"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n_ACCOUNT_PREFERENCES = void 0;
const languages_1 = require("../../languages");
const pages_1 = require("../../pages");
exports.i18n_ACCOUNT_PREFERENCES = {
    key: pages_1.PagesKeys.accountPreferences,
    path: {
        [languages_1.Languages.es]: '/cuenta/preferencias',
        [languages_1.Languages.en]: '/account/preferences',
        [languages_1.Languages.pt]: '/conta/preferencias',
    },
    label: {
        [languages_1.Languages.es]: 'Mis preferencias',
        [languages_1.Languages.en]: 'My preferences',
        [languages_1.Languages.pt]: 'Minhas preferências',
    }
};
