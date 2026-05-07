import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Event } from "@/lib/auth2";
import { getEvents } from "@/api/events";

export const Route = createFileRoute("/app/eventos")({ component: EventsPage });

const colorMap: Record<Event["color"], string> = {
  coral: "bg-coral",
  sun: "bg-sun",
  mint: "bg-mint",
  grape: "bg-grape",
  sky: "bg-sky",
};

function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [filter, setFilter] = useState<string>("todos");

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents();
      setEvents(events);
    };
    fetchEvents();
  }, []);

  const cats = ["todos", "festa", "casamento", "show", "corporativo", "outro"];
  const visible = filter === "todos" ? events : events.filter((e) => e.category === filter);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 animate-pop-in">
        <div>
          <h1 className="font-display text-4xl md:text-5xl font-bold">Seus eventos</h1>
          <p className="text-muted-foreground mt-2">{events.length} eventos cadastrados</p>
        </div>
        <Link
          to="/app/novo"
          className="self-start md:self-auto px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-pop hover:scale-105 transition"
        >
          + Novo evento
        </Link>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
              filter === c ? "bg-foreground text-background" : "bg-card hover:bg-muted"
            }`}
          >
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="text-center py-20 bg-card rounded-3xl">
          <div className="text-6xl mb-3">🎪</div>
          <p className="text-muted-foreground">Nenhum evento por aqui ainda.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((ev, i) => (
            <Link
              key={ev.id}
              to="/app/eventos/$eventId"
              params={{ eventId: ev.id }}
              className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:-translate-y-1 transition animate-pop-in"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div
                className={`relative h-32 ${colorMap[ev.color]} flex items-center justify-center`}
              >
                <span className="text-6xl group-hover:scale-110 group-hover:rotate-6 transition">
                  {ev.emoji}
                </span>
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur text-xs font-semibold">
                  {ev.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold leading-tight">{ev.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">📍 {ev.location}</p>
                <p className="text-sm text-muted-foreground">📅 {formatDate(ev.date)}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm font-medium">
                    👥 {ev.attendees}/{ev.capacity}
                  </div>
                  <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-festive"
                      style={{ width: `${Math.min(100, (ev.attendees / ev.capacity) * 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}
