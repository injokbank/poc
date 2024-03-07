/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: "/ib20/act/:path*",
          destination: "http://www.kbankcorp.co.kr:7010/ib20/act/:path*",
        },
        {
          source: "/resource/img/:path*",
          destination: "https://m.kbanknow.com/resource/img/:path*",
        },
      ],
    };
  },
};

module.exports = nextConfig;
