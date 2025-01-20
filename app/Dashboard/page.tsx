import React from 'react';
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-white flex-col justify-between p-6">
        <div>
          <h1 className="text-2xl font-bold mb-8">Main Menu</h1>
          <nav className="space-y-4">
            <a href="#" className="block py-2 px-4 rounded bg-[#3563E9] hover:bg-[#3563E9]">Dashboard</a>
            <a href="#" className="block py-2 px-4 rounded hover:bg-[#3563E9]">Car Rent</a>
            <a href="#" className="block py-2 px-4 rounded hover:bg-[#3563E9]">Insight</a>
            <a href="#" className="block py-2 px-4 rounded hover:bg-[#3563E9]">Reimburse</a>
            <a href="#" className="block py-2 px-4 rounded hover:bg-[#3563E9]">Inbox</a>
            <a href="#" className="block py-2 px-4 rounded hover:bg-[#3563E9]">Calendar</a>
          </nav>
        </div>
        <div>
          <nav className="space-y-4">
            <a href="#" className="block py-2 px-4 rounded hover:bg-[#3563E9]">Settings</a>
            <a href="#" className="block py-2 px-4 rounded hover:bg-[#3563E9]">Help & Center</a>
            <a href="#" className="block py-2 px-4 rounded hover:bg-[#3563E9]">Log Out</a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Details Rental */}
          <div className="bg-white shadow-md rounded-lg p-6 w-[534px] h-[836px]">
            <h2 className="text-xl font-semibold mb-4">Details Rental</h2>
            <Image
              src="/images/Maps.png"
              alt="Map"
              width={486}
              height={272}
              className="object-cover rounded-lg"
            />

            {/* Car Details */}
            <div className="bg-white shadow-md rounded-lg p-6 mt-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/car2.png"
                  alt="Nissan GT-R"
                  width={116}
                  height={36}
                  className="object-cover rounded-lg bg-[#3563E9]"
                />
                <div>
                  <h3 className="text-lg font-bold w-[152px]">Nissan GT-R</h3>
                  <p className="text-gray-500">Sport Car</p>
                  <p className="text-gray-500">#9761</p>
                </div>
              </div>
            </div>

            {/* Pick-Up Section */}
            <div className="w-full max-w-md md:max-w-lg bg-white rounded-lg shadow-md p-4 flex flex-col gap-4 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-[16px] h-[16px]">
                  <Image src="/icons/mark.png" alt="Pick-Up Icon" width={16} height={16} />
                </div>
                <p className="text-[16px] font-semibold text-[#1A202C]">Pick - Up</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-bold">Locations</p>
                  <div className="flex items-center gap-2">
                    <p className="text-[12px] text-[#90A3BF]">Select your city</p>
                    <Image src="/icons/Arrow-down.png" alt="arrow" width={14} height={14} />
                  </div>
                </div>
                <div className="hidden sm:block w-[1px] h-full bg-[#C3D4E966]"></div>
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-bold">Date</p>
                  <div className="flex items-center gap-2">
                    <p className="text-[12px] text-[#90A3BF]">Select your date</p>
                    <Image src="/icons/Arrow-down.png" alt="arrow" width={14} height={14} />
                  </div>
                </div>
                <div className="hidden sm:block w-[1px] h-full bg-[#C3D4E966]"></div>
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-bold">Time</p>
                  <div className="flex items-center gap-2">
                    <p className="text-[12px] text-[#90A3BF]">Select your time</p>
                    <Image src="/icons/Arrow-down.png" alt="arrow" width={14} height={14} />
                  </div>
                </div>
              </div>
            </div>

            {/* Drop-Off Section */}
            <div className="w-full max-w-md md:max-w-lg bg-white rounded-lg shadow-md p-4 flex flex-col gap-4 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-[16px] h-[16px]">
                  <Image src="/icons/mark.png" alt="Drop-Off Icon" width={16} height={16} />
                </div>
                <p className="text-[16px] font-semibold text-[#1A202C]">Drop - Off</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-bold">Locations</p>
                  <div className="flex items-center gap-2">
                    <p className="text-[12px] text-[#90A3BF]">Select your city</p>
                    <Image src="/icons/Arrow-down.png" alt="arrow" width={14} height={14} />
                  </div>
                </div>
                <div className="hidden sm:block w-[1px] h-full bg-[#C3D4E966]"></div>
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-bold">Date</p>
                  <div className="flex items-center gap-2">
                    <p className="text-[12px] text-[#90A3BF]">Select your date</p>
                    <Image src="/icons/Arrow-down.png" alt="arrow" width={14} height={14} />
                  </div>
                </div>
                <div className="hidden sm:block w-[1px] h-full bg-[#C3D4E966]"></div>
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-bold">Time</p>
                  <div className="flex items-center gap-2">
                    <p className="text-[12px] text-[#90A3BF]">Select your time</p>
                    <Image src="/icons/Arrow-down.png" alt="arrow" width={14} height={14} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold">Total Rental Price</p>
              <p className="w-[128px] h-[48px] font-bold">$80.00</p>
            </div>
          </div>

          {/* Merged: Top 5 Car Rentals and Recent Transactions */}
          <div className="bg-white shadow-md rounded-lg p-6">
            {/* Top 5 Car Rentals */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Top 5 Car Rentals</h2>
              <div className="flex justify-center items-center h-48">
                <Image
                  src="/icons/Chart.png"
                  alt="Top 5 Car Rental Chart"
                  width={300}
                  height={150}
                  className="object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Divider */}
            <hr className="my-6" />

            {/* Recent Transactions */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <div>
                    <Image
                      src="/images/car2.png"
                      alt="Nissan GT-R"
                      width={116}
                      height={36}
                      className="object-cover rounded-lg bg-[#3563E9]"
                    />
                  </div>
                  <span>Nissan GT-R</span>
                  <span>$80.00</span>
                </div>
                <div className="flex justify-between">
                  <div>
                    <Image
                      src="/images/car1.png"
                      alt="Koenigsegg"
                      width={116}
                      height={36}
                      className="object-cover rounded-lg bg-[#3563E9]"
                    />
                  </div>
                  <span>Koenigsegg</span>
                  <span>$99.00</span>
                </div>
                <div className="flex justify-between">
                  <div>
                    <Image
                      src="/images/car3.png"
                      alt="Rolls-Royce"
                      width={116}
                      height={36}
                      className="object-cover rounded-lg bg-[#3563E9]"
                    />
                  </div>
                  <span>Rolls-Royce</span>
                  <span>$96.00</span>
                </div>
                <div className="flex justify-between">
                  <div>
                    <Image
                      src="/images/car6.png"
                      alt="CR-V"
                      width={116}
                      height={36}
                      className="object-cover rounded-lg bg-[#3563E9]"
                    />
                  </div>
                  <span>CR-V</span>
                  <span>$80.00</span>
                </div>
                <div className="flex justify-between">
                  <div>
                    <Image
                      src="/images/car9.png"
                      alt="Rolls-Royce"
                      width={116}
                      height={36}
                      className="object-cover rounded-lg bg-[#3563E9]"
                    />
                  </div>
                  <span>MG-ZX-Excite</span>
                  <span>$80.00</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
