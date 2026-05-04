import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { register } from "@/lib/auth";
import { Logo } from "@/components/Logo";
import { Confetti } from "@/components/Confetti";

export const Route = createFileRoute("/register")({ component: RegisterPage });

function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      register(name, email, password);
      navigate({ to: "/app/eventos" });
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 py-12">
      <Confetti />
      <div className="w-full max-w-md animate-pop-in">
        <div className="text-center mb-8">
          <Logo size="lg" />
          <p className="mt-4 text-muted-foreground">Crie sua conta em segundos.</p>
        </div>
        <form onSubmit={onSubmit} className="bg-card rounded-2xl p-8 shadow-soft space-y-5 border border-border/60">
          <h1 className="font-display text-3xl font-bold">Criar conta</h1>
          {error && <div className="bg-destructive/10 text-destructive text-sm rounded-xl px-4 py-3">{error}</div>}
          <Field label="Nome" type="text" value={name} onChange={setName} />
          <Field label="Email" type="email" value={email} onChange={setEmail} />
          <Field label="Senha" type="password" value={password} onChange={setPassword} />
          <button type="submit" className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-pop hover:scale-[1.02] transition">
            Criar conta
          </button>
          <p className="text-center text-sm text-muted-foreground">
            Já tem conta?{" "}
            <Link to="/login" className="text-primary font-semibold hover:underline">Entrar</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

function Field({ label, type, value, onChange }: { label: string; type: string; value: string; onChange: (v: string) => void }) {
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
