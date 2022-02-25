import Image from "next/image";
import photo from '../../public/potrait.jpeg';

function Hero() {
  return (
   <section className='text-gray-600 body-font'>
    <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col justify-center items-center lg:mx-12'>
     <div className='lg:flex-grow lg:w-1/2 lg:max-w-2xl md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mx-8'>
      <h1 className='title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900 dark:text-white'>
       Making the web a better place, one line of code at a time.
       <br />
      </h1>
      <span className='text-2xl mb-4 font-medium dark:text-gray-200'>
       Peter Egbujie, JavaScript Developer
      </span>
      <p className='mb-8 leading-loose dark:text-gray-300'>
       Welcome to my website where I share about learning JavaScript, building
       products, becoming a better developer and growing a career in tech.
      </p>
      <div className='flex justify-center'>
       <a href='https://www.linkedin.com/in/peter-egbujie/'>
        <button className='inline-flex text-white bg-gray-800 border-black border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-gray-800 hover:border-black hover:border-2 rounded text-lg'>
         View on LinkedIn
        </button>
       </a>
       <a href='https://github.com/peteregbujie'>
        <button className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
         View Github
        </button>
       </a>
      </div>
     </div>
     <div className='invisible lg:visible max-w-[300px] mr-12'>
      <Image
       className='object-cover rounded-full'
       alt='photo'
       src={photo}
       width='300'
       height='320'
      />
     </div>
    </div>
   </section>
  );
}

export default Hero