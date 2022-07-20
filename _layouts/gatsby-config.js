module.exports = {
  pathPrefix: `/sushi`,
  siteMetadata: {
    title: `Yes! It is Sushi.`,
  },
  plugins: [
    {
      resolve: `gatsby-digital-garden`,
      options: {
        rootNote: "/readme",
        contentPath: `${__dirname}/..`,
        ignore: [
          "**/_layouts/**",
          "**/.git/**",
          "**/.github/**",
          "**/.vscode/**",
        ],
      },
    },
  ],
};
