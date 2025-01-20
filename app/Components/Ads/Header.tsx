import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col items-center gap-6 bg-[#F6F7F9]">
      <div className="flex items-center justify-center gap-4">
        <div className="w-[582px] h-[136px] bg-white  rounded-[10px] flex flex-col gap-4 p-6 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-[16px] h-[16px]">
              <Image src="/icons/mark.png" alt=""  width={16} height={16}/>
            </div>
            <p className="text-[16px] font-semibold text-[#1A202C]">
              Pick - Up
            </p>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-[16px] font-bold">Locations</p>
              <div className="flex items-center gap-2">
                <p className="text-[12px] text-[#90A3BF]">Select your city</p>
                <Image
                  src="/icons/Arrow-down.png"
                  alt="arrow"
                 width={14} height={14}
                />
              </div>
            </div>
            <div className="w-[48px] h-0 border-[1px] border-solid border-[#C3D4E966] mt-4 rotate-[270deg]"></div>

            <div className="flex flex-col gap-2">
              <p className="text-[16px] font-bold">Date</p>
              <div className="flex items-center gap-2">
                <p className="text-[12px] text-[#90A3BF]">Select your date</p>
                <Image
                  src="/icons/Arrow-down.png"
                  alt="arrow"
                  width={14}
                  height={14}
                />
              </div>
            </div>
            <div className="w-[48px] h-0 border-[1px] border-solid border-[#C3D4E966] mt-4 rotate-[270deg]"></div>

            <div className="flex flex-col gap-2">
              <p className="text-[16px] font-bold">Time</p>
              <div className="flex items-center gap-2">
                <p className="text-[12px] text-[#90A3BF]">Select your time</p>
                <Image
                  src="/icons/Arrow-down.png"
                  alt="arrow"
                  width={14}
                  height={14}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="top-[520px] let-[690px] flex items-center justify-center  text-white">
          <Image src="/icons/Switch.png" alt="refresh" width={50} height={50} />
        </div>

        <div className="w-[582px] h-[136px] bg-white  rounded-[10px] flex flex-col gap-4 p-6 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-[16px] h-[16px] bg-gray-300 rounded-full">
              <Image src="/icons/mark.png" alt="" width={16} height={16} />
            </div>
            <p className="text-[16px] font-semibold text-[#1A202C]">
              Drop - Off
            </p>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-[16px] font-bold">Locations</p>
              <div className="flex items-center gap-2">
                <p className="text-[12px] text-[#90A3BF]">Select your city</p>
                <Image
                  src="/icons/Arrow-down.png"
                  alt="arrow"
                  width={14} height={14}
                />
              </div>
            </div>
            <div className="w-[48px] h-0 border-[1px] border-solid border-[#C3D4E966] mt-4 rotate-[270deg]"></div>

            <div className="flex flex-col gap-2">
              <p className="text-[16px] font-bold">Date</p>
              <div className="flex items-center gap-2">
                <p className="text-[12px] text-[#90A3BF]">Select your date</p>
                <Image
                  src="/icons/Arrow-down.png"
                  alt="arrow"
                  width={14} height={14}
                />
              </div>
            </div>

            <div className="w-[48px] h-0 border-[1px] border-solid border-[#C3D4E966] mt-4 rotate-[270deg]"></div>

            <div className="flex flex-col gap-2">
              <p className="text-[16px] font-bold">Time</p>
              <div className="flex items-center gap-2">
                <p className="text-[12px] text-[#90A3BF]">Select your time</p>
                <Image
                  src="/icons/Arrow-down.png"
                  alt="arrow"
                width={14} height={14}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}