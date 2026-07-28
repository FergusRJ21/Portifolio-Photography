/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns define uma lista de padrões de URL externos permitidos.
    // Isso evita ataques de injeção e permite que o servidor otimize as imagens.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**', // Permite qualquer caminho dentro deste domínio
      },
    ],
  },
};

export default nextConfig;