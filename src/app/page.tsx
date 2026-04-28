import { Hero } from '@/components/sections/Hero';
import { Engagements } from '@/components/sections/Engagements';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function HomePage() {
  return (
    <main>
      {/* Section 1: Hero — builder-2 */}
      <Hero />

      {/* Section 3: Engagements */}
      <Engagements />

      {/* Section 4: Selected work — builder-4 */}
      <SelectedWork />

      {/* Section 7: Contact CTA — builder-5 */}
      <ContactCTA />
    </main>
  );
}
