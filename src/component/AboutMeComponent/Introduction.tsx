import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

const Introduction = () => {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="flex flex-col lg:flex-row">

        {/* LEFT: Profile */}
        <div className="flex-1 p-6 flex flex-col sm:flex-row gap-5 items-center sm:items-start">
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white ring-2 ring-gray-200 shadow-md">
              <img
                src="image/MyformalPic2.jpg"
                alt="Putthipong Chobngam"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute bottom-0.5 right-0.5 bg-green-500 w-3.5 h-3.5 rounded-full border-2 border-white" />
          </div>

          <div className="flex-1 text-center sm:text-left min-w-0">
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">
              Hello, I'm
            </p>
            <h3 className="text-xl lg:text-2xl font-extrabold text-gray-900 leading-tight">
              Putthipong Chobngam{" "}
              <span className="text-gray-400 font-semibold">(AUM)</span>
            </h3>
            <p className="text-sm font-semibold text-slate-600 mt-0.5">
              Full-Stack Developer · Software Engineer
            </p>
         
            <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
              <span
                className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200"
                style={{ color: '#4b5563' }}
              >
                <MdLocationOn className="text-red-500" /> Bangkok, Thailand
              </span>
              <a
                href="mailto:putthipong.chb@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all duration-200"
                style={{ color: '#4b5563' }}
              >
                <MdEmail className="text-blue-500" /> putthipong.chb@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Education */}
        <div
          id="education"
          className="lg:w-[38%] p-6 lg:border-l-2 border-t-2 lg:border-t-0 border-gray-100 bg-gray-50/60 flex gap-4 items-center"
        >
          <img
            src="/image/KMITL_Logo.png"
            alt="KMITL"
            className="h-16 w-auto object-contain flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <FaGraduationCap className="text-sm" /> Education
            </p>
            <h4 className="text-sm font-bold text-gray-900 leading-snug">
              B.Sc. Information Technology
            </h4>
            <span className="inline-block bg-gray-900 text-white text-[11px] px-2.5 py-0.5 rounded-full mt-1 font-semibold">
              Software Engineering
            </span>
            <p className="text-xs mt-2" style={{ color: '#6b7280' }}>
              KMITL · Graduated 2025 · GPAX 3.11
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Introduction;
