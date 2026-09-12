import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { Categories } from '@/components/sections/Categories';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { WhySalon } from '@/components/sections/WhySalon';
import { Process } from '@/components/sections/Process';
import { Designers } from '@/components/sections/Designers';
import { Production } from '@/components/sections/Production';
import { LeadForm } from '@/components/sections/LeadForm';
import { Reviews } from '@/components/sections/Reviews';
import { ContactTeaser } from '@/components/sections/ContactTeaser';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Categories />
      <FeaturedProjects />
      <WhySalon />
      <Process />
      <Designers />
      <Production />
      <LeadForm />
      <Reviews reviews={[]} />
      <ContactTeaser />
    </>
  );
}
