import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 text-dark dark:text-light border-solid border-dark dark:border-light font-medium text-lg
    sm:text-base 
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 lg:text-sm">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved .</span>
        <div className="flex items-center lg:py-2">
          Build with{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1 animate-bounce">
            &#9825;
          </span>
          By &nbsp;
          <Link
            href="/"
            className="underline underline-offset-2"
            target={"_blank"}
          >
            MSRS
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            href="/"
            className="underline underline-offset-2"
            target={"_blank"}
          >
            Say Hi{" "}
          </Link>
          <span className=" text-2xl px-1 animate-waving-hand">👋</span>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
