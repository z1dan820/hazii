export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold tracking-widest text-yellow-400">
        HAZI
      </h1>

      <p className="mt-6 text-center text-gray-300 max-w-xl text-lg">
        Premium Multi-Service Barbershop
      </p>

      <p className="mt-3 text-center text-gray-500 max-w-2xl">
        Experience modern grooming with professional barbers,
        premium hair care, and easy online booking.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black hover:scale-105 transition">
          Book Now
        </button>

        <button className="rounded-xl border border-white px-6 py-3 hover:bg-white hover:text-black transition">
          Explore Services
        </button>
      </div>
    </main>
  );
}