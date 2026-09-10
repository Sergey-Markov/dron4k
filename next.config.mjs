/** @type {import('next').NextConfig} */
const isStaticExport = process.env.GITHUB_ACTIONS === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  ...(isStaticExport && {
    output: "export",
    basePath,
  }),
  images: {
    // GitHub Pages is static hosting — there's no server to run Next's on-demand
    // image optimizer, so raw (already-compressed) images are served as-is instead.
    unoptimized: isStaticExport,
  },
};

export default nextConfig;
