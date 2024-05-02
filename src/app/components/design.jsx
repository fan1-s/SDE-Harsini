"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const cardWidth = 301; // Width of each card
const gapBetweenCards = 20; // Adjust the gap between cards as needed
    
const Design = () => {
  return (
    <div className=" bg p-4 sm:p-8 " style={{ height: '950px' }}>
    <div className="flex justify-center">
      
      <div className="w-full lg:w-2/5">
        
        <h2 className="text-gray-600 whitespace-nowrap" style={{ position: 'absolute', width: '385px', height: '58px', left: '526px', top: '1066px', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '500', fontSize: '48px', lineHeight: '58px', textAlign: 'center', color: '#FFFFFF' }}>What’s Trending</h2>


          {/* First card */}
          <div className="absolute" style={{ position: 'absolute', width: '301px', height: '454px', top: '1161px', left: `${119}px`, gap: '0px', borderRadius: '10px', opacity: '0px', background: 'linear-gradient(173.88deg, rgba(0, 0, 0, 0.74) 15.76%, rgba(145, 144, 144, 0) 95.5%)', animationDuration: '0ms', border: '1px solid #FFFFFF' }}>


  <h3 className="text-gray-600" style={{ position: 'absolute', width: '119px', height: '22px', left: '51px', top: '20px', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '600', fontSize: '18px', lineHeight: '22px', color: '#828282' }}>CASE STUDY</h3>
  <p className="text-white" style={{ position: 'absolute', width: '196px', height: '50px', left: '51px', top: '60px', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '500', fontSize: '15px', lineHeight: '18px', color: '#FFFFFF' }}>Revolutionizing Talent Hiring Practices</p>
</div>


          {/* Second card */}
          <div className="absolute" style={{ position: 'absolute', width: '301px', height: '454px', top: '1161px', left: `${119 + cardWidth + gapBetweenCards}px`, gap: '0px', borderRadius: '10px', opacity: '0px', background: 'linear-gradient(173.88deg, rgba(0, 0, 0, 0.74) 15.76%, rgba(145, 144, 144, 0) 95.5%)', animationDuration: '0ms', border: '1px solid #FFFFFF' }}>


  <h3 className="text-gray-600" style={{ position: 'absolute', width: '119px', height: '22px', left: '51px', top: '20px', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '600', fontSize: '18px', lineHeight: '22px', color: '#828282' }}>BLOGS</h3>
  <p className="text-white" style={{ position: 'absolute', width: '196px', height: '50px', left: '51px', top: '60px', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '500', fontSize: '15px', lineHeight: '18px', color: '#FFFFFF' }}>Prompt Engineering vs Prompt Tuning: A Detailed Explanation</p>

</div>
<div className="absolute" style={{ position: 'absolute', width: '301px', height: '454px', top: '1161px', left: `${119 + (cardWidth + gapBetweenCards) * 2}px`, gap: '0px', borderRadius: '10px', opacity: '0px', background: 'linear-gradient(173.88deg, rgba(0, 0, 0, 0.74) 15.76%, rgba(145, 144, 144, 0) 95.5%)', animationDuration: '0ms', border: '1px solid #FFFFFF' }}>
 
  <h3 className="text-gray-600" style={{ position: 'absolute', width: '119px', height: '22px', left: '51px', top: '20px', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '600', fontSize: '18px', lineHeight: '22px', color: '#828282' }}>AI NEWS</h3>
  <p className="text-white" style={{ position: 'absolute', width: '196px', height: '50px', left: '51px', top: '60px', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '500', fontSize: '15px', lineHeight: '18px', color: '#FFFFFF' }}>META Unveils Groundbreaking Enhancements to Its AI with Llama 3 Release</p>

</div>
<div className="absolute" style={{ position: 'absolute', width: '301px', height: '454px', top: '1161px', left: `${119 + (cardWidth + gapBetweenCards) * 3}px`, gap: '0px', borderRadius: '10px', opacity: '0px', background: 'linear-gradient(173.88deg, rgba(0, 0, 0, 0.74) 15.76%, rgba(145, 144, 144, 0) 95.5%)', animationDuration: '0ms', border: '1px solid #FFFFFF' }}>


  <h3 className="text-gray-600" style={{ position: 'absolute', width: '119px', height: '22px', left: '51px', top: '20px', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '600', fontSize: '18px', lineHeight: '22px', color: '#828282' }}>TRENDS</h3>
  <p className="text-white" style={{ position: 'absolute', width: '196px', height: '50px', left: '51px', top: '60px', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '500', fontSize: '15px', lineHeight: '18px', color: '#FFFFFF' }}>Prompt Engineering vs Prompt Tuning: A Detailed Explanation
</p>

 
  </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
