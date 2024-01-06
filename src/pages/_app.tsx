import '../styles/globals.css'
import * as React from 'react';
import 'nprogress/nprogress.css';
import '../styles/globals.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import type { AppProps } from 'next/app'

NProgress.configure({showSpinner:false})
export default function App({ Component, pageProps }: AppProps):JSX.Element {
   React.useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on('routeChangeStart', handleRouteStart);
    Router.events.on('routeChangeComplete', handleRouteDone);
    Router.events.on('routeChangeError', handleRouteDone);

    return () => {
      Router.events.off('routeChangeStart', handleRouteStart);
      Router.events.off('routeChangeComplete', handleRouteDone);
      Router.events.off('routeChangeError', handleRouteDone);
    };
  }, []);
 
  return <Component {...pageProps} />
}
