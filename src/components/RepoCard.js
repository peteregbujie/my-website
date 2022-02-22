import React from 'react';

function RepoCard({title,description,github,live}) {
    return (
     <div className='mx-auto flex flex-col justify-center items-center'>
      <div className='mb-6 p-4 md:min-w-[659px] lg:w-1/2 lg:ml-20 md:w-full  rounded-md border-2 border-[#180202f8] text-left  hover:shadow-[12px_12px_2px_1px_rgba(0,0,0,0.5)]'>
       <h2 className='text-gray-800 text-2xl title-font font-medium mb-2'>
        {title}
       </h2>
       <p className='leading-relaxed text-base tracking-wide'>{description}</p>
       <div className='flex mt-8'>
        <a href={github}>
         <button className='inline-flex text-white bg-gray-800 border-black border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-gray-800 hover:border-black hover:border-2 rounded text-lg'>
          Github Repo
         </button>
        </a>
        {live && (
         <a href={live} className='ml-8'>
          <button className='inline-flex py-2 px-6 focus:outline-none text-gray-800 border-black border-2 bg-white hover:bg-gray-800 hover:text-white rounded text-lg'>
           Live Demo
          </button>
         </a>
        )}
       </div>
      </div>
     </div>
    );
}

export default RepoCard