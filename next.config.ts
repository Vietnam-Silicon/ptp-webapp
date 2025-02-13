import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    domains: ['directus-asset.aws-dev.vnsilicon.site'],
  },
  /* config options here */
};

export default withNextIntl(nextConfig);
