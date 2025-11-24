"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WEB_LEGAL_NOTICE_ROUTE = exports.WEB_POLICIES_PRIVACY_ROUTE = exports.WEB_POLICIES_COOKIES_ROUTE = exports.WEB_TERMS_OF_USE_ROUTE = exports.WEB_COMPANY_DETAIL_ROUTE = exports.WEB_ACCOUNT_SETTINGS_ROUTE = exports.WEB_ACCOUNT_PROFILE_B2B_ROUTE = exports.WEB_ACCOUNT_PROFILE_B2C_ROUTE = exports.WEB_OFFER_APPLY_ROUTE = exports.WEB_OFFER_DETAIL_ROUTE = exports.WEB_SEARCH_OFFER_ROUTE = exports.WEB_COMPANY_SIGN_UP_SUCCESS_ROUTE = exports.WEB_B2B_SIGN_UP_ROUTE = exports.WEB_SIGN_UP_ROUTE = exports.WEB_LOGIN_ROUTE = exports.WEB_HEADER_B2B_ROUTES = exports.WEB_HEADER_COMMON_ROUTES = exports.WEB_HEADER_LOGO_ROUTES = void 0;
const pages_1 = require("../pages");
const routes_1 = require("../routes");
// WEB:
exports.WEB_HEADER_LOGO_ROUTES = routes_1.Routes[pages_1.PagesKeys.home];
exports.WEB_HEADER_COMMON_ROUTES = [
    routes_1.Routes[pages_1.PagesKeys.salarySearch],
    routes_1.Routes[pages_1.PagesKeys.practice],
    routes_1.Routes[pages_1.PagesKeys.blog],
    routes_1.Routes[pages_1.PagesKeys.formation],
    routes_1.Routes[pages_1.PagesKeys.events],
];
exports.WEB_HEADER_B2B_ROUTES = [
    routes_1.Routes[pages_1.PagesKeys.products],
    routes_1.Routes[pages_1.PagesKeys.pricing],
];
exports.WEB_LOGIN_ROUTE = routes_1.Routes[pages_1.PagesKeys.login];
exports.WEB_SIGN_UP_ROUTE = routes_1.Routes[pages_1.PagesKeys.signUp];
exports.WEB_B2B_SIGN_UP_ROUTE = routes_1.Routes[pages_1.PagesKeys.companySignUp];
exports.WEB_COMPANY_SIGN_UP_SUCCESS_ROUTE = routes_1.Routes[pages_1.PagesKeys.companySignUpSuccess];
exports.WEB_SEARCH_OFFER_ROUTE = routes_1.Routes[pages_1.PagesKeys.searchOffer];
exports.WEB_OFFER_DETAIL_ROUTE = routes_1.Routes[pages_1.PagesKeys.offerDetail];
exports.WEB_OFFER_APPLY_ROUTE = routes_1.Routes[pages_1.PagesKeys.offerApply];
exports.WEB_ACCOUNT_PROFILE_B2C_ROUTE = [
    {
        icon: 'home',
        route: routes_1.Routes[pages_1.PagesKeys.accountProfile],
    },
    {
        icon: 'barChartUp',
        route: routes_1.Routes[pages_1.PagesKeys.accountPreferences],
    },
    {
        icon: 'clipboard',
        route: routes_1.Routes[pages_1.PagesKeys.accountApplications],
    },
    {
        icon: 'star',
        route: routes_1.Routes[pages_1.PagesKeys.accountReviews],
    },
    {
        icon: 'chatBubbles',
        route: routes_1.Routes[pages_1.PagesKeys.accountMessages],
    },
    {
        icon: 'browser',
        route: routes_1.Routes[pages_1.PagesKeys.accountCompanies],
    },
    {
        icon: 'notificationBell',
        route: routes_1.Routes[pages_1.PagesKeys.accountAlerts],
    },
    {
        icon: 'alarmBell',
        route: routes_1.Routes[pages_1.PagesKeys.accountNotifications],
    }
];
exports.WEB_ACCOUNT_PROFILE_B2B_ROUTE = [
    {
        icon: 'home',
        route: routes_1.Routes[pages_1.PagesKeys.accountProfile],
    },
    {
        icon: 'barChartUp',
        route: routes_1.Routes[pages_1.PagesKeys.accountMetrics],
    },
    {
        icon: 'clipboard',
        route: routes_1.Routes[pages_1.PagesKeys.accountOffers],
    },
    {
        icon: 'star',
        route: routes_1.Routes[pages_1.PagesKeys.accountKillerQuestions],
    },
    {
        icon: 'chatBubbles',
        route: routes_1.Routes[pages_1.PagesKeys.accountMessages],
    },
    {
        icon: 'browser',
        route: routes_1.Routes[pages_1.PagesKeys.accountCompany],
    },
    {
        icon: 'clipboard',
        route: routes_1.Routes[pages_1.PagesKeys.accountCvSearch],
    },
    {
        icon: 'clipboard',
        route: routes_1.Routes[pages_1.PagesKeys.accountProducts],
    },
    {
        icon: 'clipboard',
        route: routes_1.Routes[pages_1.PagesKeys.accountStore],
    },
    {
        icon: 'notificationBell',
        route: routes_1.Routes[pages_1.PagesKeys.accountBilling],
    },
    ,
    {
        icon: 'alarmBell',
        route: routes_1.Routes[pages_1.PagesKeys.accountNotifications],
    }
];
exports.WEB_ACCOUNT_SETTINGS_ROUTE = routes_1.Routes[pages_1.PagesKeys.accountSettings];
exports.WEB_COMPANY_DETAIL_ROUTE = routes_1.Routes[pages_1.PagesKeys.companiesDetail];
exports.WEB_TERMS_OF_USE_ROUTE = routes_1.Routes[pages_1.PagesKeys.termsOfUse];
exports.WEB_POLICIES_COOKIES_ROUTE = routes_1.Routes[pages_1.PagesKeys.policiesCookies];
exports.WEB_POLICIES_PRIVACY_ROUTE = routes_1.Routes[pages_1.PagesKeys.policiesPrivacy];
exports.WEB_LEGAL_NOTICE_ROUTE = routes_1.Routes[pages_1.PagesKeys.legalNotice];
