import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { RiMenuFill } from "react-icons/ri";
import { Sheet, SheetTrigger, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const menuLink = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" }
]
export default function Home() {

  return (
    <div className="min-h-screen h-screen md:overflow-hidden flex flex-col md:flex-row justify-between w-full bg-white md:bg-[#080796] p-4 md:p-0">
      <section className="w-full md:w-1/2 flex flex-col  bg-white text-black md:p-12 lg:p-4 lg:px-12 order-2 md:order-1">
        <div className="items-start justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold md:pb-8 uppercase pt-2 md:pt-0">Adeola</h1>
          <div className="py-8  lg:leading-10 text-sm md:text-lg">
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
        </div>
      </section>
      <section className="w-full md:w-1/2 bg-[#080796] order-1 md:order-2 flex items-center justify-center">

        <Image
          src="/assets/images/adeola-removebg.png"
          alt="Adeola Abdulramon"
          layout="responsive"
          width={1000} // Adjust this to the actual aspect ratio of the image
          height={500} // Adjust this to the actual aspect ratio of the image
          className="w-full max-w-xs sm:max-w-md lg:max-w-lg"
        />

      </section>
    </div>
  );
}
