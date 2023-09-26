/** @type {import('next').NextConfig} */

const webpack = require('webpack');

const nextConfig = {
  experimental: {
    serverActions: true,
  },
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
    domains: ["randomuser.me", "api.carsxe.com", "img.favpng.com", "res.cloudinary.com"]
  }
}

module.exports = nextConfig
