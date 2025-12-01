import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint checks during the build process
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Your other Next.js configuration
};

const sentryWebpackPluginOptions = {
  org: "aravind-s",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  sourcemaps: {
    deleteSourcemapsAfterUpload: true,
  },
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
