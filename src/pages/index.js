import Link from "next/link";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { cards } from "../data/data";
export default function Home() {
 return (
  <Layout>
   <Hero />
   <h3
    id="projects"
    className="text-[2.5rem] font-bold md:ext-4xl mb-6 text-center text-blue-500 dark:text-white after:bg-gray-900 after:inline-block after:h-[2px] after:relative after:align-middle after:w-3/4"
   >
    Projects
   </h3>
   <ul>
    {cards.map((card) => (
     <li key={card.title} className="flex justify-center">
      {
       <article className="container flex items-center p-6 mx-6 mb-6 sm:p-8 card lg:w-1/2 lg:ml-20">
        <div className="flex items-start">
         <div className="sm:ml-8">
          <h2 className="mb-2 text-2xl font-medium text-gray-800 title-font dark:text-gray-200">
           {card.title}
          </h2>
          <p className="text-base leading-relaxed tracking-wide">
           {card.description}
          </p>

          <div className="flex mt-8">
           <Link href={card.github}>
            <a>
             <button className="btn-1">Github Repo</button>
            </a>
           </Link>
           {card.live && (
            <Link href={card.live}>
             <a className="ml-8">
              <button className="btn-2">Live Demo</button>
             </a>
            </Link>
           )}
          </div>
         </div>
        </div>
       </article>
      }

      {
       //  <div className="container flex flex-row items-center justify-center mb-4 sm:p-8">
       //   <div className="p-4 mx-4 mb-12 lg:w-1/2 lg:ml-20 md:w-full  rounded-md border-2 border-gray-800 dark:border-gray-200 text-left  hover:shadow-[12px_12px_2px_1px_rgba(0,0,0,0.5)] dark:hover:shadow-[12px_12px_2px_1px_rgba(255,255,255)]">
       //    <h2 className="mb-2 text-2xl font-medium text-gray-800 title-font dark:text-gray-200">
       //     {card.title}
       //    </h2>
       //    <p className="text-base leading-relaxed tracking-wide">
       //     {card.description}
       //    </p>
       //    <div className="flex mt-8">
       //     <Link href={card.github}>
       //      <a>
       //       <button className="btn-1">Github Repo</button>
       //      </a>
       //     </Link>
       //     {card.live && (
       //      <Link href={card.live}>
       //       <a className="ml-8">
       //        <button className="btn-2">Live Demo</button>
       //       </a>
       //      </Link>
       //     )}
       //    </div>
       //   </div>
       //  </div>
      }
     </li>
    ))}
   </ul>
  </Layout>
 );
}
