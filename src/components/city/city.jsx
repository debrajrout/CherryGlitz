import Image from "next/image";

const City = () => {
  return (
    <div className="flex w-full flex-row items-center overflow-x-auto bg-yellow-300/40 px-1 py-2">
      <div className="flex h-28 space-x-4">
        <div className="h-24 w-20 flex-shrink-0 shadow-md shadow-yellow-400">
          <Image
            src="/city/agra.png"
            alt="City 1"
            className="rounded-lg object-cover"
            width={160}
            height={160}
            layout="responsive"
          />
        </div>
        <div className="h-24 w-20 flex-shrink-0 shadow-md shadow-sky-400">
          <Image
            src="/city/bengaluru.png"
            alt="City 2"
            className="rounded-lg object-cover"
            width={160}
            height={160}
            layout="responsive"
          />
        </div>
        <div className="h-24 w-20 flex-shrink-0 shadow-md shadow-lime-400">
          <Image
            src="/city/chennai.png"
            alt="City 3"
            className="rounded-lg object-cover"
            width={160}
            height={160}
            layout="responsive"
          />
        </div>
        <div className="h-24 w-20 flex-shrink-0 shadow-md shadow-pink-500">
          <Image
            src="/city/hyderabad.png"
            alt="City 4"
            className="rounded-lg object-cover"
            width={160}
            height={160}
            layout="responsive"
          />
        </div>
        <div className="h-24 w-20 flex-shrink-0 shadow-md shadow-blue-500">
          <Image
            src="/city/jaipur.png"
            alt="City 5"
            className="rounded-lg object-cover"
            width={160}
            height={160}
            layout="responsive"
          />
        </div>
        <div className="h-24 w-20 flex-shrink-0 shadow-md shadow-yellow-400">
          <Image
            src="/city/kolkata.png"
            alt="City 6"
            className="rounded-lg object-cover"
            width={160}
            height={160}
            layout="responsive"
          />
        </div>
        <div className="h-24 w-20 flex-shrink-0 shadow-md shadow-green-400">
          <Image
            src="/city/lucknow.png"
            alt="City 7"
            className="rounded-lg object-cover"
            width={160}
            height={160}
            layout="responsive"
          />
        </div>
        <div className="h-24 w-20 flex-shrink-0 shadow-md shadow-yellow-400">
          <Image
            src="/city/mumbai.png"
            alt="City 8"
            className="rounded-lg object-cover"
            width={160}
            height={160}
            layout="responsive"
          />
        </div>
        <div className="h-24 w-20 flex-shrink-0 shadow-md shadow-yellow-400">
          <Image
            src="/city/pune.png"
            alt="City 9"
            className="rounded-lg object-cover"
            width={160}
            height={160}
            layout="responsive"
          />
        </div>
        <div className="h-24 w-20 flex-shrink-0 shadow-md shadow-yellow-400">
          <Image
            src="/city/surat.png"
            alt="City 10"
            className="rounded-lg object-cover"
            width={160}
            height={160}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default City;
