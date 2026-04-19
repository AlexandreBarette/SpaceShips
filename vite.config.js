const { defineConfig } = require('vite');

module.exports = defineConfig({
  base: process.env.BASE_PATH || '/',
});