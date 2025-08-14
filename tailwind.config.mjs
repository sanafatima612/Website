const config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {},
        clipPath: {
            mypolygon: "polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)",
        },
    },
    plugins: [
        'tailwind-clip-path',
    ],
};

export default config;