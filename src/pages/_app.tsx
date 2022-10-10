// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { trpc } from "../utils/trpc";
import { Layout, NavBar } from "../components";
import Head from "next/head";
import { slideRight } from "../lib/animations";
import { ILinks } from "../types";
import { useState, useCallback } from "react";

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
  // const startIndex = 0;
  // const [animation, setAnimation] = useState(animations[startIndex]);
  // const [exitBefore, setExitBefore] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);

  //get current page
  // check index of current page in links
  // if index is greater than current page, set direction to 1
  const index = links.findIndex((x) => x.href === router.route);
  console.log({ index });
  useCallback((index: number) => {
    setCurrentPage(index);
  }, []);

  console.log({ currentPage });
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
            key={router.route.concat(slideRight)}
            className="page-wrap"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slideRight.variants}
            transition={slideRight.transition}
            custom={direction}
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
