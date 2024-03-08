import React from "react";

const Navbar2 = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Hamburger menu */}
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <a href="#" className="font-bold text-2xl text-gray-800">
                Codegree
              </a>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-800 hover:text-gray-900">
                  Mentor
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-900">
                  Belajar Sekarang
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-900">
                  Course
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-900">
                  Subscription
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Notifikasi dan pengaturan */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
