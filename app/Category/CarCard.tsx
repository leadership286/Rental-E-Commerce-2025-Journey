import { CarCardProps } from "./types"; // Ensure this is correct
import Image from "next/image";
import Link from "next/link";

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
    <div className="w-full sm:w-[304px] bg-white rounded-lg shadow-md p-2 overflow-hidden">
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          <p className="text-sm font-medium text-gray-500">{type}</p>
        </div>
        <Image
          src={liked ? "/icons/Heart.png" : "/icons/disLike.png"}
          alt={liked ? "Liked car" : "Not liked car"}
          width={24}
          height={24}
        />
      </div>

      {/* Car Image */}
      <div className="mt-6 flex justify-center">
        <Image
          src={image}
          className="w-full max-w-[232px] h-auto object-contain"
          alt={`${name} car`}
          width={232}
          height={72}
        />
      </div>

      {/* Features Section */}
      <div className="mt-6 flex justify-between text-sm font-medium text-gray-500">
        <div className="flex items-center gap-2">
          <Image
            src="/icons/feul.png"
            alt="Fuel"
            width={24}
            height={24}
          />
          <span>{fuelCapacity}</span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/icons/manual.png"
            alt="Transmission"
            width={24}
            height={24}
          />
          <span>{transmission}</span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/icons/people.png"
            alt="Capacity"
            width={24}
            height={24}
          />
          <span>{capacity}</span>
        </div>
      </div>

      {/* Rent Now Button */}
      <div className="mt-6 flex justify-between items-center">
        <div>
          <p className="text-xl font-bold text-gray-800">${price}.00/day</p>
          {originalPrice && <p className="text-sm line-through text-gray-500">${originalPrice}.00</p>}
        </div>
        <Link
          href={{
            pathname: "/Form",
            query: {
              name,
              type,
              image,
              fuelCapacity,
              transmission,
              capacity,
              price,
              originalPrice: originalPrice || "", // Ensuring originalPrice is defined
            },
          }}
        >
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Rent Now
          </button>
        </Link>
      </div>
    </div>
  );
};
