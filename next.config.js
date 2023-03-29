/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    return Object.assign({}, config, {
      module: Object.assign({}, config.module, {
        rules: config.module.rules.concat([
          {
            test: /\.txt$/i,
            use: 'raw-loader',
          },
        ]),
      }),
    });
  }
}

module.exports = nextConfig
