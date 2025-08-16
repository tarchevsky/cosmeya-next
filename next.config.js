/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	reactStrictMode: true,
	poweredByHeader: false,
	compress: true,
	
	// Disable type checking during build to save memory
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	
	// Simple image optimization
	images: {
		unoptimized: false,
		formats: ['image/webp'],
		deviceSizes: [640, 828, 1200, 1920],
		imageSizes: [16, 32, 64, 128, 256],
	},
	
	// Minimal experimental features
	experimental: {
		optimizeCss: false,
	},
	
	// Simple build ID
	generateBuildId: async () => {
		return 'production-' + Date.now();
	},
}

module.exports = nextConfig
