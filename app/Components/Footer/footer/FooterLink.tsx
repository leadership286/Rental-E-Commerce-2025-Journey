import * as React from "react";
import { FooterLinkProps } from "./types";

export const FooterLink: React.FC<FooterLinkProps> = ({ text }) => (
  <div className="text-base font-medium tracking-tight leading-6 text-neutral-900 text-opacity-60">
    {text}
    <br />
    <br />
  </div>
);