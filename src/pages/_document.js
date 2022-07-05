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
          <meta name="keywords" content="The DigiBase - Digital Marketing Agency" />
          <meta name="description" content="Bringing you results, not excuses!" />

          <meta property="og:locale" content="en_GB" />
          <meta property="og:url" content="https://www.thedigibase.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="The DigiBase" />
          <meta property="og:description" content="Bringing you results, not excuses!" />
          <meta property="og:image" content="/img/DigiBase.jpg" />

          <meta name="author" content="M Saim Raza" />
          <link rel="shortcut icon" href="/img/favicon/favicon.ico" />
          {/* <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/img/favicon/site.webmanifest" /> */}
          {/* Google Fonts */}
          <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
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
