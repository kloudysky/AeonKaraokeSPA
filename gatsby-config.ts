import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `AeonKaraokeMachine`,
    siteUrl: `https://www.aeonkaraoke.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-JQVKXE5613'],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins\:300,400,500,600,700`],
        display: 'swap',
      },
    },
    'gatsby-plugin-netlify',
  ],
};

export default config;
