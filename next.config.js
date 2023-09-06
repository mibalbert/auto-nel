/** @type {import('next').NextConfig} */

const webpack = require('webpack');

const nextConfig = {
  reactStrictMode: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      })
    );
    return config;
  },
  images: {
    domains: ["randomuser.me", "api.carsxe.com"]
  }
}

module.exports = nextConfig
