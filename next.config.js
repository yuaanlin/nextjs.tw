const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('./compiled/remark-frontmatter').remarkFrontmatter],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react"
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
}

module.exports = withMDX(nextConfig);
