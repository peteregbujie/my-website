
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import RepoCard from "../components/RepoCard";
import { cardOne, cardTwo } from "../data/data";
export default function Home() {
  return (
   <Layout className='flex flex-col items-center justify-center'>
      <Hero />
      <h3 id='projects' className='text-[2.5rem] font-bold md:ext-4xl mb-12 text-center after:bg-gray-900 after:inline-block after:h-[2px] after:relative after:align-middle after:w-3/4'>Projects</h3>
    <RepoCard {...cardOne} />
    <RepoCard {...cardTwo} />
   </Layout>
  );
}
