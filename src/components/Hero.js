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
        <button className='btn-1'>View on LinkedIn</button>
       </a>
       <a href='https://github.com/peteregbujie' className='ml-8'>
        <button className='btn-2'>View Github</button>
       </a>
      </div>
     </div>
     <div className='hidden lg:block max-w-[300px] mr-12'>
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