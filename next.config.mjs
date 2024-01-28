/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next",
          name: "static/media/[name].[hash].[ext]",
        },
      },
    });

    return config;
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
