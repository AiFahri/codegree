import { useState } from 'react'

const header = () =>{
    return (
      <>
      <nav className="fixed top-0 left-0 z-20 w-full flex justify-center items-center p-4 bg-purple-500 shadow-md" >
      <div className="w-screen mx-auto px-4 py-2 flex justify-between items-center">
        
        <div className="flex items-center">
          <img action="#"src="../src/assets/Group 24.svg" alt="Logo" className="h-8 w-50 ml-2" />
          {/* <h1 className="text-2xl font-bold text-gray-800">Codegree</h1> */}
        </div>
        </div>
        </nav>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-40 w-auto" src=".\src\assets\rafiki.svg" />
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Daftar Akun Codegree</h2>
  </div>
  </div> 
  </>
      );
};

export default header;