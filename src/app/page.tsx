import { ScheduleAnAppointment } from "@/components/ButtonWrapers";
import Cards from "@/components/Cards";
import SectionHeading from "@/components/SectionHeading";
import { cards1, cards2 } from "@/data/card";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <div className="relative h-[110vh] w-full">
        <Image
          src="/images/banners/banner3.jpg"
          alt="mechanic working on car"
          className="object-cover"
          fill
          priority
        />

        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-20 flex items-center justify-start h-full px-12">
          <div className="max-w-xl text-left md:text-right">
            <h1 className="md:text-5xl text-4xl font-bold text-white leading-tight">
              Restore Your Vehicle <br /> to Peak Performance
            </h1>
            <p className="text-lg textm-gray-300 leading-relaxed my-6">
              Our certified mechanics have the expertise and equipment necessary
              to diagnose and repair any issues with your vehicle, ensuring peak
              performance and reliability.
            </p>
            <ScheduleAnAppointment />
            <div>
              <Cards cardData={cards1} variant="cards1" />
            </div>
          </div>
        </div>
      </div>
      <SectionHeading headText="about us" subHeadText="" />
    </>
  );
}
