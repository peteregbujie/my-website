import React from 'react';

function RepoCard({title,description,github,live}) {
    return (
     <div className='mx-auto flex flex-col justify-center items-center'>
      <div className='group mb-6 p-4 md:min-w-[659px] lg:w-1/2 lg:ml-20 md:w-full  rounded-md border-2 border-[#180202f8] text-left  hover:shadow-[12px_12px_2px_1px_rgba(0,0,0,0.5)]'>
       <h2 className='text-gray-800 text-2xl title-font font-medium mb-2 group-hover:text-blue-600 group-focus:text-blue-600/75 group-active:text-blue-600/75'>
        {title}
       </h2>
       <p className='leading-relaxed text-base group-hover:text-blue-600 group-focus:text-blue-600/75 group-active:text-blue-600/75'>
        {description}
       </p>
       <div className='flex'>
        <a
         className='hyperlink my-3 text-gray-500 inline-flex items-center hover:text-blue-800 visited:text-purple-600'
         href={github}
        >
         Github Link
        </a>
        {live && (
         <a
          className='hyperlink my-3 text-gray-500 inline-flex items-center hover:text-blue-800 visited:text-purple-600 ml-4'
          href={live}
         >
          Live Demo
         </a>
        )}
       </div>
      </div>
     </div>
    );
}

export default RepoCard