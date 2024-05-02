import React from "react";
import { fit } from "sharp";

const ServicesData = [
  {
    id: 1,
    span: 'Phase 1',
    img: 'images/img1.png',
    name: "Discovery and Feasibility",
    description:
      "Assessing AI's potential to innovate and validating the initial concept with a POC."
  },
  {
    id: 2,
    span: 'Phase 2',
    img: 'images/img2.png',
    name: "Data Preparation and Research",
    description:
      "Curating and refining data sets to lay the groundwork for tailored AI solutions.",
  },
  {
    id: 3,
    span: 'Phase 3',
    img: 'images/img3.png',
    name: "Model Development and Strategy",
    description:
      "Crafting and training bespoke AI models, strategizing for integration and scalability.",
  },
  {
    id: 4,
    span: 'Phase 4',
    img: 'images/img4.png',
    name: "MVP Creation",
    description:
      "Building a functional Minimum Viable Product that embodies the AI solution for user feedback.",
  },
  {
    id: 5,
    span: 'Phase 5',
    img: 'images/img5.png',
    name: "Quality Assurance",
    description:
      "Testing and refining the AI MVP, prioritizing performance, and user-centric enhancements.",
  },
  {
    id: 6,
    span: 'Phase 6',
    img: 'images/img6.png',
    name: "Deployment and Evaluation",
    description:
      "Launching the AI product with ongoing evaluation and optimization for peak performance.",
  },
  {
    id: 7,
    span: 'Phase 7',
    img: 'images/img7.png',
    name: "Continuous Improvement",
    description:
      "Iterating on AI solutions based on feedback and evolving needs for sustained success.",
  },
];

const Services = () => {
  
  return (
    <>
      <span id="services"></span>
      <div className="py-10 relative "style={{ height: '5050px' }}>

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
        {/* Card for the text */}
        
        <div
  className="card"
  style={{
    position: 'absolute',
    width: '1065px',
    height: '637px',
    left: '187px',
    top: '0.1px',
    backgroundColor: 'rgba(255, 255, 255, 0.030)',
    borderRadius: '20px',
    boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)', // Optional: Add shadow for depth
    overflow: 'hidden', // Optional: Hide overflow content
  }}
>
<div
    className="picture-container"
    style={{
      position: 'absolute',
      width: '366px',
      height: '373px',
      left: '350px',
      top: '132px',
      backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/ef82/1c19/04738357cafa3980e87eaf9c412599e5?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o6-hxrm3dC9ytRY1bC5BRnJzO5LNWSt-gF5Jjgc5EZL4eqLdAuhUyaIYq5sBsdUmU7nueVNKDQbFeGCh9lTXjnM~akDdv6m7lkllUTo~~Gc2TWkq86qs8FzTOd5MuQGGO6q3w7peWUkQA-FR6kkxGNKdFXyJS7pLyAi5K3heMJOldwzkiIfWuv0RXc~g7Uhd-QNq~BKg4N9Fpd8U2woMcBAb~fzORBew5cpocn1hs4SWlsLy40ulCh73zds6O9X0VGSTBHdoo0GEDeUfX6jN8LVFu~z7WwIKHIUbAD8vuggDL~jOKKxfcT3rdit0meAYCsPSLRiiptwXzEikQe6Zhg__")',
      backgroundSize: "cover",
      opacity: 0.3,
      zIndex: '1',
    }}
  ></div>
  <div
    className="text-container"
    style={{
      width: '760px',
      height: '140px',
      left: 'calc(50% - 760px/2 + 0.5px)',
      top: '248px',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '58px',
      lineHeight: '70px',
      textAlign: 'center',
      background: 'linear-gradient(90deg, #666CFD 0%, #FFFFFF 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textFillColor: 'transparent',
      position: 'absolute', 
      zIndex: '2'// Position the text container absolutely
    }}
  >
    Here&apos;s How We Make Our Products Grow
  </div>
</div>


{/* Six Additional Cards */}
{/* Six Additional Cards */}
{Array.from({ length: 6 }).map((_, index) => (
    <div
      key={index}
      className="card"
      style={{
        position: 'absolute',
        width: '1065px',
        height: '637px',
        left: '187px',
        top: `${677 * (index + 1) + 0.1}px`,
        backgroundColor: 'rgba(255, 255, 255, 0.030)',
        borderRadius: '20px',
        boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
      }}
    >
      <div
        className="picture-container"
        style={{
          position: 'absolute',
          width: '366px',
          height: '373px',
          left: '350px',
          top: '132px',
          backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/ef82/1c19/04738357cafa3980e87eaf9c412599e5?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o6-hxrm3dC9ytRY1bC5BRnJzO5LNWSt-gF5Jjgc5EZL4eqLdAuhUyaIYq5sBsdUmU7nueVNKDQbFeGCh9lTXjnM~akDdv6m7lkllUTo~~Gc2TWkq86qs8FzTOd5MuQGGO6q3w7peWUkQA-FR6kkxGNKdFXyJS7pLyAi5K3heMJOldwzkiIfWuv0RXc~g7Uhd-QNq~BKg4N9Fpd8U2woMcBAb~fzORBew5cpocn1hs4SWlsLy40ulCh73zds6O9X0VGSTBHdoo0GEDeUfX6jN8LVFu~z7WwIKHIUbAD8vuggDL~jOKKxfcT3rdit0meAYCsPSLRiiptwXzEikQe6Zhg__")',
      backgroundSize: "cover",
          opacity: 0.3,
          zIndex: '1',
        }}
      ></div>
       <div
        className="phase-text"
        style={{
          position: 'absolute',
          width: '172px',
          height: '61px',
          left: '748px',
          top: '109px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 800,
          fontSize: '50px',
          lineHeight: '61px',
          textAlign: 'center',
          background: 'linear-gradient(94.65deg, #A0A3F6 1.31%, #FFFFFF 53.76%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          zIndex: '2',
        }}
      >
        PHASE {index +1}
      </div>
      <div
        className="number-text"
        style={{
          position: 'absolute',
          width: '100px',
          height: '242px',
          left: '871px',
          top: '8px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 800,
          fontSize: '200px',
          lineHeight: '242px',
          textAlign: 'center',
          color: 'rgba(255, 255, 255, 0.06)',
          zIndex: '2',
        }}
      >
        {index + 1}
      </div>
      <div
        className="name-text"
        style={{
          position: 'absolute',
          width: '488px',
          height: '58px',
          left: '390px',
          top: '270px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '48px',
          lineHeight: '58px',
          textAlign: 'center',
          color: '#FFFFFF',
          zIndex: '2',
        }}
      >
        {ServicesData[index + 1].name}
      </div>
      <div
        className="description-text"
        style={{
          position: 'absolute',
          width: '552px',
          height: '44px',
          left: '390px',
          top: '337px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '22px',
          color: '#FFFFFF',
          zIndex: '2',
        }}
      >
        {ServicesData[index + 1].description}
      </div>
    </div>
  ))}

        {/* Cards for each phase */}
        <div
          className="relative"
          style={{
            width: '1065px',
            height: '637px',
            top: '1971px',
            left: '187px',
            gap: '0px',
            borderRadius: '20px 0px 0px 0px',
            opacity: '0px',
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
              
              >
                <div className="h-[240px] w-full flex items-center justify-center overflow-hidden">
                 
                </div>
             
                </div>
          
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
