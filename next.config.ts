import type { NextConfig } from "next";

// TODO: set to `/` for production builds
const BASE_PATH = "/next-oktech";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  basePath: BASE_PATH,
  images: {
    loader: "custom",
    imageSizes: [32, 128, 256, 384],
    deviceSizes: [640, 1080, 1920, 3840],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "80",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "optimized",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },
};

// redirect to basePath in development
if (process.env.NODE_ENV === "development") {
  nextConfig.output = "standalone";
  nextConfig.redirects = async () => {
    return [
      {
        source: "/",
        destination: BASE_PATH,
        basePath: false,
        permanent: false,
      },
    ];
  };
}

export default nextConfig;
