/* eslint-disable no-param-reassign */
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/bcredi-frontend-challenge/' : '/',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Crédito Imobiliário descomplicado e 100% online | Bcredi';
      return args;
    });
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/_variables.scss";
        `,
      },
    },
  },
};
