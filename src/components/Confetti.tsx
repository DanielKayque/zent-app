// Decorative floating shapes — no logic
export function Confetti() {
  const dots = [
    { c: "bg-coral", t: "8%", l: "6%", s: "w-16 h-16", a: "animate-float" },
    { c: "bg-sun", t: "20%", l: "88%", s: "w-12 h-12", a: "animate-float [animation-delay:1s]" },
    { c: "bg-mint", t: "70%", l: "4%", s: "w-20 h-20", a: "animate-float [animation-delay:2s]" },
    { c: "bg-sky", t: "82%", l: "82%", s: "w-14 h-14", a: "animate-float [animation-delay:0.5s]" },
    { c: "bg-grape", t: "45%", l: "92%", s: "w-10 h-10", a: "animate-float [animation-delay:1.5s]" },
  ];
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {dots.map((d, i) => (
        <div
          key={i}
          className={`absolute ${d.c} ${d.s} ${d.a} blob opacity-[0.08]`}
          style={{ top: d.t, left: d.l }}
        />
      ))}
    </div>
  );
}





