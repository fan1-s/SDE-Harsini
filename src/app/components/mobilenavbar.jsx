import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Mobilenavbar = ({ closeNavbar }) => {
    return (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-[#14213D] text-white z-50">
            <div className="bg-#14213D text-white mt-8 ml-10">
                <h2 className="text-lg font-semibold text-gray-500 mb-4">AI services</h2>
                <p className="text-xl my-3 font-bold">Research</p>
                <p className="text-xl my-3 font-bold">Unlimited Subscription</p>
                <p className="text-xl my-3 font-bold">AI Review</p>
            </div>
            <div className="flex flex-col ml-10 h-full">
                <div className="bg-#14213D text-white">
                    <h2 className="text-lg font-semibold text-gray-500 mb-4">Industries</h2>
                    <p className="text-xl my-3 font-bold">Chemical</p>
                    <p className="text-xl my-3 font-bold">SaaS</p>
                    <p className="text-xl my-3 font-bold">Edtech</p>
                    <p className="text-xl my-3 font-bold">Health</p>
                    <p className="text-xl my-3 font-bold">Commerce</p>
                    <p className="text-xl my-3 font-bold">Security</p>
                    <p className="text-xl my-3 font-bold">Blockchain</p>
                </div>
                <div className="bg-#14213D text-white mt-8">
    <h2 className="text-lg font-semibold text-gray-500 mb-4">About Us</h2>
    <Link href="/aboutus">
        <p className="text-xl text-white font-bold">Our core principles and beliefs</p>
    </Link>
</div>
<button
    className="absolute right-0 top-0 bg-transparent p-7 rounded-lg focus:outline-none"
    onClick={closeNavbar}
  >
    <Image src="/images/x-button.png" alt="Close Navbar" width={15} height={15} />
  </button>
                <button className="mt-auto py-4 bg-white text-[#14213D] text-lg font-semibold text-center w-full">Contact Us</button>
            </div>
        </div>
    );
}

export default Mobilenavbar;
