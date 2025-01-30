import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col items-center gap-8 bg-[#F6F7F9] p-4">
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Pick-Up Section */}
        <div className="w-full max-w-md md:max-w-lg bg-white rounded-lg shadow-md p-4 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-[16px] h-[16px]">
              <Image src="/icons/mark.png" alt="Pick-Up Icon" width={16} height={16} />
            </div>
            <p className="text-[16px] font-semibold text-[#1A202C]">Pick - Up</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {/* Locations */}
            <div className="flex flex-col gap-1">
              <p className="text-[14px] font-bold">Locations</p>
              <div className="flex items-center gap-2">
                <p className="text-[12px] text-[#90A3BF]">Select your city</p>
                <Image src="/icons/Arrow-down.png" alt="arrow" width={14} height={14} />
              </div>
            </div>

            {/* Divider for larger screens */}
            <div className="hidden sm:block w-[1px] h-full bg-[#C3D4E966]"></div>

            {/* Date */}
            <div className="flex flex-col gap-1">
              <p className="text-[14px] font-bold">Date</p>
              <div className="flex items-center gap-2">
                <p className="text-[12px] text-[#90A3BF]">Select your date</p>
                <Image src="/icons/Arrow-down.png" alt="arrow" width={14} height={14} />
              </div>
            </div>

            {/* Divider for larger screens */}
            <div className="hidden sm:block w-[1px] h-full bg-[#C3D4E966]"></div>

            {/* Time */}
            <div className="flex flex-col gap-1">
              <p className="text-[14px] font-bold">Time</p>
              <div className="flex items-center gap-2">
                <p className="text-[12px] text-[#90A3BF]">Select your time</p>
                <Image src="/icons/Arrow-down.png" alt="arrow" width={14} height={14} />
              </div>
            </div>
          </div>
        </div>

        {/* Switch Icon */}
        <div className="absolute top-[50%] md:top-[unset] left-[50%] md:left-[unset] transform md:translate-x-0 md:translate-y-0 -translate-x-1/2 -translate-y-1/2 z-10">
          <Image src="/icons/Switch.png" alt="refresh" width={40} height={40} className="bg-blue-500 p-2 rounded-full" />
        </div>

        {/* Drop-Off Section */}
        <div className="w-full max-w-md md:max-w-lg bg-white rounded-lg shadow-md p-4 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-[16px] h-[16px]">
              <Image src="/icons/mark.png" alt="Drop-Off Icon" width={16} height={16} />
            </div>
            <p className="text-[16px] font-semibold text-[#1A202C]">Drop - Off</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {/* Locations */}
            <div className="flex flex-col gap-1">
              <p className="text-[14px] font-bold">Locations</p>
              <div className="flex items-center gap-2">
                <p className="text-[12px] text-[#90A3BF]">Select your city</p>
                <Image src="/icons/Arrow-down.png" alt="arrow" width={14} height={14} />
              </div>
            </div>

            {/* Divider for larger screens */}
            <div className="hidden sm:block w-[1px] h-full bg-[#C3D4E966]"></div>

            {/* Date */}
            <div className="flex flex-col gap-1">
              <p className="text-[14px] font-bold">Date</p>
              <div className="flex items-center gap-2">
                <p className="text-[12px] text-[#90A3BF]">Select your date</p>
                <Image src="/icons/Arrow-down.png" alt="arrow" width={14} height={14} />
              </div>
            </div>

            {/* Divider for larger screens */}
            <div className="hidden sm:block w-[1px] h-full bg-[#C3D4E966]"></div>

            {/* Time */}
            <div className="flex flex-col gap-1">
              <p className="text-[14px] font-bold">Time</p>
              <div className="flex items-center gap-2">
                <p className="text-[12px] text-[#90A3BF]">Select your time</p>
                <Image src="/icons/Arrow-down.png" alt="arrow" width={14} height={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
