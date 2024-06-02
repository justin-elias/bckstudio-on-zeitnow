const path = require("path");

const NextConfig = {
    // Allow mdx and md files to be pages
    pageExtensions: ['jsx', 'js', 'ts', 'tsx', 'mdx', 'md'],
    // Allowed domains for image optimization
    images: {
        dangerouslyAllowSVG: true,
        domains: ['media.graphassets.com'],
    },
    async redirects() {
        return [
            {
                source: '/classes-encounters',
                destination: '/classes/',
                permanent: true,
            },
            {
                source: '/classes-encounters/',
                destination: '/classes/',
                permanent: true,
            },
        ]
    },
    webpack(config, options) {
        config.resolve.modules.push(path.resolve("./"));
        const { dir } = options

        config.module.rules.push(
            {
            test: /\.(graphql|gql)$/,
            include: [dir],
            exclude: /node_modules/,
            use: [
              {
                loader: 'graphql-tag/loader'
              }
            ]
          },

            )
        return config;

  //       // In `pages/_app.js`, Sentry is imported from @sentry/node. While
  //       // @sentry/browser will run in a Node.js environment, @sentry/node will use
  //       // Node.js-only APIs to catch even more unhandled exceptions.
  //       //
  //       // This works well when Next.js is SSRing your page on a server with
  //       // Node.js, but it is not what we want when your client-side bundle is being
  //       // executed by a browser.
  //       //
  //       // Luckily, Next.js will call this webpack function twice, once for the
  //       // server and once for the client. Read more:
  //       // https://nextjs.org/docs#customizing-webpack-config
  //       //
  //       // So ask Webpack to replace @sentry/node imports with @sentry/browser when
  //       // building the browser's bundle
  //       if (!config.isServer) {
  //         config.resolve.alias['@sentry/node'] = '@sentry/browser'
  //       }
  //
  //         if (process.env.WEBSITE_URL) {
  //             require('./src/utils/sitemap/generate-sitemap')
  //         }
  //
  //       // When all the Sentry configuration env variables are available/configured
  //       // The Sentry webpack plugin gets pushed to the webpack plugins to build
  //       // and upload the source maps to sentry.
  //       // This is an alternative to manually uploading the source maps
  //       // Note: This is disabled in development mode.
  //       if (
  //           NEXT_PUBLIC_SENTRY_DSN &&
  //           SENTRY_ORG &&
  //           SENTRY_PROJECT &&
  //           SENTRY_AUTH_TOKEN &&
  //           DEPLOYMENT_ENV &&
  //           NODE_ENV === 'production'
  //       ) {
  //         config.plugins.push(
  //             new SentryWebpackPlugin({
  //                 include: '.next',
  //                 ignore: ['node_modules'],
  //                 urlPrefix: '~/_next',
  //                 release: VERCEL_GITHUB_COMMIT_SHA,
  //                 deploy: {
  //                     env: DEPLOYMENT_ENV,
  //
  //                 }
  //             })
  //         )
  //       }
  //       return config;
  }
}
module.exports = NextConfig;
