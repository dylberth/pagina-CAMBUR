/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProduction ? '/pagina-CAMBUR' : '',
  assetPrefix: isProduction ? '/pagina-CAMBUR/' : '',
};

module.exports = nextConfig;
