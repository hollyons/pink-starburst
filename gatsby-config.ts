import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `HollyLyons`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
         "icon": "src/images/icon.png"
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
      "name": "pages",
      "path": "./src/pages/"
    },
      __key: "pages",
    },
     {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Epilogue\:300,400,500,700`,
          `Vibur`,
          `Fraunces\:300,400,700`,
        ],
        display: 'swap',
      },
    },
  ],
};

export default config;
