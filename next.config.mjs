/** @type {import('next').NextConfig} */

import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

export default withContentlayer(nextConfig);
