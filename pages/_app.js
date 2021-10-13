import "../styles/globals.css";
import { useEffect } from "react";
import { Provider } from "next-auth/client";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return (
    <Provider session={pageProps.session}>
      <Head>
        {/* Meta tags */}
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="This is the site as the alternative or same as the facebook real site with the authentication with google, facebook, github"
        />
        <meta name="keywords" content="Keywords" />
        <title>Facebook Clone</title>
        <link rel="manifest" href="manifest.json" />
        <link rel="shortcut icon" href="icons/favicon.ico" />
        <link
          href="icons/favicon.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="icons/favicon.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="icons/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />

        <body>
          <div id="portal"></div>
        </body>
      </Head>

      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
