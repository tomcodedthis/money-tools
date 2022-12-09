/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/investments",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
