import React from "react";
import { assets } from "../assets/assets";
import { ArrowRight } from "lucide-react";
import Title from "./Title";
const NewsLetter = () => {
  return (
    <div className="mx-2 my-30 flex max-w-5xl flex-col items-center rounded-2xl bg-gray-900 px-4 py-12 text-white md:py-16 lg:mx-auto lg:w-full">
      <Title
        title={"Stay Inspired"}
        subTitle={
          "Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration."
        }
      />

      <div className="mt-6 flex flex-col items-center justify-center gap-4 md:flex-row">
        <input
          type="text"
          className="w-full max-w-66 rounded border border-white/20 bg-white/10 px-4 py-2.5 outline-none"
          placeholder="Enter your email"
        />
        <button className="group flex items-center justify-center gap-2 rounded bg-black px-4 py-2.5 transition-all active:scale-95 md:px-7">
          Subscribe
          <ArrowRight
            size={18}
            className="invert-0 transition-all group-hover:translate-x-1"
          />
        </button>
      </div>
      <p className="mt-6 text-center text-xs text-gray-500">
        By subscribing, you agree to our Privacy Policy and
        consent to receive updates.
      </p>
    </div>
  );
};

export default NewsLetter;
