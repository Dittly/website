import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

// Adds normalize and general styles
import '../styles/base-styles'

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html lang="en">
        <Head>
          <meta
            name="google-site-verification"
            content="wjFi2JtlRC-jy5mCnCc2epXwTHGfsYWfPQB7lkubC_U"
          />
          <title>Dittly</title>

          <meta
            name="viewport"
            content="width=device-width, height=device-height, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Arvo|Rubik:400,500"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Slab"
            rel="stylesheet"
          />

          {styleTags}
        </Head>
        <body>
          <div className="root">{main}</div>
          <NextScript />
        </body>
      </html>
    )
  }
}
