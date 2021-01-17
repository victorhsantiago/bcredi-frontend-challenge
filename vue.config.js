/* eslint-disable no-param-reassign */
module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
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
