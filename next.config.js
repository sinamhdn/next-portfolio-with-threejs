/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // ignoreBuildErrors: true,
  // experimental: {
  //   newNextLinkBehavior: false,
  // },
};

module.exports = nextConfig;
