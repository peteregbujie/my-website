function RepoCard({ title, description, github, live }) {
 return (
  <div className="container flex flex-col items-center justify-center">
   <div className="p-4 mx-4 mb-4 lg:w-1/2 lg:ml-20 md:w-full  rounded-md border-2 border-gray-800 dark:border-gray-200 text-left  hover:shadow-[12px_12px_2px_1px_rgba(0,0,0,0.5)] dark:hover:shadow-[12px_12px_2px_1px_rgba(255,255,255)]">
    <h2 className="mb-2 text-2xl font-medium text-gray-800 title-font dark:text-gray-200">
     {title}
    </h2>
    <p className="text-base leading-relaxed tracking-wide">{description}</p>
    <div className="flex mt-8">
     <a target="_blank" rel="noreferrer" href={github}>
      <button className="btn-1">Github Repo</button>
     </a>
     {live && (
      <a target="_blank" rel="noreferrer" href={live} className="ml-8">
       <button className="btn-2">Live Demo</button>
      </a>
     )}
    </div>
   </div>
  </div>
 );
}

export default RepoCard;
