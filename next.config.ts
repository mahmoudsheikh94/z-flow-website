import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old wedge slug -> renamed Operations Audit (preserve links/SEO)
      {
        source: '/:locale(en|de)/growth-ops-teardown',
        destination: '/:locale/operations-audit',
        permanent: true,
      },
      {
        source: '/growth-ops-teardown',
        destination: '/operations-audit',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
