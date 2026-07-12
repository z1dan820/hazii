const services = [
  {
    title: "Haircut",
    desc: "Precision haircut tailored to your style."
  },
  {
    title: "Hair Wash",
    desc: "Refreshing premium shampoo treatment."
  },
  {
    title: "Hair Coloring",
    desc: "Modern coloring with premium products."
  },
  {
    title: "Hair Relaxing",
    desc: "Smooth and natural straight hair finish."
  },
  {
    title: "Perm",
    desc: "Natural Korean & modern texture styles."
  },
  {
    title: "Beard Trim",
    desc: "Clean beard shaping with sharp finishing."
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-black py-32 px-6">

      <div className="mx-auto max-w-7xl">

        <h2 className="text-center text-4xl font-bold text-white">
          Our Services
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Designed for modern gentlemen.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (

            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_0_35px_rgba(255,255,255,.15)]"
            >

              <div className="mb-6 h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">
                ✂️
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {service.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
