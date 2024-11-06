import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="About Adeola Abdulramon" />
      </Head>
      <section className="px-8 md:px-12 pt-8 md:min-h-screen md:h-screen md:overflow-hidden bg-white">
        <div className="flex flex-col md:flex-row items-end gap-10">
          <div className="w-full md:w-2/5">
            <Image
              src="/assets/images/adeola-removebg.png"
              alt="Adeola Abdulramon"
              layout="responsive"
              width={1000}
              height={400}
              className="rounded-md transform scale-x-[-1]"
            />
          </div>
          <div className="w-full md:w-3/5 leading-10">
            <h1 className="text-4xl lg:text-6xl font-bold md:pb-8 pt-2 md:pt-0">Hi, I'm Adeola</h1>
            <p>My name is Adeola Abdulramon. I am a Frontend Engineer who loves the Web and Emerging Technologies. </p>
            <p>
              I currently work as an intermediate Frontend Engineer where I work at the intersection of PWA and E-commerce Platforms. I have a Bachelor of Science in Education (Physics) from the Obafemi Awolowo University Affiliate Adeyemi College of Education, Ondo, Nigeria.
            </p>
            <p>I have a blog on medium, where I post content on Frontend Engineering, and Frontend Development.</p>
            <p>My non-tech passion includes entrepreneurship and teaching. I believe everyone should be given a chance at basic education.</p>
            <p>In tech, I am a huge fan of the web and emerging technologies. At a tech event, you'd probably find me volunteering, networking, and meeting new people.</p>
            <p>I am also passionate about the developer community and improving Nigeria’s e-commerce ecosystem with technology.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
