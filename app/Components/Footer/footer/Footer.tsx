import * as React from "react";

import { FooterSection } from "./FooterSection";

const aboutLinks = [
  "How it works",
  "Featured",
  "Partnership",
  "Bussiness Relation",
];
const communityLinks = ["Events", "Blog", "Podcast", "Invite a friend"];
const socialLinks = ["Discord", "Instagram", "Twitter", "Facebook"];

export const Footer: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col px-16 py-16 mx-12 bg-white max-md:px-5">
      <div className="flex flex-wrap gap-10 items-start w-full max-w-[1244px] max-md:max-w-full">
        <div className="flex flex-col">
          <div className="text-3xl font-bold tracking-tighter text-blue-600">
            MORENT
          </div>
          <div className="mt-4 text-base font-medium tracking-tight leading-6 text-neutral-900 text-opacity-60">
            Our vision is to provide convenience and help increase your sales
            business.
          </div>
        </div>
        <div className="flex-auto mt-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
              <FooterSection title="About" links={aboutLinks} />
            </div>
            <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
              <FooterSection title="Community" links={communityLinks} />
            </div>
            <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
              <FooterSection title="Socials" links={socialLinks} />
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 mt-12 h-px border border-solid border-neutral-900 border-opacity-20 max-md:mt-10 max-md:max-w-full" />
      <div className="flex flex-wrap gap-5 justify-between mt-9 w-full text-base font-semibold tracking-tight text-gray-900 max-md:max-w-full">
        <div>©2022 MORENT. All rights reserved</div>
        <div className="flex gap-10 text-right">
          <div className="basis-auto">Privacy & Policy</div>
          <div className="basis-auto">Terms & Condition</div>
        </div>
      </div>
    </div>
  );
};