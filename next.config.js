const withPlugins = require("next-compose-plugins");
module.exports =  withPlugins([], {})
module.exports = {
    trailingSlash: true,
    images: {
        loader: "imgix",
        path: "https://www.uygdanismanlik.com/",
      }
}
// module.exports = {
//   i18n: {
//     locales: ['tr', 'en'],
//     defaultLocale: 'tr',
//   },
// }