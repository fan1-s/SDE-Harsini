import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="h-2/5 ml-10 mr-10 mt-10">
        <Image
          src="images/aboutus.png"
          alt="Image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex-1 p-8 text-white ">

        <p className="text-md text-center mb-5">
        Human history is a tapestry woven with the threads of capabilities and tools. Each era ushers in a rare new capability, often stumbled upon rather than deliberately crafted. From the mastery of fire in our primitive past to the harnessing of electricity in the 1800s, each discovery has been a leap forward. The 1900s presented us with the marvel of computing, and now, in the 21st century, we stand on the brink of the artificial intelligence revolution.
        </p>

        <p className="text-md text-center mb-5">Tools, the inventions through which we harness these capabilities, evolve on a much brisker timescale. They are the means by which we engage with our newfound powers, designed with attention to detail and craftsmanship, offering enjoyment to their users while expanding and nurturing the capabilities they&apos;re based on, ensuring their practical application in the real world.</p>

        <p className="text-md text-center mb-5">As toolmakers, we are at the forefront of this endeavour, channelling the potential of AI into tangible, beneficial forms that aim to enhance the world around us. In this spirit, we introduce Toingg, our foray into reimagining the way we communicate. Toingg is not just a product; it&apos;s a vision for an AI-powered calling agent designed to make connections more meaningful, efficient, and enjoyable. While still in its infancy, Toingg represents our commitment to pushing the boundaries of productivity and pleasure in technological interaction. Our success with Toingg could redefine the allocation of human creativity and intellect, tackling ever-greater challenges.</p>

        <p className='text-md text-center '>We are on the cusp of something transformative, fuelled by excitement and a shared vision for the future. If this journey resonates with you, we welcome you to join us. Reach out at hiring@pgagi.in, and let&apos;s explore the possibilities together.<br></br>With anticipation <br></br> Vivek, Sanjay, Shibajyoti, Parikshit, and the entire PGAGI team</p>
        
      </div>
    </div>
  );
};

export default About;
