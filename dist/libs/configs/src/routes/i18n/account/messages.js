"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n_ACCOUNT_MESSAGES = void 0;
const languages_1 = require("../../languages");
const pages_1 = require("../../pages");
exports.i18n_ACCOUNT_MESSAGES = {
    key: pages_1.PagesKeys.accountMessages,
    path: {
        [languages_1.Languages.es]: '/cuenta/mensajes',
        [languages_1.Languages.en]: '/account/messages',
        [languages_1.Languages.pt]: '/conta/mensagens',
    },
    label: {
        [languages_1.Languages.es]: 'Mensajes',
        [languages_1.Languages.en]: 'Messages',
        [languages_1.Languages.pt]: 'Mensagens',
    }
};
