export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <h1 className="font-michroma text-2xl tracking-[0.35em] text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
          HAZI
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm uppercase tracking-wider text-gray-300">
          <li className="hover:text-white transition cursor-pointer">Home</li>
          <li className="hover:text-white transition cursor-pointer">Services</li>
          <li className="hover:text-white transition cursor-pointer">Gallery</li>
          <li className="hover:text-white transition cursor-pointer">About</li>
          <li className="hover:text-white transition cursor-pointer">Contact</li>
        </ul>

        {/* Button */}
        <button className="rounded-full border border-white px-5 py-2 text-sm hover:bg-white hover:text-black transition duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,.6)]">
          Book Now
        </button>

      </div>
    </nav>
  );
}
