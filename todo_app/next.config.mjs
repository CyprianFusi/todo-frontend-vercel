// Import the 'path' module to resolve paths

const path = require('path');
const nextConfig = {

  reactStrictMode: true,

  // Extend the Webpack configuration

  webpack: (config) => {

    // Set up an alias '@' that points to the root directory of the project

    config.resolve.alias['@'] = path.resolve(__dirname);

    return config;

  },

}

module.exports = nextConfig;
