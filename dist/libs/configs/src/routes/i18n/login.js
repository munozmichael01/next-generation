"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n_LOGIN = void 0;
const languages_1 = require("../languages");
const pages_1 = require("../pages");
exports.i18n_LOGIN = {
    key: pages_1.PagesKeys.login,
    path: {
        [languages_1.Languages.es]: '/inicia-sesion',
        [languages_1.Languages.en]: '/login',
        [languages_1.Languages.pt]: '/iniciar-sessao',
    },
    label: {
        [languages_1.Languages.es]: 'Inicia sesión',
        [languages_1.Languages.en]: 'Login',
        [languages_1.Languages.pt]: 'Iniciar sessão',
    }
};
