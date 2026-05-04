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
            Gerenciador de eventos
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
            Cada evento,
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">do seu</span>
              <span className="absolute inset-x-0 bottom-2 h-3 md:h-4 bg-accent -z-0" />
            </span>{" "}
            <span className="text-primary italic">jeito</span>.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Do casamento ao after, do corporativo à festa na piscina — Zent organiza
            convidados, datas e detalhes com a leveza que o seu evento merece.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/register" className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg shadow-pop hover:scale-105 transition">
              Começar grátis
            </Link>
            <Link to="/login" className="px-8 py-4 rounded-xl bg-card border border-border font-semibold text-lg hover:bg-muted transition">
              Já tenho conta
            </Link>
          </div>
        </section>

        <section className="mt-24 grid md:grid-cols-3 gap-6">
          {[
            { t: "Agenda clara", d: "Todos os seus eventos organizados, com datas, locais e status num só painel." },
            { t: "Convidados sob controle", d: "Gerencie listas, capacidade e confirmações sem planilhas." },
            { t: "Versátil", d: "De um jantar íntimo a um evento corporativo — adapta-se ao que você organiza." },
          ].map((c, i) => (
            <div key={i} className="bg-card rounded-2xl p-8 shadow-soft hover:-translate-y-1 transition animate-pop-in border border-border/60" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-display font-bold mb-4">{i + 1}</div>
              <h3 className="font-display text-2xl font-bold">{c.t}</h3>
              <p className="mt-2 text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="px-6 py-8 text-center text-muted-foreground text-sm border-t border-border/60">
        © {new Date().getFullYear()} Zent — gerenciamento de eventos.
      </footer>
    </div>
  );
}
