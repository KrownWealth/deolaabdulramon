import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PortfolioData } from "@/json";
import Image from "next/image";

export function PortfolioAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full pt-4">
      {PortfolioData.map((portfolio) => (
        <AccordionItem key={portfolio.projectName} value={portfolio.projectName}>
          <AccordionTrigger className="font-semibold text-lg">
            {portfolio.projectName}
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap">
              <div className="flex flex-col w-full md:w-1/2 items-start justify-center space-y-4">
                <p><strong>Goal:</strong> {portfolio.goal}</p>
                <p><strong>Solution:</strong> {portfolio.solution}</p>
                {portfolio.techStack && <p><strong>Tech Stack:</strong> {portfolio.techStack}</p>}
                {portfolio.githubLink && (
                  <p>
                    <a
                      href={portfolio.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      See more on GitHub
                    </a>
                  </p>
                )}
              </div>
              <div className="flex w-full md:w-[40%] items-start justify-start mt-4 md:mt-0">
                {portfolio.image && (
                  <Image
                    src={portfolio.image}
                    alt={portfolio.projectName}
                    width={1380}
                    height={793}
                    style={{ objectFit: "cover" }}
                    className="rounded-md"
                  />
                )}
              </div>
            </div>

          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
