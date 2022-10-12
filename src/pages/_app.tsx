// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { trpc } from "../utils/trpc";
import { Layout, NavBar } from "../components";
import Head from "next/head";
import { slideRight } from "../lib/animations";
import { ILinks } from "../types";
import { useState, useCallback, useEffect, useRef } from "react";

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

  // const [currentPage, setCurrentPage] = useState(0);
  // const [direction, setDirection] = useState(0);
  // const prevPage = useRef(0);

  // useEffect(() => {
  //   prevPage.current = currentPage;
  //   const newPage = links.findIndex((x) => x.href === router.route);
  //   setCurrentPage(newPage);
  //   if (currentPage > newPage) {
  //     console.log("Hello");
  //     setDirection(-1);
  //   } else {
  //     console.log("goodbye");
  //     setDirection(1);
  //   }
  //   console.log({ currentPage, newPage, direction });
  // }, [router.route, direction]);

  // useEffect(() => {
  //   const newPage = links.findIndex((x) => x.href === router.route);
  //   setCurrentPage(newPage);
  // }, [router.route]);

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
            variants={{
              initial: {
                opacity: 0,
              },
              animate: {
                opacity: 1,
              },
            }}
            // transition={slideRight.transition}
            // custom={direction}
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
