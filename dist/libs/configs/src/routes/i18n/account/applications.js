"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n_ACCOUNT_APPLICATIONS = void 0;
const languages_1 = require("../../languages");
const pages_1 = require("../../pages");
exports.i18n_ACCOUNT_APPLICATIONS = {
    key: pages_1.PagesKeys.accountApplications,
    path: {
        [languages_1.Languages.es]: '/cuenta/solicitudes',
        [languages_1.Languages.en]: '/account/applications',
        [languages_1.Languages.pt]: '/conta/solicitudes',
    },
    label: {
        [languages_1.Languages.es]: 'Mis ofertas',
        [languages_1.Languages.en]: 'My offers',
        [languages_1.Languages.pt]: 'Minhas ofertas',
    }
};
