/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/cj-advertiser",
        destination: `${process.env.NEXT_PUBLIC_CJ_ADVERTISER_BASE_URL}?requestor-cid=${process.env.NEXT_PUBLIC_REQUESTOR_ID}&advertiser-ids=${process.env.NEXT_PUBLIC_ADVERTISER_IDS}`,
      },
      {
        source: "/cj-offers",
        destination: `${process.env.NEXT_PUBLIC_CJ_OFFERS_BASE_URL}?website-id=${process.env.NEXT_PUBLIC_WEBSITE_ID}&advertiser-ids=${process.env.NEXT_PUBLIC_ADVERTISER_IDS}`,
      },
    ];
  },
};

module.exports = nextConfig;
