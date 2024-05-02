'use client'
import { TypeAnimation } from "react-type-animation"
import Mobilenavbar from "./mobilenavbar"; // Import the Mobilenavbar component
import Calendlylink from "../buttons/callbutton"; // Import the CalendlyLink component
import Image from "next/image";
import heroImage from "../../../public/images/hero-image.png";
import React, { useState } from 'react';
import Navbar from './navbar';

const Mysvg = () => {
    return (
        
        <svg
            fill="#000000"
            viewBox="0 0 24 24"
            id="research"
            data-name="Flat Line"
            xmlns="http://www.w3.org/2000/svg"
            className="icon flat-line mx-1 -ml-1"
            width={30}
            height={25}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <circle id="secondary" cx="8" cy="10" r="3" style={{ fill: "#2ca9bc", strokeWidth: 2 }}></circle>
                <path
                    id="primary"
                    d="M17,12v5m-4,0V15M3,15l2.83-2.83M8,7a3,3,0,1,0,3,3A3,3,0,0,0,8,7Z"
                    style={{
                        fill: "none",
                        stroke: "#000000",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                    }}
                ></path>
                <path
                    id="primary-2"
                    data-name="primary"
                    d="M8,3H20a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V17"
                    style={{
                        fill: "none",
                        stroke: "#000000",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                    }}
                ></path>
            </g>
        </svg>
    );
};






export default function HeroSection() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    return (
        <div className="container max-w-screen-xl mx-auto px-4 bg-black ">
            {/* Heading and Navbar button */}
            <Navbar isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />
            <div className="flex justify-between items-center py-4 relative">
    <div className="font-bold text-xl md:text-xl ">PG-AGI</div>
    <button
        className="md:hidden bg-transparent p-2 rounded-lg focus:outline-none "
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
    >
        <Image src="/images/menu.png" alt="Menu" width={30} height={30} />
    </button>
    <div className="md:hidden absolute bottom-0 left-0 w-full h-px bg-gray-200"></div> {/* Horizontal line */}
</div>
 {/* Color effect in eclipse shape */}
 <div
        className="absolute"
        style={{
            position: 'absolute',
            width: '344px',
            height: '350px',
            left: '43px',
            top: '126px',
            background: '#8836F1',
            filter: 'blur(250px)',
            borderRadius: '50%',
           // Ensure it's behind other content
          }}
          ></div>
            <div
        className="absolute"
        style={{
            position: 'absolute',
            width: '258px',
            height: '212px',
            left: '682px',
            top: '353px',
            background: '#F13684',
            filter: 'blur(250px)',
            borderRadius: '50%',
          }}
          ></div>
           <div
        className="absolute"
        style={{
            position: 'absolute',
            width: '326px',
            height: '317px',
            left: '931px',
            top: '395px',
            background: '#36E6F1',
            filter: 'blur(250px)',
            borderRadius: '50%',
             // Ensure it's behind other content 
        }}
        ></div>
            <div className="flex flex-col md:flex-row justify-between space-x-2">
                <div className="text-center md:text-left mt-5 md:w-[55%] md:ml-8 lg:ml-12 xl:ml-16"style={{ height: '650px' }}>
                    {/* Content */}
                    <div
    className="absolute"
    style={{
        position: 'absolute',
        width: '244px',
        height: '22px',
        left: '601px',
        top: '342px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '18px',
        lineHeight: '22px',
        background: 'linear-gradient(90deg, #868AF7 0%, #FFFFFF 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
    }}
>
    Start your AI journey with us
</div>
<div>
    <div
        className="absolute"
        style={{
            position: 'absolute',
            width: '745px',
            height: '110px',
            left: '349px',
            top: '382px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '48px',
            lineHeight: '58px',
            textAlign: 'center',
            color: '#FFFFFF',
        }}
    >
        Your Go-To AI Consultancy
    </div>
    <div
        className="absolute"
        style={{
            position: 'absolute',
            width: '745px',
            height: '110px',
            left: '349px',
            top: '450px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '48px',
            lineHeight: '58px',
            textAlign: 'center',
            background: 'linear-gradient(90deg, #000AFF 0%, #000699 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
        }}
    >
        for AI Solutions
    </div>
</div>

                    <div style={{ position: 'absolute', width: '244px', height: '22px', top: '342px', left: '601px', gap: '0px', opacity: '0px' }}>
 
</div>
<div className="font-extrabold text-white-900 text-2xl md:text-4xl lg:text-4xl xl:text-6xl leading-normal mb-8 mygrad" style={{ marginTop: '120px' }}>
  Your Go-To <br />
  AI Consultancy
</div>
{/* Button */}
<div
    className="relative"
    style={{
        position: 'absolute',
        width: '118px',
        height: '35px',
        left: '578px',
        top: '536px',
    }}
>
    <button
        className="absolute w-full h-full bg-primary border border-primary text-white font-medium rounded-lg"
        style={{
            borderRadius: '10px',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            transition: 'border-color 0.3s, background-color 0.3s', // Smooth transition for color change
        }}
        onMouseOver={(e) => {
            e.target.style.borderColor = '#3237C0'; // Change border color on hover
            e.target.style.backgroundColor = '#3237C0'; // Change background color on hover
        }}
        onMouseOut={(e) => {
            e.target.style.borderColor = 'primary'; // Reset border color when mouse leaves
            e.target.style.backgroundColor = 'primary'; // Reset background color when mouse leaves
        }}
    >
        Book a call
    </button>
</div>

<div
        className="relative"
        style={{
            position: 'absolute',
            width: '150px', // Adjust width as needed
            height: '35px', // Same height as the Book a call button
            left: '706px', // Adjust the position to align with the Book a call button
            top: '536px', // Same top position as the Book a call button
        }}
    >
        <button
            className="absolute w-full h-full bg-primary border border-primary text-white font-medium rounded-lg"
            style={{
                borderRadius: '10px',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                transition: 'border-color 0.3s, background-color 0.3s', // Smooth transition for color change
            }}
            onMouseOver={(e) => {
                e.target.style.borderColor = '#3237C0'; // Change border color on hover
                e.target.style.backgroundColor = '#3237C0'; // Change background color on hover
            }}
            onMouseOut={(e) => {
                e.target.style.borderColor = 'primary'; // Reset border color when mouse leaves
                e.target.style.backgroundColor = 'primary'; // Reset background color when mouse leaves
            }}
        >
            See case studies
        </button>
        
    </div>
    {/* Rectangle with "Contact us" text */}



                   
                    <div className="w-full flex flex-col gap-4 md:flex-row py-0 px-6 md:justify-start justify-between items-center mt-0 lg:gap-6 md:gap-6">
    <div className="w-full md:w-auto ">
       
    </div>
    
</div>
                </div>
                
            </div>

            {/* Mobile Navbar */}
            {isNavbarOpen && <Mobilenavbar closeNavbar={() => setIsNavbarOpen(false)} />}
        </div>
    );
}
