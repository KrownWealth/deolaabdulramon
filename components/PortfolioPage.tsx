"use client";

import { PortfolioData } from "@/json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="bg-black text-white min-h-screen pt-24">
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            All Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            A comprehensive showcase of my work across stacks.
          </p>
        </div>

        {/* Filter Buttons */}
        {/* <div className="flex flex-wrap gap-4 mb-12">
          {["all", "AI", "E-commerce", "CMS", "Web"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category.toLowerCase())}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedCategory === category.toLowerCase()
                ? "bg-blue-600 text-white"
                : "bg-blue-950/50 text-gray-300 hover:bg-blue-900/50 border border-blue-900/30"
                }`}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PortfolioData.map((project, index) => (
            <div
              key={project.projectName}
              className="group relative bg-gradient-to-br from-blue-950/50 to-black border border-blue-900/30 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Project Image */}
              {project.image && (
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.projectName}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                </div>
              )}

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                  {project.projectName}
                </h3>

                {/* Goal */}
                <div>
                  <p className="text-sm text-gray-500 font-semibold mb-1">Goal:</p>
                  <p className="text-gray-300 text-sm line-clamp-2">{project.goal}</p>
                </div>

                {/* Solution */}
                <div>
                  <p className="text-sm text-gray-500 font-semibold mb-1">Solution:</p>
                  <p className="text-gray-300 text-sm line-clamp-3">{project.solution}</p>
                </div>

                {/* Tech Stack */}
                {project.techStack && (
                  <div className="pt-2">
                    <p className="text-xs text-gray-500 font-semibold mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.split(",").slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-blue-900/30">
                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <FaGithub className="w-4 h-4" />
                      GitHub
                    </Link>
                  )}
                  {project.liveLink && (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-block px-8 py-4 border-2 border-blue-600 hover:bg-blue-600/10 rounded-full font-semibold transition-all"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;