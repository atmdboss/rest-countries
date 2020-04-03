import App from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import Navbar from "../components/Navbar";
import "../css/index.css";
import store from "../redux/store";

function MyApp({ Component, pageProps, store }) {
	return (
		<Provider store={store}>
			<Head>
				<title>Where in the world?</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Navbar />
			<Component {...pageProps} />
		</Provider>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async appContext => {
	// calls page's `getInitialProps` and fills `appProps.pageProps`
	const appProps = await App.getInitialProps(appContext);

	return { ...appProps };
};

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
