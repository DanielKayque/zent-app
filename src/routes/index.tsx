import { createFileRoute, Link } from "@tanstack/react-router";
import { Confetti } from "@/components/Confetti";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zent — gerenciador de eventos para qualquer ocasião" },
      {
        name: "description",
        content:
          "Do casamento ao corporativo: organize convidados, datas, RSVP e detalhes do seu evento num único painel. Comece grátis.",
      },
      { property: "og:title", content: "Zent — gerenciamento de eventos sem complicação" },
      {
        property: "og:description",
        content:
          "A plataforma que reúne convidados, agenda e detalhes do seu evento em um só lugar.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen relative">
      <Confetti />

      {/* Header */}
      <header className="px-6 md:px-12 py-6 flex items-center justify-between max-w-7xl mx-auto">
        <Logo />
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#funcionalidades" className="hover:text-foreground transition">Funcionalidades</a>
          <a href="#por-que" className="hover:text-foreground transition">Por que Zent</a>
          <a href="#como-funciona" className="hover:text-foreground transition">Como funciona</a>
          <a href="#depoimentos" className="hover:text-foreground transition">Depoimentos</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/login" className="px-4 py-2 rounded-xl font-medium hover:bg-muted transition text-sm">
            Entrar
          </Link>
          <Link
            to="/register"
            className="px-5 py-2 rounded-xl bg-foreground text-background font-medium hover:scale-105 transition text-sm"
          >
            Criar conta
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="px-6 md:px-12 pt-12 md:pt-20 pb-24 max-w-6xl mx-auto text-center animate-pop-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
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
            <Link
              to="/register"
              className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg shadow-pop hover:scale-105 transition"
            >
              Começar grátis
            </Link>
            <a
              href="#como-funciona"
              className="px-8 py-4 rounded-xl bg-card border border-border font-semibold text-lg hover:bg-muted transition"
            >
              Ver como funciona
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Sem cartão de crédito · Configuração em 2 minutos
          </p>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
            {[
              { v: "12k+", l: "Eventos criados" },
              { v: "98%", l: "Satisfação" },
              { v: "150+", l: "Cidades" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">{s.v}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Funcionalidades */}
        <section id="funcionalidades" className="px-6 md:px-12 py-24 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Funcionalidades</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
              Tudo o que você precisa, num só lugar
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Ferramentas pensadas para quem organiza — do íntimo ao grande porte.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📅",
                t: "Agenda inteligente",
                d: "Visualize todos os seus eventos por data, categoria ou status. Nunca mais perca um detalhe.",
              },
              {
                icon: "👥",
                t: "Lista de convidados",
                d: "Adicione, edite e acompanhe confirmações. Veja capacidade e ocupação em tempo real.",
              },
              {
                icon: "📍",
                t: "Local e detalhes",
                d: "Centralize endereço, instruções, dress code e qualquer informação importante.",
              },
              {
                icon: "🎨",
                t: "Personalização visual",
                d: "Escolha cores e identidade para cada evento — do casual ao formal.",
              },
              {
                icon: "🔔",
                t: "Categorias inteligentes",
                d: "Casamento, corporativo, festa, show — organize por tipo e filtre com um clique.",
              },
              {
                icon: "🔒",
                t: "Privacidade total",
                d: "Seus dados ficam seus. Acesse de qualquer lugar com sua conta protegida.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 shadow-soft border border-border/60 hover:-translate-y-1 hover:shadow-pop transition animate-pop-in"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-4">
                  {f.icon}
                </div>
                <h3 className="font-display text-xl font-bold">{f.t}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Por que Zent */}
        <section id="por-que" className="px-6 md:px-12 py-24 bg-card border-y border-border/60">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Por que escolher Zent
                </span>
                <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">
                  Porque organizar evento <span className="italic text-primary">não deveria</span> ser um evento à parte.
                </h2>
                <p className="mt-6 text-muted-foreground text-lg">
                  A gente já passou por planilhas perdidas, grupos confusos no WhatsApp e
                  anotações em guardanapo. O Zent existe para você focar no que importa:
                  o momento, as pessoas, a memória.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/register"
                    className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-pop hover:scale-105 transition text-center"
                  >
                    Criar meu primeiro evento
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    t: "Economize horas de planejamento",
                    d: "O que levava uma tarde inteira no Excel, você resolve em minutos.",
                  },
                  {
                    t: "Tudo num lugar só",
                    d: "Convidados, agenda, local e detalhes — sem alternar entre 5 apps.",
                  },
                  {
                    t: "Funciona pra qualquer evento",
                    d: "Casamento, aniversário, workshop, lançamento, churrasco. É só criar.",
                  },
                  {
                    t: "Acesse de qualquer lugar",
                    d: "No celular, no notebook, no tablet. Seus eventos sempre com você.",
                  },
                ].map((b, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-5 rounded-xl bg-background border border-border/60 hover:border-primary/40 transition"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-semibold">{b.t}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{b.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="px-6 md:px-12 py-24 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Como funciona</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
              Em 3 passos simples
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6 relative">
            {[
              {
                n: "01",
                t: "Crie sua conta",
                d: "Cadastro rápido com email e senha. Pronto pra começar em segundos.",
              },
              {
                n: "02",
                t: "Monte seu evento",
                d: "Defina nome, data, local, capacidade e categoria. Personalize o visual.",
              },
              {
                n: "03",
                t: "Gerencie tranquilo",
                d: "Acompanhe confirmações, edite detalhes e veja tudo num painel claro.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="relative bg-card rounded-2xl p-8 shadow-soft border border-border/60 animate-pop-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="font-display text-5xl font-bold text-primary/20 mb-4">{s.n}</div>
                <h3 className="font-display text-2xl font-bold">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="px-6 md:px-12 py-24 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Depoimentos</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
              Quem usa, recomenda
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              {
                n: "Marina C.",
                r: "Organizou seu casamento",
                t: "Consegui gerenciar 180 convidados sem stress. O Zent salvou meu mês de junho.",
              },
              {
                n: "Rafael T.",
                r: "Produtor cultural",
                t: "Uso para todos os meus shows. A interface é clara e nunca trava na hora de checar a lista.",
              },
              {
                n: "Camila L.",
                r: "Coordenadora de eventos corporativos",
                t: "Substituiu três planilhas e dois apps. Recomendo pra qualquer time.",
              },
            ].map((d, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 shadow-soft border border-border/60 animate-pop-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="text-primary text-lg">★★★★★</div>
                <p className="mt-3 text-foreground leading-relaxed">"{d.t}"</p>
                <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border/60">
                  <div className="w-10 h-10 rounded-full bg-gradient-festive flex items-center justify-center text-primary-foreground font-bold">
                    {d.n.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{d.n}</div>
                    <div className="text-xs text-muted-foreground">{d.r}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="px-6 md:px-12 py-24">
          <div className="max-w-4xl mx-auto bg-gradient-festive rounded-3xl p-10 md:p-16 text-center shadow-pop relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blob -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/30 blob translate-y-1/2 -translate-x-1/4" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
                Pronto pra começar?
              </h2>
              <p className="mt-4 text-primary-foreground/90 text-lg max-w-xl mx-auto">
                Crie sua conta agora e organize seu próximo evento sem complicação.
              </p>
              <Link
                to="/register"
                className="inline-block mt-8 px-8 py-4 rounded-xl bg-background text-foreground font-semibold text-lg hover:scale-105 transition shadow-lg"
              >
                Criar conta grátis
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 border-t border-border/60">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Zent — gerenciamento de eventos.
            </p>
          </div>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#funcionalidades" className="hover:text-foreground transition">Funcionalidades</a>
            <a href="#por-que" className="hover:text-foreground transition">Por que Zent</a>
            <Link to="/login" className="hover:text-foreground transition">Entrar</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
