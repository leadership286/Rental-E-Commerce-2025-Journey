import React from "react";
import { Category1 } from "./Category1";
import Navbar from "../Components/Navbarr/Navbar";
import Image from "next/image";

export default function Category() {
  return (
    <div>
      <Navbar />
      <div className="flex max-w-screen h-screen">

      <div className="w-fit h-[1600px]  bg-[#F6F7F9] flex">
        <div className="w-[360px] h-[1600px] p-8 border border-[#F3F5F7] relative bg-[#FFFFFF]">
          <div className="space-y-7">
            <div>
              <p className="w-[104px] h-[20px] font-[600] text-[12px] leading-[15.12px] tracking-[-0.02em] text-left text-[#90A3BF]">
                T Y P E
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex gap-8">
                <div className="w-[24px] h-[24px]">
                  <Image src="/icons/tick-square.png" alt=""  width={24} height={24}/>
                </div>
                <p className="w-[144px] h-[24px] font-[600] text-[20px] leading-[30px] tracking-[-0.02em] text-justify">
                  Sport <span className="text-[#90A3BF]">(10)</span>
                </p>
              </div>
              <div className="flex gap-8">
                <div className="w-[24px] h-[24px] ">
                  <Image src="/icons/tick-square.png" alt=""  width={24} height={24}/>
                </div>
                <p className="w-[144px] h-[24px] font-[600] text-[20px] leading-[30px] tracking-[-0.02em] text-justify">
                  SUV <span className="text-[#90A3BF]">(12)</span>
                </p>
              </div>
              <div className="flex gap-8">
                <div className="w-[24px] h-[24px] ">
                  <Image src="/icons/Ceklist.png" alt=""  width={24} height={24}/>
                </div>
                <p className="w-[144px] h-[24px] font-[600] text-[20px] leading-[30px] tracking-[-0.02em] text-justify">
                  MVP <span className="text-[#90A3BF]">(16)</span>
                </p>
              </div>
              <div className="flex gap-8">
                <div className="w-[24px] h-[24px]">
                  <Image src="/icons/Ceklist.png" alt=""  width={24} height={24}/>
                </div>
                <p className="w-[144px] h-[24px] font-[600] text-[20px] leading-[30px] tracking-[-0.02em] text-justify">
                  Sedan<span className="text-[#90A3BF]">(20)</span>
                </p>
              </div>
              <div className="flex gap-8">
                <div className="w-[24px] h-[24px]">
                  <Image src="/icons/Ceklist.png" alt=""  width={24} height={24}/>
                </div>
                <p className="w-[144px] h-[24px] font-[600] text-[20px] leading-[30px] tracking-[-0.02em] text-justify">
                  Coupe <span className="text-[#90A3BF]">(14)</span>
                </p>
              </div>
              <div className="flex gap-8">
                <div className="w-[24px] h-[24px]">
                  <Image src="/icons/Ceklist.png" alt="" width={24} height={24}/>
                </div>
                <p className="w-[144px] h-[24px] font-[600] text-[20px] leading-[30px] tracking-[-0.02em] text-justify">
                  Hatchback <span className="text-[#90A3BF]">(14)</span>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-7 mt-[32px]">
            <div>
              <p className="w-[104px] h-[20px] font-[600] text-[12px] leading-[15.12px] tracking-[-0.02em] text-left text-[#90A3BF]">
                C A P A C I T Y
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex gap-8">
                <div className="w-[24px] h-[24px] ">
                  <Image src="/icons/tick-square.png" alt="" width={24} height={24}/>
                </div>
                <p className="w-[144px] h-[24px] font-[600] text-[20px] leading-[30px] tracking-[-0.02em] text-justify">
                  2 Person <span className="text-[#90A3BF]">(10)</span>
                </p>
              </div>
              <div className="flex gap-8">
                <div className="w-[24px] h-[24px]">
                  <Image src="/icons/Ceklist.png" alt=""  width={24} height={24}/>
                </div>
                <p className="w-[144px] h-[24px] font-[600] text-[20px] leading-[30px] tracking-[-0.02em] text-justify">
                  4 Person <span className="text-[#90A3BF]">(14)</span>
                </p>
              </div>
              <div className="flex gap-8">
                <div className="w-[24px] h-[24px]">
                  <Image src="/icons/Ceklist.png" alt=""  width={24} height={24}/>
                </div>
                <p className="w-[144px] h-[24px] font-[600] text-[20px] leading-[30px] tracking-[-0.02em] text-justify">
                  6 Person <span className="text-[#90A3BF]">(12)</span>
                </p>
              </div>
              <div className="flex gap-8">
                <div className="w-[24px] h-[24px] ">
                  <Image src="/icons/tick-square.png" alt=""  width={24} height={24}/>
                </div>
                <p className="w-[144px] h-[24px] font-[600] text-[20px] leading-[30px] tracking-[-0.02em] text-justify">
                  8 or more <span className="text-[#90A3BF]">(16)</span>
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-7 mt-[32px]">
            <div>
              <p className="w-[104px] h-[20px] font-[600] text-[12px] leading-[15.12px] tracking-[-0.02em] text-left text-[#90A3BF]">
                P R I C E
              </p>
              <Image src="/icons/Price-Range.png" alt="" width={24} height={24}/>
            </div>
            <div className="space-y-3">
              <div className="w-[296px] h-[20px] border-4 border-[#FFFFFF]"></div>
              <p className="w-[296px] h-[24px] font-[600] text-[20px] leading-[30px] tracking-[-0.02em] text-justify text-[#596780]">
                Max. $100.00
              </p>
            </div>
          </div>
        </div>
      </div>
      <Category1 />
      </div>
    </div>
  );
}