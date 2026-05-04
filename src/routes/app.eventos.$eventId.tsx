import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getEvent, deleteEvent, type Event } from "@/lib/auth";

export const Route = createFileRoute("/app/eventos/$eventId")({
  component: EventDetail,
});

const colorMap: Record<Event["color"], string> = {
  coral: "bg-coral",
  sun: "bg-sun",
  mint: "bg-mint",
  grape: "bg-grape",
  sky: "bg-sky",
};

function EventDetail() {
  const { eventId } = Route.useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState<Event | null | undefined>(undefined);

  useEffect(() => { setEvent(getEvent(eventId) ?? null); }, [eventId]);

  if (event === undefined) return <div className="text-center py-20 text-muted-foreground">Carregando...</div>;

  if (event === null) {
    return (
      <div className="text-center py-20 animate-pop-in">
        <div className="text-7xl mb-4">🎈</div>
        <h1 className="font-display text-3xl font-black">Evento não encontrado</h1>
        <p className="text-muted-foreground mt-2">Talvez ele já tenha acabado!</p>
        <Link to="/app/eventos" className="mt-6 inline-block px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold">
          Ver outros eventos
        </Link>
      </div>
    );
  }

  const remove = () => {
    if (confirm("Apagar esse evento?")) {
      deleteEvent(event.id);
      navigate({ to: "/app/eventos" });
    }
  };

  const pct = Math.min(100, (event.attendees / event.capacity) * 100);

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-pop-in">
      <Link to="/app/eventos" className="text-sm text-muted-foreground hover:text-foreground">← Todos os eventos</Link>

      <div className={`relative ${colorMap[event.color]} rounded-4xl p-12 text-center overflow-hidden shadow-pop`}>
        <div className="absolute -top-8 -left-8 w-40 h-40 blob bg-background/30 animate-float" />
        <div className="absolute -bottom-10 -right-10 w-48 h-48 blob bg-background/20 animate-float [animation-delay:1s]" />
        <div className="relative">
          <div className="text-8xl mb-4 inline-block animate-wiggle">{event.emoji}</div>
          <span className="block px-3 py-1 rounded-full bg-background/70 backdrop-blur text-xs font-bold uppercase tracking-wider w-fit mx-auto mb-3">
            {event.category}
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-black">{event.title}</h1>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <InfoCard icon="📅" label="Quando">{formatDate(event.date)}</InfoCard>
        <InfoCard icon="📍" label="Onde">{event.location}</InfoCard>
        <InfoCard icon="👥" label="Confirmados">{event.attendees} de {event.capacity}</InfoCard>
      </div>

      <div className="bg-card rounded-3xl p-6 shadow-soft">
        <h2 className="font-display text-xl font-bold mb-2">Sobre o evento</h2>
        <p className="text-muted-foreground leading-relaxed">{event.description}</p>
      </div>

      <div className="bg-card rounded-3xl p-6 shadow-soft">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display text-xl font-bold">Lotação</h2>
          <span className="text-sm text-muted-foreground">{Math.round(pct)}%</span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-gradient-festive transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="flex gap-3">
        <button onClick={remove} className="px-6 py-3 rounded-full bg-destructive/10 text-destructive font-semibold hover:bg-destructive/20 transition">
          Apagar evento
        </button>
      </div>
    </div>
  );
}

function InfoCard({ icon, label, children }: { icon: string; label: string; children: React.ReactNode }) {
  return (
    <div className="bg-card rounded-3xl p-5 shadow-soft">
      <div className="text-2xl mb-1">{icon}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{label}</div>
      <div className="mt-1 font-semibold">{children}</div>
    </div>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("pt-BR", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" });
}
