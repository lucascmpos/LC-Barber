/* eslint-disable react/no-unescaped-entities */
import { Key } from "react";
import BarbershopItem from "../(home)/_components/barbershop-item";
import Header from "../_components/header";
import { db } from "../_lib/prisma";
import { redirect } from "next/navigation";

interface BarbershopsPageProps {
  searchParams: {
    search?: string;
  };
}

const BarbershopsPage = async ({ searchParams }: BarbershopsPageProps) => {
  if (!searchParams.search) {
    redirect("/");
  }
  const barbershops = await db.barbershop.findMany({
    where: {
      name: {
        contains: searchParams.search,
        mode: "insensitive",
      },
    },
  });
  return (
    <>
      <Header />
      <div className="px-5 py-6">
        <h1 className="text-gray-400 font-bold text-xs uppercase">
          Resultados para "{searchParams.search}"
        </h1>

        <div className="grid grid-cols-2 gap-4 mt-3">
          {barbershops.map((barbershop: { id: Key | null | undefined }) => (
            <div key={barbershop.id} className="w-full">
              <BarbershopItem barbershop={barbershop} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BarbershopsPage;
