import React from "react";
import Document, {Head, Html, Main, NextScript} from "next/document";
import {ServerStyleSheets} from "@material-ui/styles";
import ati from "../../public/apple-touch-icon.png"
import "../utils/favIcons/favIcons"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
      <Head>
          <link rel="apple-touch-icon" sizes="180x180" href={ati}/>
          <link rel="icon" type="image/png" sizes="32x32" href={require("../../public/favicon-32x32.png")}/>
          <link rel="icon" type="image/png" sizes="16x16" href={require("../../public/favicon-16x16.png")}/>
          <link rel="manifest" href={require("../../public/manifest.json")}/>
          <link rel="mask-icon" href={require("../../public/safari-pinned-tab.svg")} color="#406d7f"/>
          <meta name="msapplication-TileColor" content="#00aba9"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
        <body>
          <div id="page-transition"/>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
