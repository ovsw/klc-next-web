import { storyblokInit, apiPlugin } from "@storyblok/react";
import Head from "next/head";

import Layout from "../src/layout/Layout";

import Teaser from "../src/components/teaser";
import Grid from "../src/components/grid";
import Page from "../src/components/page";
import Feature from "../src/components/feature";

import Home1Banner from "../src/components/wellcon/Home1/Home1Banner";
import Home2Banner from "../src/components/wellcon/Home2/Home2Banner";
import Home3Banner from "../src/components/wellcon/Home3/Home3Banner";

import StepsCustom from "../src/components/steps-custom";
import Home3About from "../src/components/wellcon/Home3/Home3About";

import "../styles/globals.css";

storyblokInit({
  accessToken: process.env.STORYBLOK_API_KEY,
  use: [apiPlugin],
  components: {
    "hp-hero": Home3Banner,
    "steps-section": StepsCustom,
    "about-section": Home3About,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    page: Page,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout noHeaderTop sideBar headerStyle={1} absolute footerStyle={1}>
      <Head>
        <title>Climb Kids Life Coaching</title>
        <link rel="icon" type="image/png" sizes="32x32" href="favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
