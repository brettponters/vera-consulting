import { Hero } from '@/components/sections/Hero';
import { AntiPosition } from '@/components/sections/AntiPosition';
import { Engagements } from '@/components/sections/Engagements';
import { Methodology } from '@/components/sections/Methodology';

export default function HomePage() {
  return (
    <main>
      {/* Section 1: Hero — builder-2 */}
      <Hero />
      {/* Section 2: AntiPosition — builder-2 */}
      <AntiPosition />

      {/* Section 3: Engagements */}
      <Engagements />

      {/* Section 4: CoAgent marquee — builder-4 */}

      {/* Section 5: Methodology */}
      <Methodology />

      {/* Section 6: About — builder-5 */}
      {/* Section 7: Contact CTA — builder-5 */}
    </main>
  );
}
