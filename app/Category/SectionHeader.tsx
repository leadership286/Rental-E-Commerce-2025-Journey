import * as React from "react";
import { SectionHeaderProps } from "./types"

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, showViewAll }) => {
  return (
    <div className="flex gap-[1076px] items-start text-base font-semibold text-center max-md:max-w-full">
    <div className="w-[132px] h-[44px] px-[20px]  gap-[8px] ">
      <div className="w-[92px] h-[24px] flex items-center justify-center">
        <p className="font-['Plus Jakarta Sans'] text-[16px] font-semibold leading-[20.16px] text-center text-[#90A3BF]">
          {title}
        </p>
      </div>
    </div>
  
      {showViewAll && (
       <div className="w-[104px] h-[44px] px-[550px] gap-[8px]">
       <div className="w-[64px] h-[24px] flex items-end justify-end">
         <p className="font-['Plus Jakarta Sans'] text-[16px] font-semibold leading-[20.16px]  text-[#3563E9]">
           View All
         </p>
       </div>
     </div>
      )}
    </div>
    
  );
};