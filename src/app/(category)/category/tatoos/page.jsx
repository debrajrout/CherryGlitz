import { AccordionDemo } from "@/components/special-components/TabTatooSection";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import { GiModernCity } from "react-icons/gi";
import { GrBraille } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const TreatmentItem = ({ imageUrl, name, description }) => {
  return (
    <div className="mb-4 flex h-[150px] w-full flex-row items-center justify-between gap-4 rounded-lg bg-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      <div className="w-1/3">
        <Image
          src={imageUrl}
          width={1000}
          height={667}
          alt={name}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
      <div className="flex w-2/3 flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        </div>
        <div className="mt-2 flex h-8 w-28 items-center justify-between rounded-full bg-blue-500 px-3 py-1 text-white shadow transition-colors duration-300 hover:bg-blue-600">
          <span className="text-sm font-semibold">Visit Now</span>
          <GrFormNext />
        </div>
      </div>
    </div>
  );
};

const TattooItem = ({
  imageUrl,
  title,
  description,
  symbolText,
  tags,
  titleColor,
}) => {
  return (
    <div className="mb-4 flex h-[160px] w-full flex-row items-center justify-between gap-4 rounded-lg bg-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      <div className="w-1/3">
        <Image
          src={imageUrl}
          width={986}
          height={1000}
          alt={title}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
      <div className="flex w-2/3 flex-col justify-between">
        <div>
          <h3 className={`text-lg font-semibold ${titleColor}`}>{title}</h3>
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        </div>
        <div className="flex flex-col">
          <span className="flex items-center text-sm font-medium text-gray-800">
            {symbolText} <GrBraille className="ml-1" />
          </span>
          <span className="text-sm text-gray-600">{tags}</span>
        </div>
      </div>
    </div>
  );
};

export default function page() {
  return (
    <div className="mt-8 flex w-full flex-col items-center bg-slate-100 p-4">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl shadow-lg">
        <Image
          src="/tatoo/tatoonm.png"
          width={1181}
          height={945}
          className="rounded-2xl object-cover"
          alt="Main Tattoo"
        />
        <div className="absolute bottom-0 w-full bg-black/70 p-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-bold text-white">Cherry Glitz</h2>
              <span className="text-sm font-semibold text-orange-500">
                Best Tattoos<span> & Piercing</span>
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 p-2 ring-1 ring-white/25">
              <span className="text-base font-semibold text-sky-400">
                In your
              </span>
              <GiModernCity className="text-2xl text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 w-full max-w-4xl">
        <TattooItem
          imageUrl="/tatoo/tatoob1.webp"
          title="Tribal tattoos"
          description="Way to connect with heritage and foster a sense of pride and unity"
          symbolText="Symbol of"
          tags=". fertility . protection . courage"
          titleColor="text-lime-500"
        />

        <TattooItem
          imageUrl="/tatoo/tatoob2.webp"
          title="Neo traditional style"
          description="More complex color palettes and more variation in line weight"
          symbolText="Search for"
          tags=". new school . neotraditional"
          titleColor="text-blue-600"
        />

        <TattooItem
          imageUrl="/tatoo/tatoob3.webp"
          title="Japanese tattoos"
          description="Broadly speaking, tattooing in Japan is generally referred to as Irezumi"
          symbolText="Symbol of"
          tags=". Dragon Tattoos . Snake Tattoos"
          titleColor="text-red-500"
        />
      </div>

      <div className="mt-6 w-full max-w-4xl">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          Spa Treatments
        </h2>
        <TreatmentItem
          imageUrl="/spa/hydrafacial.jpg"
          name="Hydrafacial"
          description="Hydrafacial deeply cleanses, exfoliates, and hydrates your skin."
        />
        <TreatmentItem
          imageUrl="/spa/himalayan-salt-stone.jpg"
          name="Himalayan Salt Stone"
          description="A relaxing massage using warm Himalayan salt stones to soothe muscles."
        />
        <TreatmentItem
          imageUrl="/spa/float-therapy.jpg"
          name="Float Therapy"
          description="Sensory deprivation tank therapy for deep relaxation and stress relief."
        />
      </div>

      <AccordionDemo />
    </div>
  );
}
