const faviconsContext = require.context(
    `!!file-loader?name=public/[name].[ext]!.`,
true,
    /\.(svg|png|ico|xml|json)$/
);
faviconsContext.keys().forEach(faviconsContext);
