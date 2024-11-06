"use client";

import Navigation from "./Navigation";
import { SectionHeading } from "./SectionHead";
import { UserAvatar } from "./Avatar";
import { usePathname } from "next/navigation";

export const NavigationCondition = () => {
  const pathname = usePathname();

  let headTitle = "";
  if (pathname === "/portfolio") {
    headTitle = "Portfolio";
  } else if (pathname === "/about") {
    headTitle = "About";
  }

  return (
    <>
      {pathname === "/" ? (
        <div className="py-4 md:py-12">
          <Navigation />
        </div>
      ) : (
        <div className="flex justify-between items-start py-4 md:py-12 ">
          <div className="flex space-x-4">
            <Navigation />
            <SectionHeading headTitle={headTitle} />
          </div>
          <div>  <UserAvatar /></div>
        </div>
      )}
    </>
  );
};
