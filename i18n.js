const nextTranslate = require("next-translate");
const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;
const path = require("path");

module.exports = new nextTranslate({
  otherLanguages: ["en", "tr"],
  locales: ['en', 'tr'],
  defaultLanguage: "en",
  localeSubpaths,
  localePath: path.resolve("./public/locales"),
});
