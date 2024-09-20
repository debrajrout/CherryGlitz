/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*.googleusercontent.com",
      },
      {
        hostname: "linky.s3.amazonaws.com",
      },
      {
        hostname: "cdn.builder.io",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "cherryglitz.s3.ap-south-1.amazonaws.com"
      },
      {
        hostname: "source.unsplash.com"
      },
    ],
  },
};

export default nextConfig;
