import { Hero } from '@/components/sections/Hero';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { FieldNotes } from '@/components/sections/FieldNotes';
import { Engagements } from '@/components/sections/Engagements';
import { WhatWeDontDo } from '@/components/sections/WhatWeDontDo';
import { HowWeThink } from '@/components/sections/HowWeThink';
import { ReadingPreview } from '@/components/sections/ReadingPreview';
import { Structure } from '@/components/sections/Structure';

// Section order follows the strategic memo's recommended journey:
// recognition → proof → unity (artifact) → offer → honesty → belief → tribe → structure → signed close.
export default function HomePage() {
  return (
    <main>
      {/* Recognition + interruption — the loss-framed thesis */}
      <Hero />

      {/* The artifact, immediately — halo effect */}
      <SelectedWork />

      {/* Field Notes — second proof artifact, the practice's voice */}
      <FieldNotes />

      {/* Offer */}
      <Engagements />

      {/* Two-sided argument — earns trust by naming refusals */}
      <WhatWeDontDo />

      {/* Belief / method */}
      <HowWeThink />

      {/* Tribe — the reading list */}
      <ReadingPreview />

      {/* Structure — PBC stated as fact */}
      <Structure />
    </main>
  );
}
