import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { saveEvent, type Event } from "@/lib/auth2";

export const Route = createFileRoute("/app/novo")({ component: NewEventPage });

const emojis = ["🎉", "🎂", "💍", "🎸", "🍹", "🎪", "🎈", "🎃", "🎄", "🥂", "🚀", "🎤"];
const colors: Event["color"][] = ["coral", "sun", "mint", "grape", "sky"];
const colorMap: Record<Event["color"], string> = {
  coral: "bg-coral",
  sun: "bg-sun",
  mint: "bg-mint",
  grape: "bg-grape",
  sky: "bg-sky",
};

function NewEventPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<Omit<Event, "id">>({
    title: "",
    emoji: "🎉",
    date: "",
    location: "",
    description: "",
    category: "festa",
    attendees: 0,
    capacity: 50,
    color: "coral",
  });

  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = crypto.randomUUID();
    saveEvent({ ...form, id });
    navigate({ to: "/app/eventos/$eventId", params: { eventId: id } });
  };

  return (
    <div className="max-w-2xl mx-auto animate-pop-in">
      <h1 className="font-display text-4xl md:text-5xl font-black">Criar evento ✨</h1>
      <p className="text-muted-foreground mt-2">Conta pra gente como vai ser essa festa.</p>

      <form onSubmit={submit} className="mt-8 bg-card rounded-3xl p-6 md:p-8 shadow-soft space-y-6">
        <div>
          <label className="text-sm font-medium">Escolha um emoji</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {emojis.map((em) => (
              <button
                type="button"
                key={em}
                onClick={() => set("emoji", em)}
                className={`w-12 h-12 rounded-2xl text-2xl transition ${form.emoji === em ? "bg-primary scale-110" : "bg-muted hover:bg-secondary"}`}
              >
                {em}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Cor do card</label>
          <div className="mt-2 flex gap-3">
            {colors.map((c) => (
              <button
                type="button"
                key={c}
                onClick={() => set("color", c)}
                className={`w-10 h-10 rounded-full ${colorMap[c]} transition ${form.color === c ? "ring-4 ring-offset-2 ring-foreground/30 scale-110" : ""}`}
              />
            ))}
          </div>
        </div>

        <Field label="Nome do evento" value={form.title} onChange={(v) => set("title", v)} />

        <div className="grid sm:grid-cols-2 gap-4">
          <Field
            label="Data e hora"
            type="datetime-local"
            value={form.date}
            onChange={(v) => set("date", v)}
          />
          <div>
            <label className="text-sm font-medium">Categoria</label>
            <select
              value={form.category}
              onChange={(e) => set("category", e.target.value as Event["category"])}
              className="mt-1 w-full px-4 py-3 rounded-2xl bg-muted border-2 border-transparent focus:border-primary focus:bg-card outline-none transition"
            >
              <option value="festa">Festa</option>
              <option value="casamento">Casamento</option>
              <option value="corporativo">Corporativo</option>
              <option value="show">Show</option>
              <option value="outro">Outro</option>
            </select>
          </div>
        </div>

        <Field label="Local" value={form.location} onChange={(v) => set("location", v)} />

        <div>
          <label className="text-sm font-medium">Descrição</label>
          <textarea
            required
            rows={4}
            value={form.description}
            onChange={(e) => set("description", e.target.value)}
            className="mt-1 w-full px-4 py-3 rounded-2xl bg-muted border-2 border-transparent focus:border-primary focus:bg-card outline-none transition resize-none"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <Field
            label="Capacidade"
            type="number"
            value={String(form.capacity)}
            onChange={(v) => set("capacity", Number(v) || 0)}
          />
          <Field
            label="Confirmados"
            type="number"
            value={String(form.attendees)}
            onChange={(v) => set("attendees", Number(v) || 0)}
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg shadow-pop hover:scale-[1.02] transition"
        >
          Criar evento 🎉
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <input
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full px-4 py-3 rounded-2xl bg-muted border-2 border-transparent focus:border-primary focus:bg-card outline-none transition"
      />
    </label>
  );
}
