import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/_lib/auth";
import { Key } from "react";

interface BarbershopDetailsPageProps {
  params: {
    id?: string;
  };
}

const BarbershopDetailsPage = async ({
  params,
}: BarbershopDetailsPageProps) => {
  const session = await getServerSession(authOptions);
  if (!params.id) {
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    return null;
  }

  return (
    <div className="lg:container lg:mx-auto">
      <BarbershopInfo barbershop={barbershop} />
      <div className="px-5 flex flex-col items-center gap-4 py-6">
        {barbershop.services.map((service: { id: Key | null | undefined }) => (
          <ServiceItem
            key={service.id}
            barbershop={barbershop}
            service={service}
          />
        ))}
      </div>
    </div>
  );
};

export default BarbershopDetailsPage;
