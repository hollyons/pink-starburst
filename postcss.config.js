module.exports = {
  plugins: [
    require('@tailwindcss/postcss')({
      config: './tailwind.config.js', // Optional: only if you're using a custom config
    }),
    require('autoprefixer'),
  ],
};