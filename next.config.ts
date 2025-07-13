import { ESLint } from "eslint"
import { isGeneratorFunction } from "util/types"

// next.config.mjs
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Isso faz com que o Next.js ignore os erros de ESLint durante o processo de build.
    // É útil para ambientes de desenvolvimento com arquivos gerados que você não pode controlar.
    ignoreDuringBuilds: true,
  },
}

module.exports = withPWA(nextConfig)