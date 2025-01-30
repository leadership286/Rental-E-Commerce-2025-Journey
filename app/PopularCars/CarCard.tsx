import * as React from "react";
import Link from "next/link";
import { CarCardProps } from "./types";
import Image from "next/image";

export const CarCard: React.FC<CarCardProps> = ({
  name,
  type,
  image,
  fuelCapacity,
  transmission,
  capacity,
  price,
  originalPrice,
  liked,
}) => {
  return (
    <div className="flex flex-wrap gap-[32px] w-[1312px] h-auto">
      <div className="w-[304px] h-[388px] bg-[#FFFFFF] rounded-[10px] hover:border-[#33ffaa] hover:rounded-lg p-2 overflow-hidden hover:shadow-[0_0_10px_2px_#3563E9]">
        <div className="flex gap-5 justify-between font-bold">
          <div className=" mt-[24px] ml-[24px] gap-[4px]  flex flex-col">
            <div className="w-[160px] h-[24px] font-['Plus Jakarta Sans'] text-[20px] font-bold leading-[30px] tracking-[-0.03em] text-left text-[#1A202C]">
              {name}
            </div>
            <div className="w-[128px] h-[20px] font-['Plus Jakarta Sans'] text-[14px] font-bold leading-[21px] tracking-[-0.02em] text-left  text-[#90A3BF]">
              {type}
            </div>
          </div>
          <Image
         
            src={liked ? "/icons/Heart.png" : "/icons/disLike.png"}
            className="object-contain shrink-0 self-start w-6 mt-[24px] mr-[20px] aspect-square"
            alt={liked ? "Liked car" : "Not liked car"}
            width={6} height={6}
          />
        </div>
        <Image
          
          src={image}
          className="object-contain mx-[36px] mt-[90px] w-[232px] h-[72px] aspect-[3.23] max-md:mx-[36px] max-md:mt-[136px]"
          alt={`${name} ${type} car`}
        
        width={232} height={72}
        />
        <div className="flex gap-4 ml-[24px] mt-10 text-sm font-medium text-[#90A3BF] max-md:mt-10">
          <div className="flex gap-1.5 items-start tracking-[0.02em] leading-[21px]">
            <Image
             
              src="/icons/feul.png"
              className="object-contain w-6 aspect-square"
              alt="Fuel capacity icon"
              width={6} height={6}
            />
            <div className="w-7">{fuelCapacity}</div>
          </div>
          <div className="flex gap-1.5 items-start tracking-[0.02em] leading-[21px]">
            <Image
             
              src="/icons/manual.png"
              className="object-contain  w-6 aspect-square"
              alt="Transmission type icon"
              width={6} height={6}
            />
            <div className="w-12">{transmission}</div>
          </div>
          <div className="flex gap-1.5 items-start">
            <Image
              
              src="/icons/people.png"
              className="object-contain w-6 aspect-square"
              alt="Passenger capacity icon"
              width={6} height={6}
            />
            <div className="w-[60px]">{capacity}</div>
          </div>
        </div>

        <div className="flex gap-3 mt-5 ml-[24px] w-full">
          <div className="flex flex-col font-bold">
            <div className="w-[128px] h-[24px] text-[20px] font-[700] leading-[25.2px] text-left">
              ${price}.00/{" "}
              <span className="text-[14px] font-[700] leading-[17.64px] text-left text-[#90A3BF]">
                day
              </span>
            </div>
            {originalPrice && (
              <div className="w-[128px] h-[20px] mt-1 text-[14px] font-[700] leading-[17.64px] text-left line-through text-[#90A3BF]">
                ${originalPrice}.00
              </div>
            )}
          </div>

          <div className="relative">
            <div className=" top-[320px] left-[164px]">
              
                <div className="w-[76px] h-[24px]  flex items-center justify-center">
                <Link href="/Form">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:border-[#33ffaa] hover:rounded-lg p-2 overflow-hidden hover:shadow-[0_0_10px_2px_#3563E9]">
              Rent Now
            </button>
          </Link>
                </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};