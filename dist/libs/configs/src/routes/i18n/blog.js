"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n_BLOG = void 0;
const languages_1 = require("../languages");
const pages_1 = require("../pages");
exports.i18n_BLOG = {
    key: pages_1.PagesKeys.blog,
    path: {
        [languages_1.Languages.es]: '/blog',
        [languages_1.Languages.en]: '/blog',
        [languages_1.Languages.pt]: '/blog',
    },
    label: {
        [languages_1.Languages.es]: 'Blog',
        [languages_1.Languages.en]: 'Blog',
        [languages_1.Languages.pt]: 'Blog',
    }
};
