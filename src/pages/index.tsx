import clsx from "clsx";
import type { NextPage } from "next";
// import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <h1
        className={clsx(
          "mb-1",
          "font-mono",
          "text-4xl",
          "text-gray-100",
          "md:text-6xl"
        )}
      >
        Hey, I&lsquo;m <br className="block md:hidden" />
        <span
          className={clsx(
            "text-brand-accent",
            "inline-flex h-20",
            "animate-type",
            "overflow-x-hidden",
            "whitespace-nowrap",
            "pt-2"
          )}
        >
          Hannah 💻
        </span>
        <span
          className={clsx(
            "ml-2",
            "-mb-2",
            "box-border",
            "inline-block",
            "h-10",
            "w-1",
            "animate-cursor",
            "bg-white",
            "will-change-transform",
            "md:-mb-4",
            "md:h-16"
          )}
        ></span>
      </h1>
      <div
        className={clsx(
          "text-center",
          "text-xl",
          "font-semibold",
          "md:text-3xl"
        )}
      >
        application developer, broadcast engineer, and all-round computer nerd
      </div>
      {/* <div className="flex w-full items-center justify-center pt-6 text-2xl text-blue-500">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div> */}
    </>
  );
};

export default Home;
