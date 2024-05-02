"use client"

import React, { useState } from 'react';
import Calendlylink from '../buttons/callbutton';
import Image from 'next/image';
import Link from 'next/link';

const WHATWEDO = ({ onClose }) => {
  // State variables to manage visibility of submenus
  const [showSolutions, setShowSolutions] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  // Function to toggle visibility of Solutions submenu
  const toggleSolutions = () => {
    setShowSolutions(!showSolutions);
    setShowIndustries(false); // Close Industries submenu if open
    setShowCaseStudy(false); // Close Case Study submenu if open
  };

  // Function to toggle visibility of Industries submenu
  const toggleIndustries = () => {
    setShowIndustries(!showIndustries);
    setShowSolutions(false); // Close Solutions submenu if open
    setShowCaseStudy(false); // Close Case Study submenu if open
  };

  // Function to toggle visibility of Case Study submenu
  const toggleCaseStudy = () => {
    setShowCaseStudy(!showCaseStudy);
    setShowSolutions(false); // Close Solutions submenu if open
    setShowIndustries(false); // Close Industries submenu if open
  };

  return (
    <div className="absolute" style={{
      position: 'relative',
      width: '1197px',
      height: '393px',
      right: '1100px',
      top: '120px',
      background: '#160C30'
    }}>
      {/* Solutions button */}
      <button className="absolute" style={{
        position: 'absolute',
        left: '44px',
        top: '45px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '19px',
        color: '#FFFFFF',
        background: 'none',
        border: 'none',
        cursor: 'pointer'
      }} onClick={toggleSolutions}>
        Solutions
      </button>

      {/* Industries button */}
      <button className="absolute" style={{
        position: 'absolute',
        left: '44px',
        top: '112px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '19px',
        color: '#FFFFFF',
        background: 'none',
        border: 'none',
        cursor: 'pointer'
      }} onClick={toggleIndustries}>
        Industries
      </button>

      {/* Case Study button */}
      <button className="absolute" style={{
        position: 'absolute',
        left: '42px',
        top: '179px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '19px',
        color: '#FFFFFF',
        background: 'none',
        border: 'none',
        cursor: 'pointer'
      }} onClick={toggleCaseStudy}>
        Case Study
      </button>

      {/* Content area */}
      <div className="absolute" style={{
        position: 'absolute',
        width: '264px',
        height: '42px',
        left: '29px',
        top: '34px',
        background: 'rgba(217, 217, 217, 0.15)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px'
      }}>
        {/* Render Solutions content if showSolutions is true */}
        {showSolutions && (
          <div>
            {/* Content for Solutions */}
            {/* You can add your content here */}
            Solutions content
          </div>
        )}

        {/* Render Industries content if showIndustries is true */}
        {showIndustries && (
          <div>
            {/* Content for Industries */}
            {/* You can add your content here */}
            Industries content
          </div>
        )}

        {/* Render Case Study content if showCaseStudy is true */}
        {showCaseStudy && (
          <div>
            {/* Content for Case Study */}
            {/* You can add your content here */}
            Case Study content
          </div>
        )}
      </div>

      {/* Other code */}
      <button className="absolute top-0 right-0" onClick={onClose}>X</button>
    </div>

  );
};

export default function Navbar() {
  const [showWhatWeDo, setShowWhatWeDo] = useState(false);

  const toggleWhatWeDo = () => {
    setShowWhatWeDo(!showWhatWeDo);
  };
    
    const [showIndustries, setShowIndustries] = useState(false);
    const [showAboutUs, setShowAboutUs] = useState(false);
    const [showSolutions, setShowSolutions] = useState(false);
    const [showAIResources, setShowAIResources] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleIndustries = () => {
        setShowIndustries(!showIndustries);
        setShowAboutUs(false); // Close About Us section
        setShowSolutions(false); // Close Solutions section
        setShowAIResources(false); // Close AI Resources section
        setSelectedOption('Industries');
    };

    const toggleAboutUs = () => {
        if (!showAboutUs) {
            setShowAboutUs(true);
            setShowIndustries(false); // Close Industries section
            setShowSolutions(false); // Close Solutions section
            setShowAIResources(false); // Close AI Resources section
            setSelectedOption('About Us');
        }
    };
    


    return (
<div>
<div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
  <div className="absolutetext" style={{
      position: 'absolute',
      width: '230px',
      height: '22px',
      top: '10px', // Adjusted top position
      left: '52%', // Center horizontally
      transform: 'translateX(-50%)', // Center horizontally
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '19.36px',
      textAlign: 'center', // Center text horizontally
      background: 'none',
      color: '#FFFFFF'
  }}>
      <p className="m-0">
          <span style={{
              fontFamily: 'Inter',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '19.36px',
              textAlign: 'center', // Center text horizontally
          }}>{`AI Calling Agent - `}</span>
          <span style={{
              fontFamily: 'Inter',
              fontSize: '16px',
              fontWeight: '800',
              lineHeight: '19.36px',
              textAlign: 'center', // Center text horizontally
          }} className="font-extrabold font-inter">Learn more</span>
      </p>
  </div>

  {/* Horizontal line */}
  <div className="absolute" style={{ position: 'absolute', width: '938px', height: '0px', left: '271.5px', top: '60px', border: '0.5px solid #464646' }}></div>

  {/* Company Logo */}
<div className="absolute" style={{ position: 'absolute', width: '15px', height: '50px', top: '73px', left: '251px', gap: '0px', opacity: '0px' }}>
  <a href="/" className="absolute top-[20px] left-[0.1%] transform[-translate-x-1/2] flex flex-col items-center justify-center">
    <div className="flex-shrink-0">
      <img src="https://s3-alpha-sig.figma.com/img/80eb/5bf1/16264b04f29b5032fae55faf193aeecb?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fk9iUoWqnmRl8Wqf70EDmh8sio2rRdXdEScuNPz4bCva~7bhxfLPFcxDRIxZb1H4UaKYAR2ruKzIH1aeARQGwply7~ADWxFENGJ0sz5pka9J0urGWcsPsGgskJ890PzFYbxXAwBVSvywcQF08Xv4CdTXva5cn4V3ZKj87y7Io2Dn2jbmYxbbyYDRZgjA0VjqSS3qNEGL96AxR9zizYsC4z2mw2hHdvkgX8rMOwUh0QFU7odQfmb814fYCYQuPUSgaSkXKrkEdUYitTTmw0O5pwcVF4mRo0kT-0h-GMM9z0dbc4SfHQYodHtBmv6urJ3tKBd40zpy4TqMqExXaYwpeg__" alt="Company logo" className="h-14 object-contain" width={60} height={60} style={{ width: '55px', height: '50px' }} />
    </div>
    <div className="text-xs font-extrabold ml-2 text-white" style={{ width: '45px', height: '15px', top: '123px', left: '256px', gap: '0px', opacity: '0px', fontFamily: 'Inter', fontSize: '12px', fontWeight: '800', lineHeight: '14.52px', textAlign: 'left' }}>PG-AGI</div>
  </a>
</div>

  {/* Menu items */}
  <div className="absolute top-[17px] left-[640px] transform[-translate-x-1/2]">
  <div>
      {/* Button */}
      <div
        className="absolute"
        style={{
          position: 'absolute',
          width: '79px',
          height: '17px',
          left: 'calc(50% - 79px/2 - 131px)',
          top: '107px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '17px',
          color: '#FFFFFF',
          cursor: 'pointer' // Add cursor pointer
        }}
        onClick={toggleWhatWeDo} // Toggle visibility of WHATWEDO component
      >
        What we do
      </div>

      {/* Render WHATWEDO component if showWhatWeDo is true */}
      {showWhatWeDo && (
        <div className="absolute top-[17px] left-[640px] transform[-translate-x-1/2]">
          <WHATWEDO onClose={toggleWhatWeDo} />
        </div>
      )}
    </div>

    <div className="absolute" style={{ position: 'absolute', width: '79px', height: '2px', left: 'calc(50% - 79px/2 - 137px)', top: '126px', background: 'linear-gradient(90deg, #000AFF 0%, #141414 100%)', borderRadius: '10px' }} />

    <div className="flex items-center justify-center gap-2" style={{ position: 'absolute', width: '95px', height: '17px', left: 'calc(50% - 95px/2 + 13px)', top: '107px', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', fontSize: '14px', lineHeight: '17px', color: '#FFFFFF' }}>
      <div className="text-xs font-extrabold">What we think</div>
    </div>

    <div className="flex items-center justify-center gap-2" style={{ position: 'absolute', width: '79px', height: '17px', left: 'calc(50% - 79px/2 + 157px)', top: '107px', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', fontSize: '14px', lineHeight: '17px', color: '#FFFFFF' }}>
      <div className="text-xs font-extrabold">Who we are</div>
    </div>
    <div>
  <div>
  {/* Contact button frame */}
  <div className="absolutebutton" style={{
      boxSizing: 'border-box',
      position: 'relative',
      width: '116px',
      height: '35px',
      top: '98px',
      left: '340%',
      
      transform: 'translateX(-50%)',
      padding: '9px 21px 9px 22px',
      gap: '0px',
      borderRadius: '10px 10px 10px 10px',
      border: '1px solid #3237C0',
      opacity: '0px',
      animationDuration: '0ms'
  }}>
    <button className="absolute  w-full h-full" style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'none',
        border: 'none',
        cursor: 'pointer'
    }}>
      <div className="absolute" style={{
          position: 'absolute',
          width: '73px',
          height: '17px',
          right: '39px',
          top: '1px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '17px',
          color: '#FFFFFF',
          transition: 'background-color 0.3s'
      }}>
        Contact Us
      </div>
    </button>
  </div>

  {/* Style */}
  <style>{`
    .absolutebutton:hover {
      background-color: #3237C0;
    }
  `}</style>
</div>
</div>
</div>
</div>
</div>
    );
}