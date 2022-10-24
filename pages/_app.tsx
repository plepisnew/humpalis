import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import Page from '@/components/Page';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import theme from '@/theme';
import '@/styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
    return (
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
    );
};

export default App;
