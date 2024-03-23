/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 's4.anilist.co'
            },
            {
                hostname: 'gogocdn.net'
            },
        ]
    }
};

export default nextConfig;
