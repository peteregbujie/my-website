import Image from "next/image";
import photo from '../../public/potrait.jpeg';

function Hero() {
  return (
   <section className='text-gray-600'>
    <div className='container mx-auto flex flex-col justify-center items-center px-5 py-24 lg:flex-row  lg:mx-12'>
     <div className='flex-1 lg:w-1/2  md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mx-4'>
      <h1 className='text-4xl lg:text-6xl mb-6 font-bold text-gray-900 dark:text-white'>
       Hi, i&apos;m Peter Egbujie
       <br />
      </h1>
      <span className='text-3xl lg:text-4xl mb-6 font-medium text-blue-500 dark:text-white'>
       Frontend Developer
      </span>
      <p className='mb-8 dark:text-gray-100 text-2xl text-justify leading-10 max-w-prose'>
       Welcome to my website where I share what i&apos;m learning about
       JavaScript, building products, becoming a better developer and growing a
       career in tech.
      </p>
      <div className='flex justify-center dark:text-white' id='contact'>
       <abbr
        title='GitHub'
        className='pr-5 text-4xl font-bold hover:text-gray-900 no-underline'
       >
        <a
         href='https://github.com/peteregbujie'
         target='_blank'
         rel='noreferrer'
        >
         GH
        </a>
       </abbr>
       <abbr
        title='Twitter'
        className='pr-5 text-4xl font-bold hover:text-gray-900 no-underline'
       >
        <a
         href='https://twitter.com/peteregbujie'
         target='_blank'
         rel='noreferrer'
        >
         TW
        </a>
       </abbr>
       <abbr
        title='LinkedIn'
        className='pr-5 text-4xl font-bold hover:text-gray-900 no-underline'
       >
        <a
         href='https://www.linkedin.com/in/peter-egbujie/'
         target='_blank'
         rel='noreferrer'
        >
         LI
        </a>
       </abbr>
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
