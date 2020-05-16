import { generateAllRoutes } from "./static/js/events.js";
module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/css/tailwind.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/moment",
    "bootstrap-vue/nuxt",
  ],
  bootstrapVue: {
    componentPlugins: [
      "AlertPlugin",
      "BadgePlugin",
      "ButtonPlugin",
      "ButtonGroupPlugin",
      "InputGroupPlugin",
      "CardPlugin",
      "DropdownPlugin",
      "FormPlugin",
      "FormGroupPlugin",
      "FormCheckboxPlugin",
      "FormRadioPlugin",
      "FormInputPlugin",
      "FormTextareaPlugin",
      "FormSelectPlugin",
      "LinkPlugin",
      "ListGroupPlugin",
      "ModalPlugin",
      "NavPlugin",
      "PaginationPlugin",
      "TablePlugin",
      "TabsPlugin",
      "LayoutPlugin",
      "NavbarPlugin",
      "TooltipPlugin",
      "SpinnerPlugin",
    ],
    directivePlugins: ["VBModalPlugin", "VBTooltipPlugin", "VBScrollspyPlugin"],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: "./tailwind.config.js",
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.node = {
        fs: "empty",
      };
    },
  },
  router: {
    base: "/home",
  },
  generate: {
    routes: generateAllRoutes(),
  },
  extend(config, ctx) {
    config.devtool = "source-map";

    // Run ESLint on save
    if (ctx.isDev && ctx.isClient) {
      config.module.rules.push({
        enforce: "pre",
        test: /\.(js|vue)$/,
        exclude: /(node_modules)/,
        options: {
          fix: true,
        },
      });
    }
  },
};
