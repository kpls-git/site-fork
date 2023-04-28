import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/logo.png" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="The new and improved home for all the dedicated players of Black Squad!"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@BlackSquadHub" />
          <meta name="twitter:creator" content="@BlackSquadHub" />
          <meta property="og:url" content="https://blacksquadhub.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Black Squad Hub" />
          <link
            rel="icon"
            href="/img/logo2.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="The new and improved home for all the dedicated players of Black Squad"
          />
          <meta property="og:image" content="/img/logo.png" />
          <meta property="og:image:alt" content="Black Squad Hub" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="Black Squad Hub"
          />
          <meta name="theme-color" content="#6108dd" />
          <link rel="icon" href="/img/logo2.png" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
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
