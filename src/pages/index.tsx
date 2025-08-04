import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import App from "../components/App";
import Greeting from "../components/Greeting";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="bg-mint text-pine p-24 font-epilogue min-h-screen">
      <h1 className="mt-0 mb-16 max-w-[320px] font-normal text-[3rem] font-fraunces">
        <Greeting />
      </h1>
      <div className="bg-mustard text-pine p-5 rounded-lg mt-12 font-bold text-center">
        <App />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
