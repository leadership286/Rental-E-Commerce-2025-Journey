import Image from "next/image";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="w-full h-auto bg-white border-t border-b border-solid border-[#C3D4E966] flex flex-col md:flex-row items-center px-4 md:px-10 md:h-[124px]">
      {/* Left Section - Logo */}
      <div className="flex justify-between items-center w-full md:w-auto md:flex-row md:gap-[191px] mt-4 md:mt-0">
        <div className="flex items-center gap-2">
          <p className="font-bold text-[24px] md:text-[32px] leading-[28.8px] md:leading-[48px] text-[#3563E9] animate-bounce-in hover:border-2 hover:border-[#33ffaa] hover:rounded-lg p-2 overflow-hidden hover:shadow-[0_0_10px_2px_#3563E9]">
            MORENT
          </p>
        </div>
      </div>

      {/* Middle Section - Search Bar */}
      <div className="relative w-[263px] lg:w-[492px] h-[48px] bg-white border border-[#C3D4E966] lg:rounded-full rounded-[10px] mt-4 md:mt-0 md:mx-16 flex items-center">
        <input
          type="text"
          placeholder="Search something here"
          className="w-full h-full pl-10 pr-12 text-[14px] font-medium text-[#596780] bg-white lg:rounded-full rounded-[10px] animate-fade-in"
        />
        <div className="absolute left-[12px] top-[50%] transform -translate-y-1/2">
          <Image src="/icons/search-normal.png" alt="Search Icon" width={24} height={24} />
        </div>
        <div className="absolute right-[12px] top-[50%] transform -translate-y-1/2">
          <Image src="/icons/filter.png" alt="Filter Icon" width={24} height={24} />
        </div>
      </div>

      {/* Right Section - Icons & Auth Buttons */}
      <div className="hidden md:flex items-center space-x-5 ml-auto">
        <Image src="/icons/Like.png" alt="Like Icon" width={44} height={44} />
        <Image src="/icons/Notification.png" alt="Notification Icon" width={44} height={44} />
        <Image src="/icons/Settings.png" alt="Settings Icon" width={44} height={44} />

        {/* Clerk Authentication */}
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
