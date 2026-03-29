import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enables static HTML export
  output: "export",
  
  // GitHub Pages default image optimization requires a server. 
  // We disable it to allow standard <img> rendering for static exports.
  images: {
    unoptimized: true,
  },

  // NOTE: If your GitHub repository is named "username.github.io", leave this as is.
  // If your repository is named "personal-os" (a project site), you must add:
  // basePath: '/personal-os',
};

export default nextConfig;