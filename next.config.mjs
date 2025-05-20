/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/Portfolio_DP', // důležité! název repozitáře
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
