"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PortfolioData } from "@/json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function PortfolioAccordion() {
  const [imageLoadedMap, setImageLoadedMap] = useState<Record<string, boolean>>({});

  const handleImageLoad = (projectName: string) => {
    setImageLoadedMap((prev) => ({ ...prev, [projectName]: true }));
  };

  return (
    <Accordion type="single" collapsible className="w-full pt-4">
      {PortfolioData.map((portfolio) => {
        const isLoaded = imageLoadedMap[portfolio.projectName];

        return (
          <AccordionItem key={portfolio.projectName} value={portfolio.projectName}>
            <AccordionTrigger className="font-semibold text-lg">
              {portfolio.projectName}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col w-full md:w-1/2 items-start justify-center space-y-4">
                  <p><strong>Goal:</strong> {portfolio.goal}</p>
                  <p><strong>Solution:</strong> {portfolio.solution}</p>
                  {portfolio.techStack && <p><strong>Tech Stack:</strong> {portfolio.techStack}</p>}
                  {portfolio.githubLink && (
                    <p>
                      <Link
                        href={portfolio.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        See more on GitHub
                      </Link>
                    </p>
                  )}
                  {portfolio.liveLink && (
                    <p>
                      <Link
                        href={portfolio.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        Live link
                      </Link>
                    </p>
                  )}
                </div>
                <div className="flex w-full md:w-[40%] items-start justify-start mt-4 md:mt-0">
                  {portfolio.image && (
                    <div className="relative w-full aspect-video">
                      {!isLoaded && (
                        <div className="absolute inset-0 bg-gray-200 h-[200px] rounded-md animate-pulse" />
                      )}
                      <Image
                        src={portfolio.image}
                        alt={portfolio.projectName}
                        width={1380}
                        height={793}
                        style={{ objectFit: "cover" }}
                        className={`rounded-md transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"
                          }`}
                        loading="lazy"
                        onLoadingComplete={() => handleImageLoad(portfolio.projectName)}
                      />
                    </div>
                  )}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
