import Document, { Head, Html, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang='de-DE'>
				<Head>
					{/* <link
						rel='preload'
						href='/fonts/DubaiW23-Bold.woff2'
						as='font'
						type='font/woff2'
						crossOrigin='true'
					/>
					<link
						rel='preload'
						href='/fonts/DubaiW23-Light.woff2'
						as='font'
						type='font/woff2'
						crossOrigin='true'
					/>
					<link
						rel='preload'
						href='/fonts/DubaiW23-Medium.woff2'
						as='font'
						type='font/woff2'
						crossOrigin='true'
					/>
					<link
						rel='preload'
						href='/fonts/DubaiW23-Regular.woff2'
						as='font'
						type='font/woff2'
						crossOrigin='true'
					/> */}
					{/* <link rel='preconnect' href='https://api.faris-group.com' /> */}
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
