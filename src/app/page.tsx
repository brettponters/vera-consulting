import { Hero } from '@/components/sections/Hero';
import { AntiPosition } from '@/components/sections/AntiPosition';
import { Engagements } from '@/components/sections/Engagements';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { Methodology } from '@/components/sections/Methodology';
import { About } from '@/components/sections/About';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function HomePage() {
  return (
    <main>
      {/* Section 1: Hero — builder-2 */}
      <Hero />
      {/* Section 2: AntiPosition — builder-2 */}
      <AntiPosition />

      {/* Section 3: Engagements */}
      <Engagements />

      {/* Section 4: Selected work — builder-4 */}
      <SelectedWork />

      {/* Accent hairline — sole accent outside CTAs */}
      <div className="flex justify-center py-0 bg-bg-base" aria-hidden="true">
        <div className="h-px w-20 bg-accent opacity-60" />
      </div>

      {/* Section 5: Methodology */}
      <Methodology />

      {/* Section 6: About — builder-5 */}
      <About />

      {/* Section 7: Contact CTA — builder-5 */}
      <ContactCTA />
    </main>
  );
}
