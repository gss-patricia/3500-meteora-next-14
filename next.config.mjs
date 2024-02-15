/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./src/app/imagem.js",
  },
};

export default nextConfig;
