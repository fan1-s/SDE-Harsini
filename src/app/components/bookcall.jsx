import Calendlylink from "../buttons/callbutton"; // Import the CalendlyLink component

export default function Book() {
    const url = "https://calendly.com/vivek-_ou/30min";
  
    return (
      <div className="bg-[#14213D] md:ml-0 min-h-screen flex items-center justify-center px-2 mt-20">
        <div className="flex flex-col md:flex-row justify-between gap-4 w-full max-w-6xl p-2"> {/* Adjusted max-width and added gap */}
          <div className="flex-1 mb-4 md:mb-0 p-6 rounded-lg shadow-lg" style={{ backgroundColor: '#14213D' }}>
            <h1 className="text-3xl mb-9 font-bold text-white"> Got anything in mind?</h1>
            <br></br>
            <div className="hidden md:block"> {/* Hide CalendlyLink on medium screens and up */}
              <h1 className="text-7xl font-bold text-white">Let&apos;s do it <br></br>together!</h1>
            </div>
            {/* <div className="mt-8 md:hidden w-full"> 
              <Calendlylink />
            </div> */}
          </div>
          <div className="justify-center items-center flex mt-8 w-full lg:w-1/2 sm:w-full md:justify-center md:w-full bg-white p-2 sm:p-6 rounded-lg shadow-lg" style={{ marginTop: '-100px' }}>
  <iframe
    src={url}
    width="100%" 
    height="600px"
    frameBorder="0"
  ></iframe>
</div>

        </div>
      </div>
    );
}
