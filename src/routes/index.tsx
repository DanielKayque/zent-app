import { createFileRoute, Link } from "@tanstack/react-router";
import { Confetti } from "@/components/Confetti";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen relative">
      <Confetti />
      <header className="px-6 md:px-12 py-6 flex items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-2 md:gap-4">
          <Link to="/login" className="px-4 py-2 rounded-full font-medium hover:bg-muted transition">Entrar</Link>
          <Link to="/register" className="px-5 py-2 rounded-full bg-foreground text-background font-medium hover:scale-105 transition">
            Criar conta
          </Link>
        </nav>
      </header>

      <main className="px-6 md:px-12 pt-12 md:pt-20 pb-24 max-w-6xl mx-auto">
        <section className="text-center animate-pop-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
            🎉 É hora de planejar com alegria
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95]">
            Seus eventos,
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">mais</span>
              <span className="absolute inset-x-0 bottom-2 h-4 md:h-6 bg-sun -z-0 -rotate-1" />
            </span>{" "}
            <span className="text-coral italic">divertidos</span> 🎈
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Zent é o gerenciador de eventos que reúne convidados, datas e detalhes
            num só lugar — sem aquela cara séria de planilha.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/register" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-pop hover:scale-105 transition">
              Começar de graça →
            </Link>
            <Link to="/login" className="px-8 py-4 rounded-full bg-card border-2 border-foreground/10 font-semibold text-lg hover:bg-muted transition">
              Já tenho conta
            </Link>
          </div>
        </section>

        <section className="mt-24 grid md:grid-cols-3 gap-6">
          {[
            { e: "📅", t: "Agenda viva", d: "Veja todos os seus rolês organizados, com datas, locais e clima certinho." },
            { e: "💌", t: "Convidados felizes", d: "Controle a lista, capacidade e quem confirmou — sem stress." },
            { e: "✨", t: "Tudo num lugar", d: "Crie, edite e revisite cada festa com uma interface gostosa de usar." },
          ].map((c, i) => (
            <div key={i} className="bg-card rounded-3xl p-8 shadow-soft hover:-translate-y-1 transition animate-pop-in" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="text-5xl mb-4">{c.e}</div>
              <h3 className="font-display text-2xl font-bold">{c.t}</h3>
              <p className="mt-2 text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="px-6 py-8 text-center text-muted-foreground text-sm">
        Feito com 🧡 para quem adora uma festa
      </footer>
    </div>
  );
}
