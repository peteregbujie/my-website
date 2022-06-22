import Image from "next/image";
import photo from "../../public/potrait.jpeg";

function Hero() {
 return (
  <section className="text-gray-600">
   <div className="container flex flex-row justify-center w-5/6 px-5 py-8 mx-auto mb-4 lg:mb-16">
    <div className="flex flex-col items-center flex-1 mb-16 text-center basis-full md:w-full md:pr-16 md:items-start md:text-left md:mb-0">
     <h1 className="mb-6 text-4xl font-bold text-blue-500 lg:text-6xl dark:text-white">
      Frontend Developer
      <br />
     </h1>
     <h3 className="mb-6 text-3xl font-medium text-blue-500 lg:text-4xl dark:text-white">
      Hi, i&apos;m Peter
     </h3>
     <p className="mb-8 text-2xl leading-10 text-justify dark:text-gray-100 max-w-prose">
      Welcome to my website where I share what i&apos;m learning about
      JavaScript, building products, becoming a better developer and growing a
      career in tech.
     </p>
     <div className="flex justify-center dark:text-white" id="contact">
      <abbr
       title="GitHub"
       className="pr-5 text-4xl font-bold no-underline hover:text-gray-900"
      >
       <a
        href="https://github.com/peteregbujie"
        target="_blank"
        rel="noreferrer"
       >
        GH
       </a>
      </abbr>
      <abbr
       title="Twitter"
       className="pr-5 text-4xl font-bold no-underline hover:text-gray-900"
      >
       <a
        href="https://twitter.com/peteregbujie"
        target="_blank"
        rel="noreferrer"
       >
        TW
       </a>
      </abbr>
      <abbr
       title="LinkedIn"
       className="pr-5 text-4xl font-bold no-underline hover:text-gray-900"
      >
       <a
        href="https://www.linkedin.com/in/peter-egbujie/"
        target="_blank"
        rel="noreferrer"
       >
        LI
       </a>
      </abbr>
     </div>
    </div>
    <div className="hidden lg:block max-w-[300px] basis-full">
     <Image
      className="object-cover rounded-full"
      alt="photo"
      src={photo}
      width="300"
      height="320"
     />
    </div>
   </div>
  </section>
 );
}

export default Hero;
