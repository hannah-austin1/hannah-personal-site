import clsx from "clsx";
import type { NextPage } from "next";
import { CodeText } from "../components";
// import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <CodeText staticText="Hey, I&lsquo;m " typedText="Hannah 💻" />
      <div
        className={clsx(
          "text-center",
          "text-xl",
          "font-semibold",
          "md:text-3xl"
        )}
      >
        full stack application developer and squad lead aiming to put the fun
        into writing functions
      </div>
      {/* <div className="flex w-full items-center justify-center pt-6 text-2xl text-blue-500">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div> */}
    </>
  );
};

export default Home;
