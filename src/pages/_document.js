import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="digibase"
          />
          <meta
            name="description"
            content="DigiBase - Digital Marketing Agency"
          />
          <meta name="author" content="" />
          <link rel="shortcut icon" href="/img/favicon/favicon.ico" />
          <link rel="apple-touch-icon" sizes="57x57" href="/img/favicon/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/img/favicon/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/img/favicon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/img/favicon/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/img/favicon/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/img/favicon/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/img/favicon/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/img/favicon/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/img/favicon/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/img/favicon/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/img/favicon/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          {/* <meta name="theme-color" content="#ffffff" /> */}
          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
