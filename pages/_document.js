import Document, { Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" integrity="sha512-DanfxWBasQtq+RtkNAEDTdX4Q6BPCJQ/kexi/RftcP0BcA4NIJPSi7i31Vl+Yl5OCfgZkdJmCqz+byTOIIRboQ==" crossorigin="anonymous" />
                    <meta name="description" content="A random site" />
                    <meta charSet="utf-8" />
                    <meta name="robots" content="noindex, nofollow" />
                    <meta name="viewport" content="width=device-width" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default MyDocument