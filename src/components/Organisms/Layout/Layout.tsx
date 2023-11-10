import { ReactElement, ReactNode } from "react";
import clsx from "clsx";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps): ReactElement => {
  return (
    <div>
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
