    /** @type {import('tailwindcss').Config} */
    export default {
      theme: {
        extend: {
          colors: {
            primary: '#5222e3',
          },
          fontFamily: {
            'sans': ['Inter', 'sans-serif'],
            'display': ['Poppins', 'sans-serif'],
          },
          // Ini adalah custom style untuk plugin typography
          typography: ({ theme }) => ({
            primary: { // Kita buat style 'prose-primary'
              css: {
                '--tw-prose-body': theme('colors.slate[700]'),
                '--tw-prose-headings': theme('colors.slate[900]'),
                '--tw-prose-lead': theme('colors.slate[600]'),
                '--tw-prose-links': theme('colors.primary'),
                '--tw-prose-bold': theme('colors.slate[900]'),
                '--tw-prose-counters': theme('colors.slate[500]'),
                '--tw-prose-bullets': theme('colors.primary'),
                '--tw-prose-hr': theme('colors.slate[200]'),
                '--tw-prose-quotes': theme('colors.slate[900]'),
                '--tw-prose-quote-borders': theme('colors.primary'),
                '--tw-prose-captions': theme('colors.slate[500]'),
                '--tw-prose-code': theme('colors.primary'),
                '--tw-prose-pre-code': theme('colors.slate[200]'),
                '--tw-prose-pre-bg': theme('colors.slate[800]'),
                '--tw-prose-invert-body': theme('colors.slate[300]'),
                '--tw-prose-invert-headings': theme('colors.white'),
                '--tw-prose-invert-lead': theme('colors.slate[400]'),
                '--tw-prose-invert-links': theme('colors.primary'),
              },
            },
          }),
        },
      },
      // Tambahkan plugin di sini
      plugins: [
        require('@tailwindcss/typography'),
      ],
    }
    
