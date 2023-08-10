import Image from "next/image";

import { ButtonList } from "@/components/ButtonList";

export default function Home() {
    return (
        <main className="container max-w-[618px] mx-auto flex flex-col gap-8 my-20">
            <div className="relative w-full h-[220px]">
                <Image src="/logo.svg" alt="rwalabs" fill priority style={{ objectFit: "contain" }} />
            </div>
            <p className="text-center px-10">
                At RWA-Labs, we are on a mission to revolutionize the world of crypto by bridging the gap between traditional finance and blockchain technology.
                As a cutting-edge crypto company, our primary focus lies in bringing real-world assets onto the blockchain, making them more accessible, secure, and transparent for everyone.
            </p>
            <div className="flex flex-col gap-4">
                <ButtonList />
            </div>
        </main>
    )
}
