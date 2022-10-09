import Head from "next/head";
import { ReactElement, ReactNode } from "react";
import clsx from "clsx";
import NavBar from "../NavBar/NavBar";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps): ReactElement => {
  return (
    <div>
      <Head>
        <title>Hannah Austin</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Hannah Austin" content="Hannah Austin Personal Website" />
      </Head>
      <NavBar />
      <main
        className={clsx(
          "container",
          "mx-auto flex",
          "min-h-screen",
          "flex-col",
          "items-center",
          "justify-center",
          "p-4"
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
