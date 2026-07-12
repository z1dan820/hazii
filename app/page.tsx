export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-extrabold tracking-[0.4em] text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.9)]">
        HAZI
      </h1>

      <p className="mt-6 text-center text-gray-200 max-w-xl text-lg">
        Premium Multi-Service Barbershop
      </p>

      <p className="mt-3 text-center text-gray-400 max-w-2xl">
        Experience modern grooming with professional barbers,
        premium hair care, and easy online booking.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="rounded-xl bg-white text-black px-6 py-3 font-semibold transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]">
          Book Now
        </button>

        <button className="rounded-xl border border-white px-6 py-3 transition duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
          Explore Services
        </button>
      </div>
    </main>
  );
}
