"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n_ACCOUNT_BILLING = void 0;
const languages_1 = require("../../languages");
const pages_1 = require("../../pages");
exports.i18n_ACCOUNT_BILLING = {
    key: pages_1.PagesKeys.accountBilling,
    path: {
        [languages_1.Languages.es]: '/cuenta/facturacion',
        [languages_1.Languages.en]: '/account/billing',
        [languages_1.Languages.pt]: '/conta/facturacao',
    },
    label: {
        [languages_1.Languages.es]: 'Facturación',
        [languages_1.Languages.en]: 'Billing',
        [languages_1.Languages.pt]: 'Faturamento',
    }
};
