import { Confetti } from "@/components/Confetti";
import { Logo } from "@/components/Logo";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/forgot-password")({
  component: RouteComponent,
});

function RouteComponent() {
  const [email, setEmail] = React.useState("");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 py-12">
      <Confetti />
      <div className="w-full max-w-md animate-pop-in">
        <div className="text-center mb-8">
          <Logo size="lg" />
          <p className="mt-4 text-muted-foreground">Bem-vindo de volta.</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl p-8 shadow-soft space-y-5 border border-border/60 flex flex-col"
        >
          <h1 className="font-display text-3xl font-bold">Esqueci minha senha</h1>
          <Field label="Email" value={email} onChange={setEmail} type="email" />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-pop hover:scale-[1.02] transition"
          >
            Entrar
          </button>
          <p className="text-center text-sm text-muted-foreground">
            Novo por aqui?{" "}
            <Link to="/register" className="text-primary font-semibold hover:underline">
              Crie sua conta
            </Link>
          </p>
        </form>
      </div>
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
