import { Head, Html, Main, NextScript } from 'next/document';

export default function () {
  return <Html>
    <Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-B1T19R892N"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B1T19R892N');
            `,
        }}
      />
    </Head>
    <body>
      <Main/>
      <NextScript/>
    </body>
  </Html>;
}
