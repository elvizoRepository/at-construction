import React from "react";
import OurProjects from "@/components/OurProjects";
import Link from "next/link"; // Import the Link component from Next.js

function Page() {
  return (
    <div className="relative min-h-screen">
      {/* Our Projects Component (Background Content) */}
      <OurProjects />

      {/* Fixed Overlay */}
      <div className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center text-white text-center z-50">
        {/* GIF Animation */}
        <img
          src="/giphy.gif" // Ensure the GIF is inside the /public folder
          alt="Updating Animation"
          className="w-48 h-48"
        />

        {/* Overlay Text */}
        <p className="text-xl font-semibold mt-4">
          Developers are currently updating this page. <br />
          Check back later!
        </p>

        {/* Home Page Link */}
        <Link href="/" passHref>
          <button className="mt-6 border py-2 px-4 bg-black text-white hover:bg-gray-400">
            Go to Home Page
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
