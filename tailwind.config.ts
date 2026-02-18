import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx,mdx}',
    './content/**/*.{mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        background: '#FAFAFA',
        foreground: '#1f2937',
        accent: '#4f46e5'
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '720px',
            color: '#1f2937',
            lineHeight: '1.8',
            a: {
              color: '#4f46e5',
              textDecoration: 'none'
            },
            h2: { marginTop: '2.5rem', marginBottom: '1rem' },
            h3: { marginTop: '2rem', marginBottom: '0.75rem' },
            blockquote: {
              borderLeftColor: '#4f46e5',
              fontStyle: 'italic'
            }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
