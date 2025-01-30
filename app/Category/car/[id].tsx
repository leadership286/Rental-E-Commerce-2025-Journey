import { GetServerSidePropsContext } from "next"; // Import correct type
import Image from "next/image";
import React from "react";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params as { id: string }; // Type define kar diya for params
  const res = await fetch(`https://sanity-nextjs-application.vercel.app/api/hackathon/template7/${id}`);
  
  if (!res.ok) {
    return {
      notFound: true, // If API fails, show 404 page
    };
  }

  const car = await res.json();

  return {
    props: {
      car, // Pass car data to the component
    },
  };
}

export default function CarDetail({ car }: { car: { name: string; image: string; description: string; price: number } }) {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold">{car.name}</h1>
      <Image src={car.image} alt={car.name} width={600} height={400} />
      <p className="text-gray-600">{car.description}</p>
      <p className="text-lg font-bold">Price: ${car.price}</p>
    </div>
  );
}
