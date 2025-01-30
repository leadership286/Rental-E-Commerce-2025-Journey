import * as React from "react";
import { FooterLink } from "./FooterLink";
import { FooterSectionProps } from "./types";

export const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  links,
}) => (
  <div className="flex flex-col grow max-md:mt-10">
    <div className="text-xl font-semibold tracking-tight text-gray-900">
      {title}
    </div>
    <div className="mt-12 max-md:mt-10">
      {links.map((link, index) => (
        <FooterLink key={index} text={link} />
      ))}
    </div>
  </div>
);