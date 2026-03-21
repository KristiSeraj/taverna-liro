const highlights = [
  {
    title: "Traditional Food",
    text: "Fresh catches, olive oil, herbs, and the kind of simplicity that lets every ingredient shine.",
  },
  {
    title: "Family Hospitality",
    text: "A warm table, thoughtful service, and recipes passed down across generations.",
  },
  {
    title: "Panoramic Setting",
    text: "A relaxed coastal atmosphere designed for long lunches, sunset dinners, and memorable gatherings.",
  },
];

const specialties = [
  {
    name: "Chicken with Rice or Pasta",
    description:
      "A comforting house favorite, prepared with rich flavor and served just the way guests love it.",
  },
  {
    name: "Slow-Cooked Meat Ribs",
    description:
      "Tender, deeply savory, and made for a generous main course at the center of the table.",
  },
  {
    name: "Grilled Eels",
    description:
      "A distinctive specialty that brings a bold local character to the Li-Ro dining experience.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#f4eadc] text-[#24170d]">
      <section className="relative isolate min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/background.jpeg"
        >
          <source src="/media/liro.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,14,9,0.35),rgba(21,14,9,0.78))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(224,183,116,0.28),transparent_40%)]" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12">
          <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
            <div className="max-w-3xl text-[#fff8ef]">
              <p className="tracking-[0.35em] text-[0.72rem] font-semibold uppercase text-[#f3d3a3]">
                Taverna Li-Ro
              </p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                A warm table shaped by Albanian tradition.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#f9ecdc]/90 sm:text-lg">
                Discover family recipes, generous main dishes, and a welcoming atmosphere made for slow meals and unforgettable evenings.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/menu"
                  className="inline-flex items-center justify-center rounded-full bg-[#e3b16d] px-7 py-3 text-sm font-semibold text-[#2f1d0d] transition hover:bg-[#f0c486]"
                >
                  Explore The Menu
                </a>
                <a
                  href="tel:+355693304188"
                  className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-7 py-3 text-sm font-semibold text-[#fff8ef] backdrop-blur-sm transition hover:bg-white/18"
                >
                  Reserve a Table
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 text-[#fff8ef] shadow-2xl backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.3em] text-[#f3d3a3]">Today at Li-Ro</p>
              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-sm text-[#f9ecdc]/70">Location</p>
                  <p className="text-lg font-medium">Selevec, Vlore</p>
                </div>
                <div>
                  <p className="text-sm text-[#f9ecdc]/70">Hours</p>
                  <p className="text-lg font-medium">Mon, Wed-Sun 11:00 - 22:00</p>
                </div>
                <div>
                  <p className="text-sm text-[#f9ecdc]/70">Reservations</p>
                  <p className="text-lg font-medium">+355 69 33 04 188</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-20 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-[#dcc3a5] bg-[#fff8ef] p-7 shadow-[0_20px_60px_rgba(56,34,17,0.08)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a56c2f]">
                Signature
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[#352114]">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#6b4b36]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#a56c2f]">
            The Experience
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.03em] text-[#2d1d10] sm:text-5xl">
            Fresh flavors, warm service, and a setting that feels timeless.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5b4232]">
            Taverna Li-Ro blends the comfort of a family taverna with the beauty of a destination meal. From the first welcome to the final course, every detail is designed to feel generous, relaxed, and unmistakably local.
          </p>
        </div>

        <div
          className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-[#dcc3a5] bg-[#d9c0a0] p-8 text-[#fff8ef] shadow-[0_20px_60px_rgba(56,34,17,0.12)]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(37, 23, 12, 0.2), rgba(37, 23, 12, 0.82)), url('/media/background.jpeg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#f2d3aa]">House Specialties</p>
          <ul className="mt-8 space-y-5">
            {specialties.map((dish) => (
              <li
                key={dish.name}
                className="border-b border-white/15 pb-5 last:border-b-0 last:pb-0"
              >
                <p className="text-lg font-medium leading-7">{dish.name}</p>
                <p className="mt-2 text-sm leading-6 text-[#fff8ef]/78">{dish.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
