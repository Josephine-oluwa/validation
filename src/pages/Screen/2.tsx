import React from 'react'

const Page2 = () => {
  return (
    <div><div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">

      <div className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Ratings</h2>
  
        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
      </div>
     
  
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">
 
        <div className="flex flex-col items-center md:p-4">
          <div className="text-xl font-bold text-[#ff7e20] sm:text-2xl md:text-3xl">90%</div>
          <div className="text-sm font-semibold sm:text-base">Self Rating</div>
        </div>
       
  

        <div className="flex flex-col items-center md:p-4">
          <div className="text-xl font-bold text-[#ff7e20] sm:text-2xl md:text-3xl">10+</div>
          <div className="text-sm font-semibold sm:text-base">Project Completed</div>
        </div>
          <div className="flex flex-col items-center md:p-4">
          <div className="text-xl font-bold text-[#ff7e20] sm:text-2xl md:text-3xl">90%</div>
          <div className="text-sm font-semibold sm:text-base">Clients Rating</div>
        </div>
       
  
      
        <div className="flex flex-col items-center md:p-4">
          <div className="text-xl font-bold text-[#ff7e20] sm:text-2xl md:text-3xl">5 years</div>
          <div className="text-sm font-semibold sm:text-base">Work Experience</div>
        </div>

      </div>
    </div>
  </div></div>
  )
}

export default Page2