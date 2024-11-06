import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen h-screen overflow-hidden flex justify-between w-full bg-[#080796]">
      <section className="flex flex-col items-start justify-center bg-white text-black p-24">
        <h1 className="text-8xl font-bold pb-8 uppercase">Adeola</h1>
        <div className="py-8 leading-10 text-sm md:text-lg">
          <p>Hi, my name is Adeola Abdulramon</p> <br />
          <p>
            I am a Frontend Engineer, Trained Physics Educator, and an Entrepreneur.
          </p><br />
          <p>
            Need my expertise for a project, {" "}
            <Link href="https://wa.me/2348160633845" className="underline font-semibold">book a service with me</Link>!
          </p> <br />

          <p>
            Catch up with my latest article on hot frontend development{" "}
            <span>
              <Link href="https://medium.com/@adeoladeveloper" className="underline font-semibold">topics</Link>
            </span>
            !
          </p>
        </div>
        <div className="flex space-x-2 ">
          <Link href="https://github.com/KrownWealth"> <FaGithub className="w-6 h-6" /></Link>
          <Link href="https://www.linkedin.com/in/adeolaabdulramon/"> <FaLinkedinIn className="w-6 h-6" /></Link>
          <Link href="https://x.com/deoladev"> <FaXTwitter className="w-6 h-6" /></Link>
          <Link href="https://medium.com/@adeoladeveloper"> <FaMediumM className="w-6 h-6" /></Link>
          <Link href="mailto:deolaabdulramon@gmail.com"><FaRegEnvelope className="w-6 h-6" /></Link>
        </div>
      </section>
      <section className="bg-[#080796]">
        <Image
          src="/assets/images/adeola-removebg.png"
          alt="Adeola Abdulramon"
          layout="responsive"
          width={1000} // Adjust this to the actual aspect ratio of the image
          height={500} // Adjust this to the actual aspect ratio of the image
          className="w-full max-w-xs sm:max-w-md lg:max-w-lg"
        />

      </section>
    </main>
  );
}
