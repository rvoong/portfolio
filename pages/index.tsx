import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import SkillList from '../components/SkillList';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Link from 'next/link';
import{ Experience, PageInfo, Project, Skill, Social } from "../typings"
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchSocials } from '../utils/fetchSocials';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchExperiences } from '../utils/fetchExperiences';


type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

// Destructuring: Original - const Home: NextPage = () => {
const Home = ({pageInfo, experiences, projects, skills, socials}: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Head>
        <title> {pageInfo.name} Portfolio</title>
      </Head>

      <Header socials = {socials}/>

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>

      <section id="skillList" className="snap-start">
        <SkillList skills={skills}/>
      </section>

      <section id="projects" className= "snap-start">
        <Projects projects={projects}/>
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    
      <Link href="#hero">
        <footer className=" sticky bottom-5 w-full cursor-pointer">    
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return{
    props:{
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to re-generate the page: 
    // -When a request comes in at most every 10 seconds
    revalidate: 10,
  }


}