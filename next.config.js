const nextConfig = {
    // Import scss variables
    sassOptions: {
        includePaths: ['./src'],
        prependData: `@import "~@styles/_variables.scss";`,
      },
};

module.exports = nextConfig
