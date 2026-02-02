"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaMedium, FaRegEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { PortfolioData, BlogData } from "@/json";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featuredProjects = PortfolioData.slice(0, 4);
  const featuredBlogs = BlogData.slice(0, 3);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen relative flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-black">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-slide-up">
              ADEOLA
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white animate-slide-up-delay-1">
              ABDULRAMON
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-slide-up-delay-2">
              Frontend Developer · Physics Educator
            </p>
            <div className="flex justify-center gap-6 mb-12 animate-slide-up-delay-3">
              <Link
                href="mailto:deolaabdulramon@gmail.com"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all transform hover:scale-105"
              >
                Book a Service
              </Link>
              <Link
                href="#projects"
                className="px-8 py-4 border-2 border-blue-600 hover:bg-blue-600/10 rounded-full font-semibold transition-all"
              >
                View Projects
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 animate-slide-up-delay-4">
              <Link
                href="https://github.com/KrownWealth"
                className="p-3 bg-blue-900/30 hover:bg-blue-800/50 rounded-full transition-all transform hover:scale-110"
              >
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/adeolaabdulramon/"
                className="p-3 bg-blue-900/30 hover:bg-blue-800/50 rounded-full transition-all transform hover:scale-110"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </Link>
              <Link
                href="https://x.com/deoladev"
                className="p-3 bg-blue-900/30 hover:bg-blue-800/50 rounded-full transition-all transform hover:scale-110"
              >
                <FaXTwitter className="w-6 h-6" />
              </Link>
              <Link
                href="https://medium.com/@adeoladeveloper"
                className="p-3 bg-blue-900/30 hover:bg-blue-800/50 rounded-full transition-all transform hover:scale-110"
              >
                <FaMedium className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:deolaabdulramon@gmail.com"
                className="p-3 bg-blue-900/30 hover:bg-blue-800/50 rounded-full transition-all transform hover:scale-110"
              >
                <FaRegEnvelope className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-gradient-to-b from-black to-blue-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            <div className="lg:w-3/5 space-y-6">
              <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Hi,
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                My name is Adeola Abdulramon. I am a Frontend Developer who loves the Web and
                Emerging Technologies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m a Frontend Developer at Sapphire Virtual Network Limited (SVNL), a credit-financing company expanding access to technology, and renewable energy through innovative device and solar financing solutions.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I build data-driven digital web applications that make financing more accessible and user-friendly, delivering scalable features that improve performance, usability, and product adoption.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed"> I hold a Bachelor of Science in Education (Physics) from Obafemi Awolowo University (Affiliate: Adeyemi College of Education), Ondo, Nigeria. This STEM background strengthens my critical thinking and problem-solving approach to software development.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I love to contribute to open-source and volunteering for good cause. I have a blog on medium, where I post content on digital innovation and frontend development.
              </p>

            </div>
            <div className="lg:w-2/5 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
              <Image
                src="/assets/images/adeola-removebg.png"
                alt="Adeola Abdulramon"
                width={500}
                height={500}
                className="relative rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.projectName}
                className="group relative bg-gradient-to-br from-blue-950/50 to-black border border-blue-900/30 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
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
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-blue-400">{project.projectName}</h3>
                  <p className="text-gray-300 line-clamp-3">{project.solution}</p>
                  {project.techStack && (
                    <p className="text-sm text-gray-500">
                      <span className="text-blue-400 font-semibold">Tech:</span>{" "}
                      {project.techStack.split(",").slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </p>
                  )}
                  <div className="flex gap-4 pt-4">
                    {project.githubLink && (
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        GitHub →
                      </Link>
                    )}
                    {project.liveLink && (
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Live Demo →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all transform hover:scale-105"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="min-h-screen bg-gradient-to-b from-black to-blue-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredBlogs.map((blog, index) => (
              <div
                key={blog.blogTitle}
                className="bg-gradient-to-br from-blue-950/50 to-black border border-blue-900/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500"
              >

                <p className="text-gray-300 mb-4 text-xl">
                  {blog.blogTitle}
                </p>
                <Link
                  href={blog.blogLink}
                  target="_blank"
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="https://medium.com/@adeoladeveloper"
              target="_blank"
              className="inline-block px-8 py-4 border-2 border-blue-600 hover:bg-blue-600/10 rounded-full font-semibold transition-all"
            >
              View All Articles on Medium
            </Link>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section id="opensource" className="min-h-screen bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Open Source Contributions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Associate Member | Wikimedia User Group Nigeria",
                description:
                  "Co-led a cross-functional team to plan and execute the 2025 Wikipedia Pages Wanting Photos Campaign, driving social awareness and project delivery.",
                links: [
                  { label: "Link to Wiki Pages", url: "https://meta.wikimedia.org/wiki/Wikipedia_Pages_Wanting_Photos_Contest_in_Nigeria_2025" },
                  { label: "Link to Diff Blog", url: "https://diff.wikimedia.org/2025/12/21/wikipedia-pages-wanting-photos-campaign-in-nigeria-2025/" },
                ],
              },
              {
                name: "Ubuntu Pro for WSL | Canonical",
                description:
                  "Contributed to Ubuntu Pro for WSL documentation by improving content clarity for developers, updating content on 40+ web pages, and enhancing style consistency.",
                links: [
                  { label: "Link to Merged PR", url: "https://github.com/canonical/open-documentation-academy/issues/283" },
                  { label: "Link to Merged PR", url: "https://github.com/canonical/ubuntu-pro-for-wsl/pull/1367" },
                ],
              },
            ].map((contribution, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-950/50 to-black border border-blue-900/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500"
              >
                <FaGithub className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold text-blue-400 mb-4">{contribution.name}</h3>
                <p className="text-gray-300 mb-6">{contribution.description}</p>
                <div className="flex flex-wrap gap-4">

                  {contribution.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.url}
                      target="_blank"
                      className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {link.label} →
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="min-h-screen bg-gradient-to-b from-black to-blue-950 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Have a project in mind or just want to chat about tech? I&apos;m always open to new
            opportunities and conversations.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <Link
              href="mailto:deolaabdulramon@gmail.com"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <FaRegEnvelope className="w-5 h-5" />
              Email Me
            </Link>
            <Link
              href="https://www.linkedin.com/in/adeolaabdulramon/"
              target="_blank"
              className="px-8 py-4 border-2 border-blue-600 hover:bg-blue-600/10 rounded-full font-semibold transition-all flex items-center gap-2"
            >
              <FaLinkedinIn className="w-5 h-5" />
              LinkedIn
            </Link>
          </div>

          {/* Social Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: FaGithub, label: "GitHub", link: "https://github.com/KrownWealth" },

              { icon: FaXTwitter, label: "Twitter", link: "https://x.com/deoladev" },
              {
                icon: FaMedium,
                label: "Medium",
                link: "https://medium.com/@adeoladeveloper",
              },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.link}
                target={social.label !== "Email" ? "_blank" : undefined}
                className="bg-gradient-to-br from-blue-950/50 to-black border border-blue-900/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500 flex flex-col items-center gap-3 group"
              >
                <social.icon className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-400">{social.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-blue-900/30 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">Copyright Adeola Abdulramon 2026 ©</p>
        </div>
      </footer>
    </div>
  );
}