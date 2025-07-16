import React from 'react';

const BeyondAcademics = () => {
  return (
    <div className="p-6 text-white font-iceland h-full bg-black">
      <h1 className="text-3xl text-red-500 border-b border-red-500 mb-4 tracking-widest">
        /BEYOND ACADEMICS
      </h1>
      <p className="text-gray-300 leading-relaxed mb-10">
        Outside academics, I dive into creative quests — from crafting visual identities for college fests to leading student teams and events. These experiences have leveled up my design instincts, leadership, and collaboration.
      </p>

      {/* Position of Responsibility */}
      <section className="px-2 md:px-6 py-6">
        <h2 className="text-2xl font-bold border-b border-red-500 pb-2 mb-6 uppercase tracking-wide">
          Position of Responsibility
        </h2>

        <div className="mb-10">
          <h3 className="text-xl font-semibold">
            GS Production House (GSPH){' '}
            <span className="italic text-sm font-normal">Graphics Designer</span>
          </h3>
          <div className="flex justify-between text-sm text-gray-400">
            <span>Apr 2024 – Present</span>
            <span>Indore, M.P.</span>
          </div>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-200">
            <li>Designed visuals for 3+ major events, including Elicit ’24, Eclipse '24 and  Media Summit ’25.</li>
            <li>Produced posters, motion graphics, and social assets using Figma and Canva.</li>
            <li>Collaborated with teams to ensure consistent branding and timely delivery.</li>
          </ul>
        </div>

        {/* Extracurricular Activities */}
        <h2 className="text-2xl font-bold border-b border-red-500 pb-2 mb-6 uppercase tracking-wide">
          Extracurricular Activities
        </h2>

        {/* Elicit */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">
            Elicit ’24 (GSPH){' '}
            <span className="italic text-sm font-normal">Overall Coordinator</span>
          </h3>
          <div className="text-sm text-gray-400">Sept 2024</div>
          <p className="mt-2 text-gray-200">
            Led ELICIT ’24 – a media-rich induction event with showcases, storytelling, and collaborative projects.
          </p>
        </div>

        {/* Eclipse */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">
            Eclipse ’24 (GSPH){' '}
            <span className="italic text-sm font-normal">Graphic Designer & Coordinator</span>
          </h3>
          <div className="text-sm text-gray-400">Oct 2024</div>
          <p className="mt-2 text-gray-200">
            Designed branding and digital content for a themed event with treasure hunts and film trivia.
          </p>
        </div>

        {/* Media Summit */}
        <div>
          <h3 className="text-lg font-semibold">
            Media Summit ’25{' '}
            <span className="italic text-sm font-normal">Graphic Designer & Coordinator</span>
          </h3>
          <div className="text-sm text-gray-400">Feb 2025</div>
          <p className="mt-2 text-gray-200">
            Created campaigns and assets for summit events including screenings, media related games, and hackathons.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BeyondAcademics;
