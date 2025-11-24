"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const pages_1 = require("./pages");
const aboutUs_1 = require("./i18n/aboutUs");
const account_1 = require("./i18n/account");
const alerts_1 = require("./i18n/account/alerts");
const applications_1 = require("./i18n/account/applications");
const billing_1 = require("./i18n/account/billing");
const companies_1 = require("./i18n/account/companies");
const company_1 = require("./i18n/account/company");
const cvSearch_1 = require("./i18n/account/cvSearch");
const killerQuestions_1 = require("./i18n/account/killerQuestions");
const killerQuestionsDetail_1 = require("./i18n/account/killerQuestionsDetail");
const messages_1 = require("./i18n/account/messages");
const metrics_1 = require("./i18n/account/metrics");
const notifications_1 = require("./i18n/account/notifications");
const offers_1 = require("./i18n/account/offers");
const preferences_1 = require("./i18n/account/preferences");
const products_1 = require("./i18n/account/products");
const profile_1 = require("./i18n/account/profile");
const reviews_1 = require("./i18n/account/reviews");
const settings_1 = require("./i18n/account/settings");
const store_1 = require("./i18n/account/store");
const agreementsAndPartners_1 = require("./i18n/agreementsAndPartners");
const blog_1 = require("./i18n/blog");
const companies_2 = require("./i18n/companies");
const company_2 = require("./i18n/company");
const companySignup_1 = require("./i18n/companySignup");
const companySignupSuccess_1 = require("./i18n/companySignupSuccess");
const contact_1 = require("./i18n/contact");
const events_1 = require("./i18n/events");
const faqs_1 = require("./i18n/faqs");
const formation_1 = require("./i18n/formation");
const home_1 = require("./i18n/home");
const login_1 = require("./i18n/login");
const offerApply_1 = require("./i18n/offerApply");
const offerDetail_1 = require("./i18n/offerDetail");
const postOffer_1 = require("./i18n/postOffer");
const practice_1 = require("./i18n/practice");
const pricing_1 = require("./i18n/pricing");
const products_2 = require("./i18n/products");
const salarySearch_1 = require("./i18n/salarySearch");
const searchOffer_1 = require("./i18n/searchOffer");
const signUp_1 = require("./i18n/signUp");
const companiesDetail_1 = require("./i18n/companiesDetail");
const policiesCookies_1 = require("./i18n/policiesCookies");
const legalNotice_1 = require("./i18n/legalNotice");
const policiesPrivacy_1 = require("./i18n/policiesPrivacy");
const termsOfUse_1 = require("./i18n/termsOfUse");
// Routes
exports.Routes = {
    [pages_1.PagesKeys.home]: home_1.i18n_HOME,
    [pages_1.PagesKeys.aboutUs]: aboutUs_1.i18n_ABOUT_US,
    [pages_1.PagesKeys.searchOffer]: searchOffer_1.i18n_SEARCH_OFFER,
    [pages_1.PagesKeys.salarySearch]: salarySearch_1.i18n_SALARY_SEARCH,
    [pages_1.PagesKeys.practice]: practice_1.i18n_PRACTICE,
    [pages_1.PagesKeys.blog]: blog_1.i18n_BLOG,
    [pages_1.PagesKeys.formation]: formation_1.i18n_FORMATION,
    [pages_1.PagesKeys.events]: events_1.i18n_EVENTS,
    [pages_1.PagesKeys.products]: products_2.i18n_PRODUCTS,
    [pages_1.PagesKeys.pricing]: pricing_1.i18n_PRICING,
    [pages_1.PagesKeys.login]: login_1.i18n_LOGIN,
    [pages_1.PagesKeys.signUp]: signUp_1.i18n_SIGN_UP,
    [pages_1.PagesKeys.account]: account_1.i18n_ACCOUNT,
    [pages_1.PagesKeys.accountProfile]: profile_1.i18n_ACCOUNT_PROFILE,
    [pages_1.PagesKeys.accountPreferences]: preferences_1.i18n_ACCOUNT_PREFERENCES,
    [pages_1.PagesKeys.accountOffers]: offers_1.i18n_ACCOUNT_OFFERS,
    [pages_1.PagesKeys.accountReviews]: reviews_1.i18n_ACCOUNT_REVIEWS,
    [pages_1.PagesKeys.accountMessages]: messages_1.i18n_ACCOUNT_MESSAGES,
    [pages_1.PagesKeys.accountCompanies]: companies_1.i18n_ACCOUNT_COMPANIES,
    [pages_1.PagesKeys.accountAlerts]: alerts_1.i18n_ACCOUNT_ALERTS,
    [pages_1.PagesKeys.accountNotifications]: notifications_1.i18n_ACCOUNT_NOTIFICATIONS,
    [pages_1.PagesKeys.accountMetrics]: metrics_1.i18n_ACCOUNT_METRICS,
    [pages_1.PagesKeys.accountApplications]: applications_1.i18n_ACCOUNT_APPLICATIONS,
    [pages_1.PagesKeys.accountKillerQuestions]: killerQuestions_1.i18n_ACCOUNT_KILLER_QUESTIONS,
    [pages_1.PagesKeys.accountKillerQuestionsDetail]: killerQuestionsDetail_1.i18n_ACCOUNT_KILLER_QUESTIONS_DETAIL,
    [pages_1.PagesKeys.accountCompany]: company_1.i18n_ACCOUNT_COMPANY,
    [pages_1.PagesKeys.accountCvSearch]: cvSearch_1.i18n_ACCOUNT_CV_SEARCH,
    [pages_1.PagesKeys.accountProducts]: products_1.i18n_ACCOUNT_PRODUCTS,
    [pages_1.PagesKeys.accountStore]: store_1.i18n_ACCOUNT_STORE,
    [pages_1.PagesKeys.accountBilling]: billing_1.i18n_ACCOUNT_BILLING,
    [pages_1.PagesKeys.accountSettings]: settings_1.i18n_ACCOUNT_SETTINGS,
    [pages_1.PagesKeys.agreementsAndPartners]: agreementsAndPartners_1.i18n_AGREEMENTS_AND_PARTNERS,
    [pages_1.PagesKeys.companies]: companies_2.i18n_COMPANIES,
    [pages_1.PagesKeys.company]: company_2.i18n_COMPANY,
    [pages_1.PagesKeys.companiesDetail]: companiesDetail_1.i18n_COMPANY_DETAIL,
    [pages_1.PagesKeys.companySignUp]: companySignup_1.i18n_COMPANY_SIGN_UP,
    [pages_1.PagesKeys.companySignUpSuccess]: companySignupSuccess_1.i18n_COMPANY_SIGN_UP_SUCCESS,
    [pages_1.PagesKeys.contact]: contact_1.i18n_CONTACT,
    [pages_1.PagesKeys.faqs]: faqs_1.i18n_FAQS,
    [pages_1.PagesKeys.postOffer]: postOffer_1.i18n_POST_OFFER,
    [pages_1.PagesKeys.offerDetail]: offerDetail_1.i18n_OFFER_DETAIL,
    [pages_1.PagesKeys.offerApply]: offerApply_1.i18n_OFFER_APPLY,
    [pages_1.PagesKeys.policiesCookies]: policiesCookies_1.i18n_POLICIES_COOKIES,
    [pages_1.PagesKeys.policiesPrivacy]: policiesPrivacy_1.i18n_POLICIES_PRIVACY,
    [pages_1.PagesKeys.legalNotice]: legalNotice_1.i18n_LEGAL_NOTICE,
    [pages_1.PagesKeys.termsOfUse]: termsOfUse_1.i18n_TERMS_OF_USE,
    // [PagesKeys.profile]: i18n_PROFILE,   
};
