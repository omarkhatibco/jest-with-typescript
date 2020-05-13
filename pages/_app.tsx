import { AppProps } from 'next/app';
import { ReactQueryDevtools } from 'react-query-devtools';
import { Providers } from 'components';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Providers>
				<Component {...pageProps} />
			</Providers>
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default App;
