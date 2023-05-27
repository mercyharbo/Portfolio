import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta
            name='description'
            content='Welcome to my portfolio website, where you can see some of the websites I have created for various clients and purposes. 
            I&#8217;m a frontend developer and WordPress expert based in New York. I love creating beautiful and functional websites that meet the 
            needs and expectations of my clients.'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
