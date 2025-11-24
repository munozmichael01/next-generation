"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n_ACCOUNT_KILLER_QUESTIONS_DETAIL = void 0;
const languages_1 = require("../../languages");
const pages_1 = require("../../pages");
exports.i18n_ACCOUNT_KILLER_QUESTIONS_DETAIL = {
    key: pages_1.PagesKeys.accountKillerQuestionsDetail,
    path: {
        [languages_1.Languages.es]: '/cuenta/preguntas-muertas/:slug',
        [languages_1.Languages.en]: '/account/killer-questions/:slug',
        [languages_1.Languages.pt]: '/conta/perguntas-mortas/:slug',
    },
    label: {
        [languages_1.Languages.es]: 'Nuevo cuestionario',
        [languages_1.Languages.en]: 'New killer questions',
        [languages_1.Languages.pt]: 'Nova pergunta morta',
    }
};
