/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'www.elegantthemes.com',
                port:'',
                pathname: '/**',
            }
        ],
    },
};

export default nextConfig;
