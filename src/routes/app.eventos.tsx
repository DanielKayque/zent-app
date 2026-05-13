import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CreatedEvent, getEvents } from "@/api/events";

export const Route = createFileRoute("/app/eventos")({ component: EventsPage });

function EventsPage() {
  const [events, setEvents] = useState<CreatedEvent[]>([]);
  const matches = useRouterState({ select: (s) => s.matches });
  const isChild = matches.some((m) => m.routeId.includes("$eventId"));

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents();
      setEvents(events);
    };
    fetchEvents();
  }, [events]);

  if (isChild) return <Outlet />;

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

      {events.length === 0 ? (
        <div className="text-center py-20 bg-card rounded-3xl">
          <div className="text-6xl mb-3">🎪</div>
          <p className="text-muted-foreground">Nenhum evento por aqui ainda.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((ev, i) => (
            <Link
              to="/app/eventos/$eventId"
              params={{ eventId: String(ev.id) }}
              key={String(ev.id)}
              className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:-translate-y-1 transition animate-pop-in"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="p-5">
                <h3 className="font-display text-xl font-bold leading-tight">{ev.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">📍 {ev.address}</p>
                <p className="text-sm text-muted-foreground">📅 {formatDate(ev.date)}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm font-medium">👥 {ev.limitParticipants}</div>
                  <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden" />
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
