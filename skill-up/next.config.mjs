/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images:{
      dangerouslyAllowSVG: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', //ap-south-1.graphassets.com
        },
      ]
    },
};

export default nextConfig;
