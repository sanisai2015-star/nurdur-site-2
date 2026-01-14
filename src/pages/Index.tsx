import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import StatsSection from '@/components/sections/StatsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Index() {
  return (
    <Layout>
      <div id="home"><HeroSection /></div>
      <div id="about"><AboutSection /></div>
      <div id="services"><ServicesSection /></div>
      <StatsSection />
      <div id="projects"><ProjectsSection /></div>
      <div id="contact"><ContactSection /></div>
    </Layout>
  );
}
