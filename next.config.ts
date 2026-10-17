import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export: `next build` writes the site to `out/`, which is what
  // .github/workflows/nextjs.yml uploads to GitHub Pages.
  output: "export",

  // GitHub Pages serves no image optimizer, so next/image must stay unoptimized.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
