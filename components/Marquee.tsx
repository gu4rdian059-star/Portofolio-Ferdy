const marqueeItems = [
  "pengembangan web",
  "apps mobile",
  "desain grafis",
  "desain UI/UX",
];

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section
      id="marquee"
      className="bg-black border-t-[3px] border-b-[3px] border-black overflow-hidden py-5"
    >
      <div className="animate-marquee flex whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 mx-8 text-base font-bold uppercase tracking-[0.2em]"
          >
            <span className="text-ngreen text-lg sticker-tilt-right inline-block">✦</span>
            <span className="text-white">{item}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
