/**
 * Tailwind CSS Configuration for Eaglenest Academy
 * Custom brand colors, typography, and utility extensions
 */

tailwind.config = {
    theme: {
        extend: {
            colors: {
                // Sky blue - primary brand color
                sky: {
                    50: '#F0F9FF',
                    100: '#E0F2FE',
                    500: '#0EA5E9',
                    600: '#0284C7',
                },
                // Leaf green - secondary brand color
                leaf: {
                    50: '#F0FDF4',
                    100: '#DCFCE7',
                    500: '#22C55E',
                    600: '#16A34A',
                },
                // Ink - primary text color
                ink: '#0F2A43',
            },
            fontFamily: {
                // Heading font stack
                heading: ['"Century Gothic"', 'Questrial', 'sans-serif'],
                // Body font stack
                body: ['Montserrat', 'sans-serif'],
            },
            boxShadow: {
                // Soft shadow utilities
                'soft-sm': '0 2px 8px rgba(15, 42, 67, 0.08)',
                'soft-md': '0 4px 16px rgba(15, 42, 67, 0.12)',
                'soft-lg': '0 8px 24px rgba(15, 42, 67, 0.15)',
                'soft-xl': '0 12px 32px rgba(15, 42, 67, 0.18)',
            },
            borderRadius: {
                // Custom rounded sizes
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
        },
    },
};
