import Image from "next/image";
import droneHome from "@images/home.png";

export default function Home() {
  return (
    <main className="">
      <Image
        className="kenburns-top"
        src={droneHome}
        placeholder="blur"
        quality={100}
        alt=" FVP дрон"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -2,
        }}
      />
    </main>
  );
}
