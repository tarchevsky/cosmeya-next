/** @type {import('next').NextConfig} */
const nextConfig = {
	// output: 'export',
	output: 'standalone',
	reactStrictMode: true,
	poweredByHeader: false,
	compress: true,
	
	// Modern image optimization
	images: {
		unoptimized: false,
		formats: ['image/webp', 'image/avif'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		// loader: 'custom',
		// loaderFile: './my-loader.ts',
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: '',
				pathname: '/**',
			}
		],
	},
	
	// Security headers
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-DNS-Prefetch-Control',
						value: 'on'
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY'
					}
				],
			},
		];
	},
	
	// Experimental features for better performance
	experimental: {
		optimizeCss: true,
		optimizePackageImports: ['framer-motion', 'react-icons'],
	},
	
	// ISR and caching
	generateBuildId: async () => {
		return 'production-' + Date.now();
	},
}

module.exports = nextConfig
