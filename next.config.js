/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "res.cloudinary.com",
            "avatars.githubusercontent.com"
        ],
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
