import React from 'react';

import { getInitialProps } from '@expo/next-adapter/document';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

Document.getInitialProps = getInitialProps;

export default Document;
