// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { trpc } from "../utils/trpc";
import { Layout, NavBar } from "../components";
import Head from "next/head";
import { ILinks } from "../types";

const links: ILinks[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Me",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const MyApp: AppType = ({ Component, pageProps, router }) => {
  return (
    <>
      <Head>
        <title>Hannah Austin</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Hannah Austin" content="Hannah Austin Personal Website" />
      </Head>
      <NavBar links={links} />
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={router.route}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: {
                opacity: 0,
              },
              animate: {
                opacity: 1,
              },
            }}
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </>
  );
};

export default trpc.withTRPC(MyApp);
