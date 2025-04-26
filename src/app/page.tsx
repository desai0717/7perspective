export default function Home() {
  return (
    <div>
      <section
        id="essence1"
        className="relative min-h-screen px-8 py-24 flex items-center bg-gray-100 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/home/Essence.jpg"
            alt="Essence Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Fade Top */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-100 to-transparent z-10" />

        {/* Fade Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-100 to-transparent z-10" />

        {/* Foreground Content */}
        <div className="relative z-20 flex flex-col lg:flex-row items-center gap-12 w-full max-w-7xl mx-auto">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/home/Essence.jpg"
              alt="Essence"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="w-full lg:w-1/2 text-gray-800">
            <h2 className="text-5xl font-bold mb-4">Essence</h2>
            <p className="text-xl italic mb-4">“Every creation begins with a story.”</p>
            <p className="text-lg leading-relaxed">
              The foundation of all expression—pure form, intention, and identity. <br />
              It is the quiet spark where vision becomes space.
            </p>
          </div>
        </div>
      </section>
      <section
        id="culture"
        className="relative min-h-screen px-8 py-24 flex items-center bg-gray-100 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/home/Culture.jpg"
            alt="Culture Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Fade Top */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-100 to-transparent z-10" />

        {/* Fade Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-100 to-transparent z-10" />

        {/* Foreground Content */}
        <div className="relative z-20 flex flex-col lg:flex-row-reverse items-center gap-12 w-full max-w-7xl mx-auto">
          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/home/Culture.jpg"
              alt="Culture"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Left Text */}
          <div className="w-full lg:w-1/2 text-gray-800">
            <h2 className="text-5xl font-bold mb-4">Culture</h2>
            <p className="text-xl italic mb-4">“Shaped by people, place, and memory.”</p>
            <p className="text-lg leading-relaxed">
              Rooted in history and shaped by its surroundings—this perspective honors heritage, tradition, and collective narrative.
              <br />
              It speaks the language of its land and the soul of its people.
            </p>
          </div>
        </div>
      </section>
      <section
        id="Innovation"
        className="relative min-h-screen px-8 py-24 flex items-center bg-gray-100 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/home/Innovation.jpg"
            alt="Innovation Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Fade Top */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-100 to-transparent z-10" />

        {/* Fade Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-100 to-transparent z-10" />

        {/* Foreground Content */}
        <div className="relative z-20 flex flex-col lg:flex-row items-center gap-12 w-full max-w-7xl mx-auto">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/home/Innovation.jpg"
              alt="Innovation"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="w-full lg:w-1/2 text-gray-800">
            <h2 className="text-5xl font-bold mb-4">Innovation</h2>
            <p className="text-xl italic mb-4">“Pushing boundaries, crafting futures.”</p>
            <p className="text-lg leading-relaxed">
              Driven by curiosity and courage—breaking norms, embracing new tools, and reimagining what’s possible.
              <br />
              It lives at the edge of convention, where imagination leads.
            </p>
          </div>
        </div>
      </section>
      <section
        id="Balance"
        className="relative min-h-screen px-8 py-24 flex items-center bg-gray-100 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/home/Balance.jpg"
            alt="Balance Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Fade Top */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-100 to-transparent z-10" />

        {/* Fade Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-100 to-transparent z-10" />

        {/* Foreground Content */}
        <div className="relative z-20 flex flex-col lg:flex-row-reverse items-center gap-12 w-full max-w-7xl mx-auto">
          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/home/Balance.jpg"
              alt="Balance"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Left Text */}
          <div className="w-full lg:w-1/2 text-gray-800">
            <h2 className="text-5xl font-bold mb-4">Balance</h2>
            <p className="text-xl italic mb-4">“Harmony in structure, rhythm, and space.”<br /></p>
            <p className="text-lg leading-relaxed">
              A mindful interplay between function, beauty, and environment—seeking stillness in complexity.
              <br />
              Where opposites meet, a quiet order emerges.
            </p>
          </div>
        </div>
      </section>
      <section
        id="Experience"
        className="relative min-h-screen px-8 py-24 flex items-center bg-gray-100 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/home/Experience.jpg"
            alt="Experience Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Fade Top */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-100 to-transparent z-10" />

        {/* Fade Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-100 to-transparent z-10" />

        {/* Foreground Content */}
        <div className="relative z-20 flex flex-col lg:flex-row items-center gap-12 w-full max-w-7xl mx-auto">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/home/Experience.jpg"
              alt="Experience"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="w-full lg:w-1/2 text-gray-800">
            <h2 className="text-5xl font-bold mb-4">Experience</h2>
            <p className="text-xl italic mb-4">“Spaces that move, respond, and connect.”</p>
            <p className="text-lg leading-relaxed">
              Focused on human interaction—how environments are felt, moved through, and remembered.
              <br />
              It is shaped by footsteps, glances, gestures, and time.
            </p>
          </div>
        </div>
      </section>
      <section
        id="Texture"
        className="relative min-h-screen px-8 py-24 flex items-center bg-gray-100 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/home/Texture.jpg"
            alt="Texture Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Fade Top */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-100 to-transparent z-10" />

        {/* Fade Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-100 to-transparent z-10" />

        {/* Foreground Content */}
        <div className="relative z-20 flex flex-col lg:flex-row-reverse items-center gap-12 w-full max-w-7xl mx-auto">
          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/home/Texture.jpg"
              alt="Texture"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Left Text */}
          <div className="w-full lg:w-1/2 text-gray-800">
            <h2 className="text-5xl font-bold mb-4">Texture</h2>
            <p className="text-xl italic mb-4">“The language of light, shadow, and surface.”<br /></p>
            <p className="text-lg leading-relaxed">
              Depth you can feel—where material, tone, and atmosphere engage the senses and enrich perception.
              <br />
              A tactile story unfolds through contrast and detail.
            </p>
          </div>
        </div>
      </section>
      <section
        id="Eternity"
        className="relative min-h-screen px-8 py-24 flex items-center bg-gray-100 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/home/Eternity.jpg"
            alt="Eternity Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Fade Top */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-100 to-transparent z-10" />

        {/* Fade Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-100 to-transparent z-10" />

        {/* Foreground Content */}
        <div className="relative z-20 flex flex-col lg:flex-row items-center gap-12 w-full max-w-7xl mx-auto">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/home/Eternity.jpg"
              alt="Eternity"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="w-full lg:w-1/2 text-gray-800">
            <h2 className="text-5xl font-bold mb-4">Eternity</h2>
            <p className="text-xl italic mb-4">“Built to endure, shaped to evolve.”</p>
            <p className="text-lg leading-relaxed">
              A quiet permanence—timeless forms that hold meaning beyond trend, lasting through seasons and stories.
              <br />
              It exists beyond the moment, rooted in purpose and grace.
            </p>
          </div>
        </div>
      </section>
  </div>
  );
}