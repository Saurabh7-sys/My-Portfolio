import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 mt-96">
      <h1 className="text-4xl md:text-5xl font-bold" data-aos="zoom-in">Projects</h1>
      
      <div className="max-w-xs md:max-w-md block mt-8" data-aos="zoom-in">
        <div className="projectCard bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <img
            src="/images/project1.png"
            alt="BM PET CARE"
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="p-4">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              BM PET CARE
            </h1>
            <p className="mt-2 text-sm md:text-base text-gray-600">
              BM Pet Care – Pet Services Website  
              <br />
              GitHub Link: 
              <a 
                href="https://github.com/Saurabh7-sys/BM_PET_CARE_PROJECT" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                GitHub Repository
              </a>
              <br />
              Vercel Link: 
              <a 
                href="https://bmpetcare.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                Live Website
              </a>
              <ul className="list-disc pl-5 mt-2 text-sm md:text-base text-gray-600">
                <li>Developed a responsive, mobile-first website using React and Tailwind CSS.</li>
                <li>Integrated seamless navigation with React Router for sections like Home Boarding, Dog Walking, and Booking.</li>
                <li>Implemented a user-friendly booking system with real-time data fetching and dynamic updates.</li>
                <li>Enhanced user engagement with Framer Motion animations.</li>
                <li>Deployed on Vercel with the source code available on GitHub.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
