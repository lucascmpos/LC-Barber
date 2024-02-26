/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[{
            hostname: "utfs.io",
        },],
    },
};

const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

export default nextConfig;
