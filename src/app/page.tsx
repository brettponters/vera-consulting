import { Hero } from '@/components/sections/Hero';
import { Engagements } from '@/components/sections/Engagements';
import { HowWeThink } from '@/components/sections/HowWeThink';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { ReadingPreview } from '@/components/sections/ReadingPreview';
import { Structure } from '@/components/sections/Structure';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function HomePage() {
  return (
    <main>
      {/* §2.1 Hero */}
      <Hero />

      {/* §2.2 What we do */}
      <Engagements />

      {/* §2.3 How we think about this work */}
      <HowWeThink />

      {/* §2.4 CoAgent preview */}
      <SelectedWork />

      {/* §2.5 What we read */}
      <ReadingPreview />

      {/* §2.6 How we're structured */}
      <Structure />

      {/* §2.7 Contact CTA */}
      <ContactCTA />
    </main>
  );
}
