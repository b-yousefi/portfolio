import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../styles/theme";
import Head from "next/head";
import Appbar from "@/components/appbar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Behnaz Yousefi</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Appbar open={false} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
