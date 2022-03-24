/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/cj",
        destination: `${process.env.NEXT_PUBLIC_API_ENDPOINT}?website-id=${process.env.NEXT_PUBLIC_WEBSITE_ID}&advertiser-ids=${process.env.NEXT_PUBLIC_ADVERTISER_IDS}`,
      },
    ];
  },
};

module.exports = nextConfig;
