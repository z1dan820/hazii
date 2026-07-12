export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">

      {/* Glow Background */}
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[180px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-4xl text-center">

        <p className="mb-6 text-sm uppercase tracking-[0.5em] text-gray-400">
          Premium Multi-Service Barbershop
        </p>

        <h1
          className="font-michroma text-6xl md:text-8xl text-white"
          style={{
            textShadow: "0 0 25px rgba(255,255,255,.45)",
          }}
        >
          HAZI
        </h1>

        <h2 className="mt-8 text-3xl font-bold md:text-5xl">
          Redefining Modern Grooming
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Experience premium grooming with skilled barbers,
          modern hairstyles, and an effortless online booking experience.
        </p>

        <div className="mt-12 flex justify-center gap-5">

          <button className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,.6)]">
            Book Appointment
          </button>

          <button className="rounded-full border border-white/20 px-8 py-4 transition hover:border-white hover:bg-white hover:text-black">
            Explore Services
          </button>

        </div>

      </div>

    </section>
  );
}
