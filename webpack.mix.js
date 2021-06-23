const mix = require('laravel-mix');
const path = require('path')
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/src/main.js', 'public/js')
    .sass('resources/js/src/assets/scss/style.scss', 'public/css');
mix.webpackConfig({
  devServer: { disableHostCheck: true },
  resolve  : {
    alias: {
      '@' : path.resolve(__dirname, 'resources/js/src/'),
    },
  }
})
