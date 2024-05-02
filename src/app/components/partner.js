import React from 'react';
import Image from 'next/image';

const PartnerCompanies = () => {
  // Assuming you have SVG logos stored in your project under the `assets/logos` directory
  const companyLogos = [
    "/images/ais.svg", // Replace with actual path to Samsung logo SVG
    "/images/hx.svg",
    "/images/aixl.svg",
    "/images/ciek.svg", // Replace with actual path to T-Mobile logo SVG
    "/images/social.svg", // Replace with actual path to Kinteract logo SVG
    // Replace with actual path to Thinkpricing logo SVG
  ];

  return (
    <div className="bg pb-8 mt-10 ">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-gray-600 whitespace-nowrap" style={{ position: 'absolute', width: '261px', height: '22px', left: '580px', top: '752px', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '600', fontSize: '18px', lineHeight: '22px', color: '#FFFFFF' }}>Partnered with Innovators like</h2>
          <div className="flex justify-center items-center space-x-20 mt-4">
            {companyLogos.map((logo, index) => (
              <img key={index} src={logo} alt="Company logo" className="h-16 object-contain" />
            ))}
          </div>
        

  

        </div>
      </div>
    </div>
  );
};

export default PartnerCompanies;
