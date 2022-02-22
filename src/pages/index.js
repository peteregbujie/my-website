
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import RepoCard from "../components/RepoCard";
import { cardOne, cardTwo } from "../data/data";
export default function Home() {
  return (
   <Layout className='flex flex-col items-center justify-center'>
      <Hero />
      <h3 className='text-2xl font-bold md:text-4xl mb-12 text-center'>Projects</h3>
    <RepoCard {...cardOne} />
    <RepoCard {...cardTwo} />
   </Layout>
  );
}
