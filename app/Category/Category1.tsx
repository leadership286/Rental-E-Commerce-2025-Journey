import * as React from "react";
import { CarCard } from "./CarCard";
import Link from "next/link";
import { SectionHeader } from "./SectionHeader";
import Header from "./Header";


const PopularCars = [
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car1.png",
    fuelCapacity: "90L",
    transmission: "Manual",
    capacity: "2 People",
    price: 99,
    liked: true,
  },
  {
    name: "Nissan GT - R",
    type: "Sport",
    image: "/images/car2.png",
    fuelCapacity: "80L",
    transmission: "Manual",
    capacity: "2 People",
    price: 80,
    originalPrice: 100,
    liked: false,
  },
  {
    name: "Rolls - Royce",
    type: "Sedan",
    image: "/images/car3.png",
    fuelCapacity: "70L",
    transmission: "Manual",
    capacity: "4 People",
    price: 96,
    liked: false,
  },
  {
    name: "All New Rush",
    type: "SUV",
    image: "/images/car5.png",
    fuelCapacity: "70L",
    transmission: "Manual",
    capacity: "6 People",
    price: 72,
    originalPrice: 80,
    liked: false,
  },
  {
    name: "CR - V",
    type: "SUV",
    image: "/images/car6.png",
    fuelCapacity: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: 80,
    liked: true,
  },
  {
    name: "All New Terios",
    type: "SUV",
    image: "/images/car7.png",
    fuelCapacity: "90L",
    transmission: "Manual",
    capacity: "6 People",
    price: 74,
    liked: false,
  },
  {
    name: "MG ZX Exclusive",
    type: "Hatchback",
    image: "/images/car9.png",
    fuelCapacity: "70L",
    transmission: "Manual",
    capacity: "4 People",
    price: 76,
    originalPrice: 80,
    liked: false,
  },
  {
    name: "New MG ZS",
    type: "SUV",
    image: "/images/car10.png",
    fuelCapacity: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: 80,
    liked: false,
  },
  {
    name: "MG ZX Excite",
    type: "Hatchback",
    image: "/images/car9.png",
    fuelCapacity: "90L",
    transmission: "Manual",
    capacity: "4 People",
    price: 74,
    liked: true,
  },
];

export const Category1: React.FC = () => {
  return (
    <div className="w-full">
      <Header />
      <main
        className="flex flex-col bg-[#F6F7F9]  min-w-full min-h-screen  mb-30 gap-[32px] overflow-x-hidden"
        role="main"
      >
        <section
          className="flex flex-col max-w-[1200px] mx-auto"
          aria-label="Popular Cars"
        >
          <SectionHeader title="" showViewAll={true} />
          <div
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 mt-5"
          >
            {PopularCars.map((car, index) => (
              <CarCard key={`popular-${index}`} {...car} />
            ))}
          </div>
        </section>

        <div className="flex items-center justify-between max-w-[1200px] mx-auto mt-[20px] px-4">
  <div className="w-[156px] h-[44px] px-[20px] bg-[#3563E9] rounded-[4px] flex items-center justify-center gap-[8px]">
    <Link href="/Category">
      <p className="font-['Plus Jakarta Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-white text-center">
        Show more car
      </p>
    </Link>
  </div>
  <div className="text-[#90A3BF] ml-8">
    <p className="font-['Plus Jakarta Sans'] text-[14px] font-medium leading-[21px] tracking-[-0.02em]">
      120 Car
    </p>
  </div>
</div>


      </main>
    </div>
  );
};