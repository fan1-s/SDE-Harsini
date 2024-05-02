import React from 'react';
import Navbar from '@/app/components/navbar'; // Adjust the import path according to your file structure
import Footer from '@/app/components/footer'; // Adjust the import path according to your file structure
import '../src/app/globals.css';
import Image from 'next/image';

const projects = [
//   {
//     img: '/images/project1.png',
//     title: 'TalentHarbor AI',
//     description:
//       'An AI-driven recruitment platform that automates the entire hiring process, from sourcing to initial screenings, making recruitment efficient and user-friendly.',
//   },
//   {
//     img: '/images/project2.png',
//     title: 'TutorGPT',
//     description:
//       'An AI-powered educational assistant that supports personalized learning by providing instant access to information across a vast library of educational materials.',
//   },
  {
    img: '/images/project3.png',
    title:'VoiceShop Communicator',
    description:
      'A voice-to-voice AI communication tool for Shopify stores, enabling real-time customer support and product inquiries through vocal interactions.',
  },
  {
    img: '/images/project4.png',
    title: 'Interview Master AI',
    description:
      'An AI model capable of conducting real-time interviews on any topic, offering a realistic simulation of interview scenarios for practice and preparation.',
  },
  {
    img: '/images/project6.png',
    title: 'AutoCaptioner Plus',
    description:
      'An automation tool for content creators that generates captions for photos and videos and posts them directly to social media, streamlining content management.',
  },
  {
    img: '/images/project5.png',
    title: 'MetaMarket AI',
    description:
      'A metaverse-specific AI model that provides marketing and e-commerce strategies, helping businesses to understand and scale their operations in virtual environments.',
  },
];

const Projects = () => {
  return (
    <>
      <Navbar />
       <div className="bg-[#14213D] text-white text-center py-20">
        <h2 className="text-3xl font-bold">Discover our work</h2>
        <p className="text-sm mt-2">Elevate your success with tailored solutions crafted to exceed expectations.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {projects.map((project, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="rounded-lg shadow-lg bg-black text-white flex flex-col" style={{ height: '600px' }}>
              <div className="flex-shrink-0">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={400}
                  height={300} // Adjust the height to fit the card
                  className="w-full object-cover rounded-t-lg"
                  layout="responsive"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="font-bold text-xl mb-2">{project.title}</div>
                  <p className="text-base">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Projects;
