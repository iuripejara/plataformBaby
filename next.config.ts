import withPWA from 'next-pwa';

const baseConfig = {
  experimental: {
    serverActions: true,
  },
};

const pwaConfig = {
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
};

export default withPWA(pwaConfig)(baseConfig);
