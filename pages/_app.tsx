import '@/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import Page from '@/components/Page';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import theme from '@/theme';
import store from '@/store/index';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Head>
                    <meta name="description" content="Etansa: Clothing Store" />
                    <meta name="keywords" content="humpalas drebes clothes" />
                    <title>Etansa Store</title>
                </Head>
                <Header />
                <Page>
                    <Component {...pageProps} />
                </Page>
                <Footer />
            </ThemeProvider>
        </Provider>
    );
};

export default App;
