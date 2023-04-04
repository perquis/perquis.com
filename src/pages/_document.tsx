import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <div id="newsletter" />
        <div id="update-comment-modal" />
      </body>
    </Html>
  );
};

export default Document;
