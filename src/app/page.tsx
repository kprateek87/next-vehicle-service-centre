import { ScheduleAnAppointment } from "@/components/ButtonWrapers";
import Image from "next/image";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";

export default async function Home() {

  return (
    <>
      <div className="relative h-screen w-full">
  <Image
    src="/images/banners/banner3.jpg"
    alt="mechanic working on car"
    fill
    className="object-cover"
    priority
  />

  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-20 flex items-center justify-start h-full px-12">
    <div className="max-w-xl text-left md:text-right">
      <h1 className="md:text-5xl text-4xl font-extrabold text-white leading-tight mb-6">
        Restore Your Vehicle <br /> to Peak Performance
      </h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Our certified mechanics have the expertise and equipment necessary 
        to diagnose and repair any issues with your vehicle, ensuring 
        peak performance and reliability.
      </p>
      <ScheduleAnAppointment />
<div className="flex">

<FaScrewdriverWrench />
<FaHandHoldingUsd />
</div>
    </div>
  </div>
</div>
    </>
  );
}
