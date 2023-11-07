import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-around items-center mt-20">
      <div className="w-[400px] flex flex-col gap-8 items-start justify-start">
        <h1 className="text-5xl font-bold text-[#00D487]">
          CREATE YOUR BLOGS NOW !
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          temporibus rem, odit vitae architecto facilis nesciunt earum corrupti
          omnis! Quaerat?
        </p>
        <Link href="/portofolio">
        <button className="bg-[#00D487] px-6 py-2.5 rounded-lg font-semibold text-black active:bg-[#207e5b]">
          See Our Works
        </button>
      </Link>
      </div>
      <Image src="/hero.svg" width={500} height={500} alt="hero image" className="animate-pluse" />
    </div>
  );
}
